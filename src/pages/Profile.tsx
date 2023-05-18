import Layout from "../layouts/Layout";
import Auth from "../components/Auth/Auth";
import Account from "../components/Account/Account"
import { handleSession } from "../helpers/handleSession";

const Profile: React.FC = (): JSX.Element => {
    const session = handleSession()

    return (
        <Layout>
            <div className="">
                {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
            </div>
        </Layout>
    )
}

export default Profile
