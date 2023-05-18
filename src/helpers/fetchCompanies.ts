import { supabase } from '../supabaseClient';
import { UpdatedCompany } from '../types/company';

export const fetchCompanies = async (): Promise<UpdatedCompany[]> => {
  const {
    data: { users },
    error,
  } = await supabase.auth.admin.listUsers();

  if (error) {
    throw error;
    // console.error('Error:', error);
  }

  if (users) {
    const filteredCompanies = users.filter(
      (user) => user.user_metadata.company === true
    );

    const profileIds = filteredCompanies.map((company) => company.id);

    const { data: profiles, error: profilesError } = await supabase
      .from('profiles')
      .select('id, username, avatar_url, twitter, linkedin, website')
      .in('id', profileIds);

    console.log('Profiles', profiles);

    if (profilesError) {
      console.error('ProfilesError');
    }

    if (profiles) {
      const updatedCompanies = filteredCompanies.map((company) => {
        const profile = profiles.find((profile) => profile.id === company.id);
        if (profile) {
          return {
            ...company,
            profile: {
              username: profile.username,
              avatar_url: profile.avatar_url,
              twitter: profile.twitter,
              linkedin: profile.linkedin,
              website: profile.website,
            },
          };
        }
        return company as unknown as UpdatedCompany;
      });

      return updatedCompanies as UpdatedCompany[];
    }
  }

  return [];
};
