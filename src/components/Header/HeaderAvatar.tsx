import { useState, useEffect } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "../../supabaseClient";
import Avatar from "../Avatar/Avatar"

const HeaderAvatar: React.FC<{session: Session}> = ({session}) => {

    const [avatar_url, setAvatarUrl] = useState(null);

    useEffect(() => {
        async function getProfile() {
            const { user } = session;

            let { data, error } = await supabase
                .from('profiles')
                .select(`username, website, avatar_url, currency`)
                .eq(`id`, user.id)
                .single();

            if (error) {
                console.warn(error);
            } else if (data) {
                setAvatarUrl(data.avatar_url);
            }
        }
        getProfile();

    }, [session]);

    return (
        <Avatar 
            url={avatar_url ?? ''} 
            size={33}
        />
    )
}

export default HeaderAvatar
