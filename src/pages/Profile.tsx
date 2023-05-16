import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import Layout from "../layouts/Layout";
import Auth from "../components/Auth";
import Account from "../components/Account"
import { Session } from "@supabase/supabase-js";

const Profile: React.FC = (): JSX.Element => {
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });
        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);

    return (
        <Layout>
            <div className="">
                {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
            </div>
        </Layout>
    )
}

export default Profile
