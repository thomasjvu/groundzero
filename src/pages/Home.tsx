import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import CyberpunkGirl from "../assets/images/aesthetic-cyberpunk-girl.png"
import SniperGirl from "../assets/images/aesthetic-sniper-girl.png"

import Layout from "../layouts/Layout";
import CompaniesGrid from "../components/CompaniesGrid";
import GlassCard from "../components/GlassCard";
import HeroOverlay from "../components/HeroOverlay";
import Listings from "../components/Listings";
import ListingsForm from "../components/ListingsForm";
import SponsorsCardOverlay from "../components/Sponsors/SponsorsCardOverlay"

import { Session } from "@supabase/supabase-js";

const Home: React.FC = () => {
    const [session, setSession] = useState<Session | null>(null);

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
                    image={CyberpunkGirl}
                    title="Prepare for your gaming career at Ground Zero"
                    text="Ground Zero is the best place to start your gaming career"
                    primaryButtonText="Hire Talent"
                    secondaryButtonText="Find a job"
                />
                <CompaniesGrid />
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
                                    src={SniperGirl}
                                    alt="Image of Video Game"
                                    title="Post a Job"
                                    text="Reach thousands of industry professionals and hire alongside the most famous brands in gaming and esports."
                                    buttonText="Get Started"
                                    buttonLink="/post"
                                />
                                :
                                <GlassCard
                                    src={SniperGirl}
                                    alt="Image of Video Game"
                                    title="Aim For Your Next Job"
                                    text="Search through our listings to find the job that suits you."
                                    buttonText="Get Started"
                                    buttonLink="/jobs"
                                />
                            }
                            <SponsorsCardOverlay 
                                imageSrc="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_700/ncom/software/switch/70010000063714/05b3d8e8c74beaa43a7714c275a7ad06018ed069bd6bd3f923442b9ac16fdc49"
                                imageAlt="Cover Art of The Legend of Zelda: Tears of the Kingdom"
                                text="Purchase from our sponsor"
                                title="The Legend of Zelda: Tears of the Kingdom"
                                buttonLink="https://amzn.to/3MogJLO"
                                buttonText="Purchase"
                                className="font-mono"
                            />
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
