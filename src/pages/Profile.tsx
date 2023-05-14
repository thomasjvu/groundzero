import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import Layout from "../layouts/Layout";
import Auth from "../components/Auth";
import Account from "../components/Account"

const Profile: React.FC = () => {
    const [session, setSession] = useState(null);

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
