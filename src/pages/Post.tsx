import HeroOverlay from "../components/HeroOverlay";

import Card from "../components/Card";
import CardSlim from "../components/Cards/CardSlim";
// import Stats from "../components/Stats";

import Layout from "../layouts/Layout";

const Post: React.FC = () => {
    return (
        <Layout>
            <div id="container-post" className="flex flex-col gap-10">
                <HeroOverlay
                    image="https://res.cloudinary.com/dlcz9y0nv/image/upload/v1683850603/gzo/aesthetic-sniper-girl_g5ejhq.png"
                    title="Find Your New Recruit"
                    text="Get your job noticed by talented professionals in the gaming industry"
                    // primaryButtonText="Get a job"
                    // secondaryButtonText="Stop being lazy"
                />
                <div id="cards-container" className="flex justify-center gap-20">
                    <Card
                        title="Single Job"
                        text="Fill in a short form and see your job go live in minutes."
                        buttonText="Get Started"
                        features={["Get a full month on our busy jobs feed", "Receive applications wherever you like to keep your hiring activity streamlined", "Manage your job through our secure hiring dashboard and close it when you fill it"]}
                    />
                    <Card
                        title="Multiple Jobs"
                        text="Save time and money with our brand new solution."
                        buttonText="Subscribe"
                        features={["Get all the benefits of posting single jobs without needing to copy/paste descriptions.", "Share the links to your job descriptions and we’ll post them all on your behalf.", "Earn a stacking 2.5% discount on each job you post and on any boosts you add.", "Pre-pay for future job posts to take advantage of bigger savings and reduce admin."]}
                    />
                    <Card
                        title="Full Service"
                        text="Let us take care of finding the people you want."
                        buttonText="Full Service"
                        features={["Share the link to your careers page and our team will add all of your jobs to GroundZero.", "Anything you update on your careers page will be reflected on our platform within a day.", "We’ll add new jobs, close expired ones, and update descriptions/locations/closing dates.", "Earn a 50% discount on every new job we add for you and any boosts you select.", "Also get a 50% discount on all eight of our impactful employer branding options."]}
                    />
                </div>

                <section className="flex flex-col gap-5">
                    <h2 className="font-display text-4xl">Job Boosts</h2>
                    <p className="font-mono">Boost your jobs from as little as $25. Fully boosted listings achieve up to 6x the reach of basic listings.</p>
                    <div className="companies-grid grid grid-cols-3 grid-rows-2 gap-10">
                        <CardSlim title="Sticky" text="We'll pin your job to the topp of our main page and every releveant search page" iconName="jam:pin-f"/>
                        <CardSlim title="Email" text="We'll send your job to the inboxes of games industry job hunters" iconName="jam:envelope-f"/>
                        <CardSlim title="Highlight" text="We'll make your job stand out on the main page and every relevant search page" iconName="jam:highlighter-f"/>
                        <CardSlim title="Twitter" text="We'll share your job with our engaged followers and the rest of Twitter" iconName="jam:twitter"/>
                        <CardSlim title="LinkedIn" text="We'll promote your job to our professional followers and the rest of LinkedIn" iconName="jam:linkedin"/>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Post;
