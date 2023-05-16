import { useState } from 'react';
import { supabase } from '../../supabaseClient';
import { Icon } from '@iconify/react';

const LoginButtonsGitHub: React.FC = () => {
    const [loading, setLoading] = useState(false);

    const handleGitHubLogin = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'github'
        });

        if (error) {
            alert(error.message);
        }

        setLoading(false);
    };

    return (
        <button
            className="button btn block w-full bg-neutral-800 font-mono text-white hover:bg-neutral-900"
            disabled={loading}
            onClick={handleGitHubLogin}>
            {loading ? (
                <span>Loading</span>
            ) : (
                <div className="flex items-center justify-center gap-5">
                    <Icon icon="jam:github" width="1.25rem" height="1.25rem" />
                    <span>Login with GitHub</span>
                </div>
            )}
        </button>
    );
};

export default LoginButtonsGitHub;
