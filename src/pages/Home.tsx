import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
// import {HeroImage} from "../assets/images/aesthetic-anime-girl.png"

import Layout from "../layouts/Layout";
import Companies from "../components/Companies";
// import CardOverlay from "../components/Cards/CardOverlay";
import GlassCard from "../components/GlassCard";
import HeroOverlay from "../components/HeroOverlay";
// import Auth from "../components/Auth";
// import Account from "../components/Account";
import Listings from "../components/Listings";
import ListingsForm from "../components/ListingsForm";
import SponsorsCardOverlay from "../components/Sponsors/SponsorsCardOverlay"

const Home: React.FC = () => {
    const [session, setSession] = useState<any>("");

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });
        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
        // console.log("Session", session)
    }, []);

    return (
        <Layout>
            <div id="container-home" className="flex flex-col gap-10">
                <HeroOverlay
                    image="https://res.cloudinary.com/dlcz9y0nv/image/upload/v1683836877/gzo/aesthetic-anime-girl_transparent_j1dfyi.png"
                    title="Prepare for your gaming career at Ground Zero"
                    text="Ground Zero is the best place to start your gaming career"
                    primaryButtonText="Hire Talent"
                    secondaryButtonText="Find a job"
                />
                <Companies />
                <div id="container-listings" className="grow-1 flex gap-20 font-display text-3xl relative">
                    <section className="flex grow flex-col gap-5">
                        <h3 className="font-display text-3xl">Latest Opportunities</h3>
                        <Listings />
                        <ListingsForm />
                    </section>

                    <section className="">
                        <div className="sticky top-28 flex flex-col gap-5 mt-8">
                            {session && session.user.user_metadata.company === null ?
                                <GlassCard
                                    src="https://res.cloudinary.com/dlcz9y0nv/image/upload/v1683836877/gzo/aesthetic-anime-girl_transparent_j1dfyi.png"
                                    alt="Image of Video Game"
                                    title="Post a Job"
                                    text="Reach thousands of industry professionals and hire alongside the most famous brands in gaming and esports."
                                    button="Get Started"
                                />
                                :
                                <GlassCard
                                    src="https://res.cloudinary.com/dlcz9y0nv/image/upload/v1683850603/gzo/aesthetic-sniper-girl_g5ejhq.png"
                                    alt="Image of Video Game"
                                    title="Aim For Your Next Job"
                                    text="Search through our listings to find the job that suits you."
                                    buttonText="Get Started"
                                    buttonLink="/jobs"
                                />
                            }
                            <SponsorsCardOverlay 
                                imageSrc="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_700/ncom/software/switch/70010000063714/05b3d8e8c74beaa43a7714c275a7ad06018ed069bd6bd3f923442b9ac16fdc49"
                                imageAlt="Legend of Zelda: Tears of the Kingdom cover"
                                text="Purchase from our sponsor"
                                title="Legend of Zelda: Tears of the Kingdom"
                                buttonLink="https://amzn.to/3MogJLO"
                                buttonText="Purchase"
                            />
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
