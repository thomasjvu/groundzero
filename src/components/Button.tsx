import { AuthError } from "@supabase/supabase-js";

type Props = {
    text: string;
    onClick: () => Promise<{error: AuthError | null}>
}

const Button: React.FC<Props> = ({text, onClick}) => {
    return (
       <button onClick={onClick}>{text}</button>
    )
}

export default Button
