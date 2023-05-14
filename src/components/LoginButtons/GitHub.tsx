import { useState } from "react";
import { supabase } from "../../supabaseClient";
import { Icon } from '@iconify/react'

const LoginButtonsGitHub: React.FC = () => {
    const [loading, setLoading] = useState(false);

    const handleGitHubLogin = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        const { error } = await supabase.auth.signInWithOAuth({
            provider: "github",
        });

        if (error) {
            alert(error.message);
        }

        setLoading(false);
    };

    return (
        <button className="button block btn font-mono bg-slate-700 w-full" disabled={loading} onClick={handleGitHubLogin}>
            {loading ? <span>Loading</span> : 
                <div className="flex gap-5 items-center">
                <Icon icon="jam:github" width="1.25rem" height="1.25rem"/>
                <span>Login with GitHub</span>
                </div>
            }
        </button>
    );
};

export default LoginButtonsGitHub;
