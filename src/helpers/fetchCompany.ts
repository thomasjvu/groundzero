import { supabase } from '../supabaseClient';
import { Profile } from '../types/profile';

export async function fetchCompany(id: string | undefined, setCompany: Function): Promise<void> {
    const {
        data: { users },
        error
    } = await supabase.auth.admin.listUsers();

    if (error) {
        console.error('Error', error);
    }

    if (users) {
        const { data: profile, error: profileError } = await supabase.from('profiles').select().eq('id', id).single();

        if (profileError) {
            console.error('Profile Error', profileError);
        }

        setCompany(profile as Profile);
        console.log('Company Profile', profile);
    }
}
