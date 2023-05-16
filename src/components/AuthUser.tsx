import { useState } from "react";
import { supabase } from "../supabaseClient";
import LoginButtonsDiscord from "./LoginButtons/Discord";
import LoginButtonsGitHub from "./LoginButtons/GitHub";

const AuthUser: React.FC = () => {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')

    const handleLogin = async (e: any) => {
        e.preventDefault()

        setLoading(true)
        const { data, error } = await supabase.auth.signInWithOtp({ email })

        if (error) {
            alert(error.message)
        } else {
            alert('Check your email for the login link!')
        }
        setLoading(false)

        console.log(data)
    }


    return (
            <div className="form-signup-user w-full">
                <h1 className="header text-5xl font-display text-center">Login</h1>
                <form className="form-widget font-mono flex flex-col gap-5" onSubmit={handleLogin}>
                    <div className="form-group flex flex-col gap-5">
                        <label htmlFor="user-email">Email</label>
                        <input id="user-email" className="input input-bordered" type="email" placeholder="Your email" value={email} required={true} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-5">
                        <button className="btn btn-primary w-full" disabled={loading}>
                            {loading ? <span>Loading</span> : <span>Send Magic Link</span>}
                        </button>
                        <LoginButtonsGitHub />
                        <LoginButtonsDiscord />
                    </div>
                </form>
            </div>
    )
}

export default AuthUser
