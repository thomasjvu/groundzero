import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import defaultAvatar from '../assets/images/icon.png';

interface AvatarProps {
    url?: string;
    size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ url, size }) => {
    const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

    useEffect(() => {
        if (url) downloadImage(url);
    }, [url]);

    async function downloadImage(path: string) {
        try {
            const { data, error } = await supabase.storage.from('avatars').download(path);
            if (error) {
                throw error;
            }
            const url = URL.createObjectURL(data);
            setAvatarUrl(url);
        } catch (error: any) {
            console.log('Error downloading image: ', error.message);
        }
    }

    return (
        <div id="avatar-container" className="flex flex-col items-center">
            {avatarUrl ? (
                <img
                    src={avatarUrl}
                    alt="Avatar"
                    className="image avatar rounded-full border-2 border-neutral-500"
                    style={{ height: size, width: size }}
                />
            ) : (
                <img
                    src={defaultAvatar}
                    alt="Avatar"
                    className="image avatar rounded-full border-2 border-neutral-500"
                    style={{ height: size, width: size }}
                />
            )}
        </div>
    );
};

export default Avatar;
