import Layout from '../layouts/Layout';

const About: React.FC = (): JSX.Element => {
    return (
        <Layout>
            <div id="about-container" className="flex w-full justify-center">
                <div className="flex w-full xl:w-1/2 flex-col gap-5">
                    <section>
                        <h1 className="text-center font-display text-4xl">About Ground Zero</h1>
                        <p className="font-mono">
                            Ground Zero is an innovative web application designed to connect passionate individuals with
                            exciting job opportunities in the ever-expanding game industry. Whether you're an aspiring
                            game developer, a seasoned designer, or simply someone fascinated by the world of gaming,
                            Ground Zero is your ultimate destination to explore, discover, and connect with the right
                            job opportunities.
                        </p>
                    </section>
                    <section>
                        <h2 className="font-display text-2xl">Discover Opportunities</h2>
                        <p className="font-mono">
                            At Ground Zero, we understand the importance of finding the perfect job that aligns with
                            your skills, interests, and aspirations. Our platform boasts a comprehensive database of job
                            listings from leading companies across the game industry. From game studios and publishers
                            to technology providers and indie developers, we have an extensive network of companies
                            actively looking for talented professionals like you. Explore a wide range of job openings,
                            including programming, design, art, audio, production, quality assurance, and many more. Our
                            intuitive search features and advanced filters make it easy for you to narrow down your
                            options and find the opportunities that best match your expertise and career goals.{' '}
                        </p>
                    </section>
                    <section>
                        <h2 className="font-display text-2xl">Connect with Companies</h2>
                        <p className="font-mono">
                            Ground Zero serves as a bridge between job seekers and companies, offering a seamless and
                            efficient platform for companies to post their job listings. If you're a company looking to
                            attract top talent, our user-friendly interface allows you to create compelling job
                            postings, highlighting the unique aspects of your organization and the exciting projects
                            you're working on. Showcase your company culture, benefits, and growth opportunities to
                            entice the best candidates to join your team.{' '}
                        </p>
                    </section>
                    <section>
                        <h2 className="font-display text-2xl">Training Grounds and Badges</h2>
                        <p className="font-mono">
                            At Ground Zero, we believe in the power of continuous learning and skill development. That's
                            why we offer a dedicated Training Grounds Section where users can take skill quizzes and
                            assess their proficiency in various aspects of game development. Our quizzes cover a wide
                            range of topics, including programming languages, game design principles, art styles, audio
                            production, and more. Upon completion, users receive badges on their profiles, showcasing
                            their expertise and dedication to mastering their craft. Companies can also utilize this
                            feature to evaluate the skill sets of potential candidates, ensuring a better match for
                            their job requirements.
                        </p>
                    </section>
                    <section>
                        <h2 className="font-display text-2xl">Community and Resources</h2>
                        <p className="font-mono">
                            Ground Zero is not just a job search platform; it's a thriving community of like-minded
                            individuals passionate about the game industry. Engage with fellow professionals, share
                            insights, and stay up-to-date with the latest trends and news through our vibrant community
                            forums and resources. Our skills section includes forums where users can discuss specific
                            skills, seek advice, and collaborate on projects. Join relevant groups, participate in
                            discussions, and expand your professional network within the game industry.{' '}
                        </p>
                    </section>
                    <section>
                        <h2 className="font-display text-2xl">Privacy and Security</h2>
                        <p className="font-mono">
                            At Ground Zero, your privacy and security are of utmost importance to us. We employ robust
                            measures to ensure the confidentiality of your personal information and provide a secure
                            environment for your job search activities. Our platform adheres to industry-standard
                            security protocols, safeguarding your data and protecting it from unauthorized access.{' '}
                        </p>
                    </section>
                    <section>
                        <h2 className="font-display text-2xl">Join Ground Zero</h2>
                        <p className="font-mono">
                            Ready to take your game industry career to new heights? Join Ground Zero today and unlock a
                            world of opportunities. Whether you're looking for your dream job or seeking exceptional
                            talent for your company, our platform is here to empower you on your journey. Sign up now
                            and become part of our growing community of game industry enthusiasts.
                        </p>
                    </section>
                </div>
            </div>
        </Layout>
    );
};

export default About;
