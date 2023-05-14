import { useState } from 'react';
import { supabase } from '../../supabaseClient';
import { Icon } from '@iconify/react';

const LoginButtonsDiscord: React.FC = () => {
    const [loading, setLoading] = useState(false);

    const handleDiscordLogin = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'discord'
        });

        if (error) {
            alert(error.message);
        }

        setLoading(false);
    };

    return (
        <button
            className="button btn w-full font-mono"
            disabled={loading}
            onClick={handleDiscordLogin}>
            {loading ? (
                <span>Loading</span>
            ) : (
                <div className="flex items-center gap-5">
                    <Icon icon="jam:discord" width="1.25rem" height="1.25rem" />
                    <span>Login with Discord</span>
                </div>
            )}
        </button>
    );
};

export default LoginButtonsDiscord;
