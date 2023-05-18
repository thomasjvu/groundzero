import CyberpunkGirl from "../assets/images/aesthetic-cyberpunk-girl.png"
import SniperGirl from "../assets/images/aesthetic-sniper-girl.png"

import Layout from "../layouts/Layout";
import CompaniesDisplay from "../components/Companies/CompaniesDisplay";
import CardGlass from "../components/Cards/CardGlass";
import HeroOverlay from "../components/Hero/HeroOverlay";
import ListingsLatest from "../components/Listings/ListingsLatest";
import ListingsForm from "../components/Listings/ListingsForm";
import CardOverlay from "../components/Cards/CardOverlay";

import { handleSession } from "../helpers/handleSession";

const Home: React.FC = (): JSX.Element => {

    const session = handleSession()

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
                <CompaniesDisplay />
                <div id="container-listings" className="grow-1 flex flex-col xl:flex-row gap-20 font-display text-3xl relative">
                    <section className="flex grow flex-col gap-5">
                        <h3 className="font-display text-3xl">Latest Opportunities</h3>
                        <ListingsLatest />
                        <ListingsForm />
                    </section>

                    <div className="">
                        <div className="xl:sticky xl:top-28 flex flex-col gap-5 mt-8">
                            {session && session.user.user_metadata.company ?
                                <CardGlass
                                    imageSrc={SniperGirl}
                                    imageAlt="Image of Video Game"
                                    title="Post a Job"
                                    text="Reach thousands of gaming industry professionals here."
                                    buttonText="Get Started"
                                    buttonLink="/post"
                                />
                                :
                                <CardGlass
                                    imageSrc={SniperGirl}
                                    imageAlt="Image of Video Game"
                                    title="Aim For Your Next Job"
                                    text="Search through our listings to find the job that suits you."
                                    buttonText="Get Started"
                                    buttonLink="/jobs"
                                />
                            }
                            <CardOverlay 
                                imageSrc="https://res.cloudinary.com/dlcz9y0nv/image/upload/v1684201052/gzo/gaming%20sponsors/Tears-of-the-Kingdom_cover_poe0gb.png"
                                imageAlt="Cover Art of The Legend of Zelda: Tears of the Kingdom"
                                text="Purchase from our sponsor"
                                title="The Legend of Zelda: Tears of the Kingdom"
                                buttonLink="https://amzn.to/3MogJLO"
                                buttonText="Purchase"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
