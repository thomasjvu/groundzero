import { useState } from 'react';
import AuthUser from './AuthUser';
import AuthCompany from './AuthCompany';

const Auth: React.FC = () => {
    const [isCompany, setIsCompany] = useState(false);


    return (
        <div id="authentation-div">
            <div id="company-toggle" className="flex items-center justify-end gap-2">
                    <label htmlFor="company-checkbox" className="font-mono mr-2">
                        {isCompany ? "🏢 Company" : "👤 User"}
                    </label>
                <input
                    id="company-checkbox"
                    type="checkbox"
                    className="toggle"
                    onChange={() => setIsCompany(!isCompany)}
                />
            </div>
            {isCompany ? <AuthCompany /> : <AuthUser />}
        </div>
    );
};

export default Auth;
