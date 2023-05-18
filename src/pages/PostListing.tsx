import Layout from "../layouts/Layout";
import ListingsForm from "../components/Listings/ListingsForm";

import { handleSession } from "../helpers/handleSession";
import { Link } from "react-router-dom";

const PostListing: React.FC = (): JSX.Element => {

    const session = handleSession()

    return (
        <Layout>
        {session && session.user.user_metadata.company ? (
            <ListingsForm />
        ) : (
            <div>
                <h1 className="text-4xl font-mono">Please <Link className="hover:text-accent text-primary" to="/profile">login</Link> as a company to submit a job.</h1>
            </div>
        )}
        </Layout>
    );
};

export default PostListing;
