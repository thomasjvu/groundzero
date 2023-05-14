import { AuthError } from "@supabase/supabase-js";

type Props = {
    text: string;
    onClick: () => Promise<{error: AuthError | null}>
}

const ButtonSignout: React.FC<Props> = ({text, onClick}) => {
    return (
       <button className="btn w-full" onClick={onClick}>{text}</button>
    )
}

export default ButtonSignout
