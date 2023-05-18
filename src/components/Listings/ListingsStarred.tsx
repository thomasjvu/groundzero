import { useEffect, useState } from "react"
import { StarredListing } from '../../types/listing'
import { fetchStarredListings } from "../../helpers/fetchStarredListings"

const ListingsStarred: React.FC = (): JSX.Element => {

    const [starredListings, setStarredListings] = useState<StarredListing[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)


    console.log("starred Listings", starredListings)
    useEffect(() => {
        fetchStarredListings({setStarredListings, setIsLoading, setError})
        // fetchListings
    }, [])

    if (isLoading) {
        <div>Loading!</div>
    }

    if (error) {
        <div>Error: {error}</div>
    }

    return (
        <div>
            <h3 className="font-display">Listings Starred</h3>
            {/* map through starred listings array */}
            { starredListings.map(starredListing => (
                <div>
                    <p>{starredListing.id}</p>
                </div>
            ))}
        </div>
    )
}

export default ListingsStarred
