import { useState } from "react";
import { supabase } from "../../supabaseClient";

const AuthCompanySignIn: React.FC = (): JSX.Element => {
    const [loading, setLoading] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSignIn = async (e:any) => {
        e.preventDefault()

        setLoading(true)
        const { data, error } = await supabase.auth.signInWithPassword({email, password})

        if (error) {
            alert(error.message)
        } else {
            const company = true
            await supabase.from('users').update({company}).eq('id', data.user?.id)

        }
        setLoading(false)

        console.log(data)
    }


    return (
        <div className="form-signup-company w-full">
            <h1 className="header text-5xl font-display text-center my-5">Sign In</h1>
            <form className="form-widget w-full gap-10" onSubmit={handleSignIn}>
                <div className="form-group flex flex-col font-mono w-full gap-5">
                    <label htmlFor="">Email</label>
                    <input className="input input-bordered" type="email" placeholder="Your email" value={email} required={true} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="">Password</label>
                    <input className="input input-bordered" type="password" placeholder="Password" value={password} required={true} onChange={(e) => setPassword(e.target.value)} />
                    <button className="btn btn-primary" type="submit" disabled={loading}>
                        {loading ? <span>Loading</span> : <span>Submit</span>}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AuthCompanySignIn
