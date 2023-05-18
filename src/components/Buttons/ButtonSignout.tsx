import { SupabaseBtnProps } from "../../types/button";

const ButtonSignout: React.FC<SupabaseBtnProps> = ({text, onClick}) => {
    return (
       <button className="btn w-full" onClick={onClick}>{text}</button>
    )
}

export default ButtonSignout
