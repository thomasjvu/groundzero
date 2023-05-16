import Layout from '../layouts/Layout'
import ListingDetails from '../components/Listings/ListingDetails'

const Listing: React.FC = (): JSX.Element => {
    return (
        <Layout>
            <ListingDetails />
        </Layout>
    )
}

export default Listing
