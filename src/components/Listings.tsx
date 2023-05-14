import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { Listing } from "../types/listing";

const Listings: React.FC = () => {
    const [listings, setListings] = useState<Listing[]>([]);

    // if the listings database changes, refetch our listings
    useEffect(() => {
        fetchListings();
    }, []);

    // get the latest listings
    async function fetchListings() {

        const { data, error } = await supabase.from("listings").select().order("created_at", { ascending: false }).range(0, 9)

        if (error) {
            console.error("Error fetching listings:", error)
            return;
        }

        if (data) {
            setListings(data)
        }

        // console.log("Listings:", data)
    }


    return (
        <div className="latest-listings w-full flex flex-col gap-5">
            {listings && listings.map((listing) => (
                <Link to={`/jobs/${listing.id}`} key={listing.id}>
                    <div className="bg-transparent border rounded-xl p-10">
                        <h3 className="font-mono text-xl font-bold">{listing.title}</h3>
                        {/* <h3 className="font-mono text-xl">{listing.content}</h3> */}
                        <h4 className="font-mono text-xl">{listing.category}</h4>
                        {/* <h6>{listing.company}</h6> */}
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Listings;
