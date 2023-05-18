import Layout from '../../layouts/Layout';

const Privacy: React.FC = (): JSX.Element => {
    return (
        <Layout>
            <div id="privacy-policy-container" className="flex w-full justify-center">
                <div className="flex w-full xl:w-1/2 flex-col gap-5">
                    <section>
                        <h1 className="text-center font-display text-4xl">Privacy Policy</h1>
                        <p className="font-mono">
                            We take the privacy of our users very seriously. This privacy policy explains how we collect,
                            use, and protect the personal information that you provide when using our application. By using
                            our application, you agree to the terms of this privacy policy.
                        </p>
                    </section>
                    <section>
                        <h2 className="font-display text-2xl">Collection of Information</h2>
                        <p className="font-mono">
                            We collect personal information that you provide to us when using our application, such as your
                            name, email address, and other contact information. We also collect information about your use
                            of our application, such as your IP address, browser type, and other usage data.
                        </p>
                    </section>
                    <section>
                        <h2 className="font-display text-2xl">Use of Information</h2>
                        <p className="font-mono">
                            We use the personal information that you provide to us to provide you with the services and
                            features of our application. We may also use your personal information to communicate with you
                            about our application, to respond to your inquiries, and to send you promotional messages. We do
                            not share your personal information with any third parties, except as required by law or as
                            necessary to provide you with the services of our application. We may share anonymous usage data
                            with third parties for research or analysis purposes.
                        </p>
                    </section>
                    <section>
                        <h2 className="font-display text-2xl">Security</h2>
                        <p className="font-mono">
                            unauthorized access, disclosure, alteration, and destruction. We use industry-standard security
                            technologies and procedures to protect your personal information.
                        </p>
                    </section>
                    <section>
                        <h2 className="font-display text-2xl">Data Retention</h2>
                        <p className="font-mono">
                            We retain your personal information for as long as necessary to provide you with the services of
                            our application and to comply with legal obligations.
                        </p>
                    </section>
                    <section>
                        <h2 className="font-display text-2xl">Changes to this policy</h2>
                        <p className="font-mono">
                            We may update this privacy policy from time to time by posting a new version on our website.
                            Your continued use of our application after any changes to this privacy policy indicates your
                            agreement to the updated terms.
                        </p>
                    </section>
                    <section>
                        <h2 className="font-display text-2xl">Contact Us</h2>
                        <p className="font-mono">
                            If you have any questions or concerns about our privacy policy, please contact us at{' '}
                            <a href="mailto:help@groundzero.gg" className='text-accent hover:text-primary'>help@groundzero.gg</a>.
                        </p>
                    </section>
                </div>
            </div>
        </Layout>
    );
};

export default Privacy;
