import { useState } from 'react';
import { supabase } from '../supabaseClient';

interface AvatarUploadProps {
    onUpload?: (event: any, filePath: string) => void;
}

const AvatarUpload: React.FC<AvatarUploadProps> = ({ onUpload }) => {
    const [uploading, setUploading] = useState(false);


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
        <div id="avatar-upload-container" className="flex flex-col items-center">
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

export default AvatarUpload;
