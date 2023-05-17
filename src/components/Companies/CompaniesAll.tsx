import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import { UpdatedCompany } from '../../types/company';
import Twitter from '../Icons/Twitter';
import Linkedin from '../Icons/Linkedin';
import Website from '../Icons/Website';

const CompaniesAll: React.FC = (): JSX.Element => {
    const [companies, setCompanies] = useState<UpdatedCompany[]>([]);

    useEffect(() => {
        fetchCompanies();
        // console.log("companies", companies)
    }, []);

    const fetchCompanies = async (): Promise<void> => {
        const {
            data: { users },
            error
        } = await supabase.auth.admin.listUsers();

        if (error) {
            console.error('Error:', error);
            // throw new Error(error)
        }

        if (users) {
            const filteredCompanies = users.filter((user) => user.user_metadata.company === true);
            // setCompanies(filteredCompanies)

            const profileIds = filteredCompanies.map((company) => company.id);

            const { data: profiles, error: profilesError } = await supabase
                .from('profiles')
                .select('id, username, avatar_url, twitter, linkedin, website')
                .in('id', profileIds);
            // .order('username', { ascending: true })

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
                                website: profile.website
                            }
                        };
                    }
                    return company as unknown as UpdatedCompany;
                });

                // const sortedCompanies = updatedCompanies.sort((a, b) => a.profile.username.localeCompare(b.profile.username))
                // console.log('Sorted Companies', sortedCompanies)
                setCompanies(updatedCompanies as UpdatedCompany[]);
            }
        }
    };

    return (
        <div>
            <h1 className="mb-10 border-b-2 font-display text-5xl">All Companies</h1>
            <div className="flex w-full gap-5">
                {companies.map((company) => (
                    <Link to={company.id} key={company.id} className='flex w-1/3 flex-col gap-5  rounded border p-10 font-mono hover:border-primary'>
                            {company.profile.avatar_url && (
                                <img
                                    src={`${import.meta.env.VITE_SUPABASE_STORAGE}${company.profile?.avatar_url}`}
                                    width={50}
                                    height={50}
                                    className="rounded"
                                />
                            )}
                            <h2 className="font-display text-4xl">{company.profile?.username}</h2>
                            <div id="company-links" className="flex justify-end gap-2">
                                {company.profile.twitter && (
                                    <Twitter width={15} height={15} url={company.profile?.twitter} />
                                )}
                                {company.profile.linkedin && (
                                    <Linkedin width={15} height={15} url={company.profile?.linkedin} />
                                )}
                                {company.profile.website && (
                                    <Website width={15} height={15} url={company.profile?.website} />
                                )}
                            </div>
                            {/* <p>Username: {company.profile?.username}</p> */}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CompaniesAll;
