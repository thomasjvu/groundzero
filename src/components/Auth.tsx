import { useState } from "react";
import { supabase } from "../supabaseClient";
import LoginButtonsDiscord from "./LoginButtons/Discord";
import LoginButtonsGitHub from "./LoginButtons/GitHub";

interface SignInWithOtpCredentials {
    email: string;
    redirectTo?: string;
    company: boolean
}

export default function Auth() {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')

    const handleLogin = async (e: any) => {
        e.preventDefault()

        setLoading(true)
        const { data, error } = await supabase.auth.signInWithOtp({ email, company: true, redirectTo: '/profile' } as SignInWithOtpCredentials)

        if (error) {
            alert(error.message)
        } else {
            alert('Check your email for the login link!')
        }
        setLoading(false)

        console.log(data)
    }


    return (
        <div className="">
            <div className="form-widget">
                <h1 className="header text-5xl font-display text-center">Login</h1>
                <form className="form-widget" onSubmit={handleLogin}>
                    <div>
                        <input className="inputField" type="email" placeholder="Your email" value={email} required={true} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <button className={'button block'} disabled={loading}>
                            {loading ? <span>Loading</span> : <span>Send Magic Link</span>}
                        </button>
                    </div>
                </form>
                <LoginButtonsGitHub />
                <LoginButtonsDiscord />
            </div>
        </div>
    )
}
