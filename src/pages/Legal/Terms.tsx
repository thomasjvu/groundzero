import Layout from "../../layouts/Layout"

const Terms: React.FC = (): JSX.Element => {
    return (
        <Layout>
            <div id="terms-of-use-container" className="flex w-full justify-center">
                <div className="flex w-full xl:w-1/2 flex-col gap-5 text-justify">
                    <section className="flex flex-col gap-2 font-mono">
                        <h1 className="text-center font-display text-4xl">Terms of Use</h1>
                        <p>
                            Please read these Terms of Service ("Terms") carefully before using our job board application (the "App") operated by [Your Company Name] ("we," "us," or "our"). By accessing or using the App, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not use the App.
                        </p>
                    </section>
                    <section className="font-mono flex flex-col gap-2">
                        <h2 className="font-display text-2xl">1. User Responsibilities</h2>
                        <p>1.1 Eligibility: By using the App, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into these Terms.</p>
                        <p>1.2 Accurate Information: You agree to provide accurate and truthful information when using the App, including when creating an account, submitting job listings, or applying for jobs.</p>
                        <p>1.3 Account Security: You are responsible for maintaining the confidentiality of your account credentials and agree not to share your account information with third parties. You are solely responsible for any activity that occurs under your account.</p>
                    </section>
                    <section className="font-mono flex flex-col gap-2">
                        <h2 className="font-display text-2xl">2. Job Listings and Applications</h2>
                        <p>2.1 Job Listings: Our App allows employers to post job listings, and we do not endorse or guarantee the accuracy, quality, or legality of the job listings. We are not responsible for any job listings posted on the App.</p>
                        <p>2.2 Application Process: The App enables users to apply for jobs directly through the platform. You acknowledge that we are not involved in the application process and are not responsible for the hiring decisions made by employers.</p>
                    </section>
                    <section className="font-mono flex flex-col gap-2">
                        <h2 className="font-display text-2xl">
                            3. Intellectual Property
                        </h2>
                        <p>3.1 Ownership: The App and its content, including but not limited to text, graphics, logos, trademarks, and software, are the property of Ground Zero and are protected by intellectual property laws. You may not use, reproduce, distribute, or modify any part of the App without our prior written consent.</p>
                    </section>
                    <section className="font-mono flex flex-col gap-2">
                        <h2 className="font-display text-2xl">
                            4. Limitation of Liability
                        </h2>
                        <p>4.1 Disclaimer: The App is provided on an "as-is" basis without any warranties, express or implied. We do not guarantee the accuracy, completeness, or reliability of the information provided on the App. Your use of the App is at your own risk.</p>
                        <p>4.2 Limitation of Liability: To the extent permitted by law, we shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with the use or inability to use the App, including but not limited to loss of profits, data, or business opportunities.</p>
                    </section>
                    <section className="font-mono flex flex-col gap-2">
                        <h2 className="font-display text-2xl">
                            5. Privacy
                        </h2>
                        <p>5.1 Privacy Policy: Your use of the App is subject to our Privacy Policy, which describes how we collect, use, and protect your personal information. By using the App, you consent to our collection and use of your information as described in the Privacy Policy.</p>
                    </section>
                    <section className="font-mono flex flex-col gap-2">
                        <h2 className="font-display text-2xl">
                            6. Termination
                        </h2>
                        <p>6.1 Termination: We reserve the right to suspend or terminate your access to the App at any time, without prior notice or liability, for any reason whatsoever, including if you violate these Terms.</p>
                    </section>
                    <section className="font-mono flex flex-col gap-2">
                        <h2 className="font-display text-2xl">
                            7. Governing Law
                        </h2>
                        <p>7.1 Governing Law: These Terms shall be governed by and construed in accordance with the laws of the United States Of America. Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in the United States of America.</p>
                    </section>
                    <section className="font-mono flex flex-col gap-2">
                        <h2 className="font-display text-2xl">
                            8. Modifications
                        </h2>
                        <p>8.1 Amendments: We reserve the right to modify or replace these Terms at any time, in our sole discretion. Your continued use of the App after any such changes constitutes your acceptance of the new Terms.
                        </p>
                    </section>
                    <section className="font-mono flex flex-col gap-2">
                        <p>If you have any questions or concerns about these Terms, please contact us at <a className="hover:text-primary text-accent" href="mailto:help@groundzero.gg">help@groundzero.gg</a></p>
                        <p>By using the App, you acknowledge that you have read, understood, and agree to be bound by these Terms.</p>
                    </section>
                </div>
            </div>
        </Layout>
    )
}
export default Terms
