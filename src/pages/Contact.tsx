import Layout from '../layouts/Layout';
import FormContact from '../components/Forms/FormContact';
import SocialIcons from '../components/SocialIcons';

const Contact: React.FC = (): JSX.Element => {
    return (
        <Layout>
            <div className="flex gap-20">
                <div className="flex flex-col min-h-full">
                    <section className="border-b-2 pb-5 mb-5 border-white">
                        <h2 className="font-display text-4xl my-2">Contact Us</h2>
                        <p className="font-mono">
                            Want to get in touch? You can reach us in a number of ways.
                        </p>
                    </section>
                    <FormContact />
                </div>
                <div className="flex flex-col mt-10 gap-5">
                    <section id="contact-email-group" className="flex flex-col gap-2">
                        <h3 className="font-display text-2xl">Email</h3>
                        <a href='mailto:help@groundzero.gg' className='italic font-mono hover:text-accent'>help@groundzero.gg</a>
                    </section>
                    <section id="contact-social-group" className="flex flex-col gap-2">
                        <h3 className="font-display text-2xl">Social Media</h3>
                        <SocialIcons />
                    </section>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
