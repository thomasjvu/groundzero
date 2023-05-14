import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import defaultAvatar from '../assets/images/icon.png';

interface AvatarProps {
    url?: string;
    size?: number;
    onUpload?: (event: any, filePath: string) => void;
}

const Avatar: React.FC<AvatarProps> = ({ url, size, onUpload }) => {
    const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
    const [uploading, setUploading] = useState(false);

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

    async function uploadAvatar(event: any) {
        try {
            setUploading(true);

            if (!event.target.files || event.target.files.length === 0) {
                throw new Error('You must select an image to upload.');
            }

            const file = event.target.files[0];
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random()}.${fileExt}`;
            const filePath = `${fileName}`;

            let { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file);

            if (uploadError) {
                throw uploadError;
            }

            if (onUpload) {
                onUpload(event, filePath);
            }
        } catch (error: any) {
            alert(error.message);
        } finally {
            setUploading(false);
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
            <div className="mt-5">
                <label className="button primary block font-mono italic" htmlFor="single">
                    {uploading ? 'Uploading ...' : 'Upload image'}
                </label>
                <input
                    style={{ visibility: 'hidden', position: 'absolute' }}
                    type="file"
                    id="single"
                    accept="image/*"
                    onChange={uploadAvatar}
                    disabled={uploading}
                />
            </div>
        </div>
    );
};

export default Avatar;
