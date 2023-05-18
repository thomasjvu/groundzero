import Layout from '../../layouts/Layout';

const Disclaimers: React.FC = (): JSX.Element => {
    return (
        <Layout>
            <div className="flex w-full justify-center">
                <div className="flex w-full xl:w-1/2 flex-col gap-5">
                    <h1 className="text-center font-display text-4xl">Disclaimers</h1>
                    <section>
                        <h2 className="font-display text-2xl">Affiliate Disclaimer</h2>
                        <p className="text-justify font-mono">
                            Please note that some of the links on our website may be affiliate links, which means that
                            we may earn a commission if you click on the link or make a purchase using the link.
                            However, this does not affect our editorial independence or our commitment to providing
                            honest and unbiased information. We only recommend products or services that we believe will
                            add value to our readers.
                        </p>
                    </section>
                </div>
            </div>
        </Layout>
    );
};

export default Disclaimers;
