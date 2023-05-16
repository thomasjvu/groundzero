import { useState } from "react"
import AuthCompanySignIn from "./AuthCompanySignIn"
import AuthCompanySignUp from "./AuthCompanySignUp"

const AuthCompany: React.FC = (): JSX.Element => {

    const [isRegistration, setIsRegistration] = useState(false)

    return (
        <div>
            {!isRegistration ? <AuthCompanySignIn /> : <AuthCompanySignUp />}
            <div id="company-toggle" className="flex items-center justify-start gap-2 mt-5">
                <label htmlFor="company-checkbox" className="font-mono mr-2">
                {isRegistration ? "Register" : "Login"}
                </label>
                <input
                    id="company-checkbox"
                    type="checkbox"
                    className="toggle"
                    onChange={() => setIsRegistration(!isRegistration)}
                />
            </div>
        </div>
    )
}

export default AuthCompany
