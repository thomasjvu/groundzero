import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { supabase } from '../../supabaseClient';
import { Session } from '@supabase/supabase-js';
import { ButtonStarListingProps } from '../../types/listing';

const ButtonStarListing: React.FC<ButtonStarListingProps> = ({ listingId, companyId }): JSX.Element => {
    const [isStarred, setIsStarred] = useState(false);
    const [session, setSession] = useState<Session | null>(null);
    // const [isCompany, setIsCompany] = useState<boolean>(false);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });
        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

    });

    const userId = session?.user.id;

    // Check if company
    // if (session && session.user.user_metadata.company === true) {
    //    setIsCompany(true) 
    // }


    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const { data: profileData, error: profileError } = await supabase
                .from('profiles')
                .select('starred_listings')
                .match({ id: userId})

                if (profileError) {
                    console.error('Profile Error', profileError)
                    return;
                }

                const starredListings = profileData?.[0].starred_listings || null
                const isListingStarred = starredListings.includes(listingId)
                setIsStarred(isListingStarred)
            } catch (error) {
                console.error('Caught Error:', error)
            }
        }

        if (session) {
            fetchProfile()
        }
    }, [])

    /* Star for Users */
    const handleStarListing = async (): Promise<void> => {
        try {
            // Require session to star the listing
            if (!session) {
                return;
            }


            const { data, error } = await supabase
                .from('profiles')
                .select('starred_listings')
                .match({id: userId})

            if (error) {
                console.error("Profile Error", error)
                return;
            }

            // Init starred listings
            const starredListings = data?.[0].starred_listings || []

            // Check if listing is already in the starredlistings array
            const isListingStarred = starredListings.includes(listingId)

            let updatedStarredListings;

            // If it is, remove it, otherwise, add it
            if (isListingStarred) {
                updatedStarredListings = starredListings.filter((id: string) => id !== listingId)
            } else {
                updatedStarredListings = [...starredListings, listingId]
            }

            // Update the user's profile with the updated starred listings
            const { error: updateError } = await supabase
                .from('profiles')
                .update({ starred_listings: updatedStarredListings })
                .match({ id: userId})

            if (updateError) {
                console.error(updateError)
                return
            } else {
                setIsStarred(!isListingStarred)
            }

        } catch (error) {
            console.error("Caught error:", error)
        }
    }



            // const starredListings = data?.[0].starred_listings || [];

            // // check if listing is already starred
            // const isListingStarred = starredListings.includes(listingId);

            // // initialize updatedStarredListings
            // let updatedStarredListings;

            // /* handle isCompany logic */
            // if (isListingStarred && isCompany) {
            //     // remove listing from starred_listings
            //     updatedStarredListings = starredListings.filter((id: string) => id !== listingId);
            // } else if (!isListingStarred && isCompany && userId === companyId) {
            //     // add listing to starred_listings
            //     updatedStarredListings = Array.from(new Set([...starredListings, listingId]));
            // }             

            // /* handle user logic */
            // else if (isListingStarred && !isCompany) {
            //     // Remove the listing ID from the starred listings if it is already starred
            //     updatedStarredListings = starredListings.filter((id: string) => id !== listingId);
            // } else {
            //     // Add the listing ID to the starred listings if it is not starred
            //     updatedStarredListings = Array.from(new Set([...starredListings, listingId]));
            // }

            // // Update the user's profile with the updated starred listings
            // const { error: updateError } = await supabase
            //     .from('profiles')
            //     .update({ starred_listings: updatedStarredListings })
            //     .match({ id: userId });

            // if (updateError) {
            //     // Handle Error
            //     console.error(updateError);
            //     return;
            // } else {
            //     setIsStarred((prevIsStarred) => !prevIsStarred); // will either star or unstar the listing
            // }
        // } catch (error) {
            // console.error(error);
        // }
    // };


    /* Star for Companies */

    // if (session && session.user.user_metadata.company === true) {
    //    setIsCompany(true) 
    // }

    // const handleCompanyStarListing = async () => {
    //     try {

    //         if (!session || !isCompany) {
    //             return;
    //         }

    //         // SELECT the starred_listings column for the current user
    //         const { data, error } = await supabase
    //             .from('profiles')
    //             .select('starred_listings')
    //             .match({ id: userId });

    //         if (error) {
    //             // Handle Error
    //             console.error('Profile Error', error);
    //             return;
    //         }

    //         // init starredListings as empty array to account for null
    //         const starredListings = data?.[0].starred_listings || []
            
    //         // check if listing is starred
    //         const isListingStarred = starredListings.includes(listingId)

    //         if (companyId !== userId) {
    //             console.error('Invalid access: Company can only star their own listings.')
    //             return;
    //         } else {
    //             const updatedStarredListings = isListingStarred
    //             ? starredListings.filter((id: string) => id !== listingId)
    //             : [...starredListings, listingId]

    //             const { error: updateError } = await supabase
    //             .from('profiles')
    //             .update({ starred_listings: updatedStarredListings })
    //             .match({id: userId})

    //             if (updateError) {
    //                 console.error('Update Error', updateError)
    //                 return;
    //             }
    //         }

    //             setIsStarred(!isStarred)
    //         }


    // } catch (error) {
    //     console.error('caught error', error)
    // }

    return (
        <>
            {session && (
                <button id="star-listing-btn" className="btn-primary btn" onClick={handleStarListing}>
                    {!isStarred ? (
                        <Icon icon="jam:star" width={15} height={15} />
                    ) : (
                        <Icon icon="jam:star-f" width={15} height={15} />
                    )}
                    <span>Star</span>
                </button>
            )}
        </>
    );
};

export default ButtonStarListing;
