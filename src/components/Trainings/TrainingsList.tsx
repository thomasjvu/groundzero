import Card from "../Cards/Card"

const TrainingsList: React.FC = (): JSX.Element => {

    return (
        <div className="flex flex-col justify-center gap-5">
            <section>
                <h2 className="font-display text-4xl border-b-2 my-5">Applicant Training</h2>
                <div id="user-training-cards" className="flex justify-between gap-5">
                    <Card
                        title="Unity Training"
                        text="Take a Unity test, get a skills badge"
                        buttonText="Coming Soon"
                        buttonLink="/"
                        features={["Get a skills badge", "Impress Employers", "Profit"]}
                    />
                    <Card
                        title="Phaser Training"
                        text="Take a Phaser test, get a skills badge"
                        buttonText="Coming Soon"
                        buttonLink="/"
                        features={["Get a skills badge", "Impress Employers", "Profit"]}
                    />
                    <Card
                        title="Unreal Training"
                        text="Take an Unreal test, get a skills badge"
                        buttonText="Coming Soon"
                        buttonLink="/"
                        features={["Get a skills badge", "Impress Employers", "Profit"]}
                    />
                </div>
            </section>
            <section>
                <h2 className="font-display text-4xl border-b-2 my-5">Company Training</h2>
                <div id="company-training-cards" className="flex justify-between gap-5">
                    <Card
                        title="Diversity Training"
                        text="Take an Diversity & Inclusion test, get a skills badge"
                        buttonText="Coming Soon"
                        buttonLink="/"
                        features={["Get a skills badge", "Impress Applicants", "Profit"]}
                    />
                    <Card
                        title="Sustainability Training"
                        text="Take a Sustainability test, get a skills badge"
                        buttonText="Coming Soon"
                        buttonLink="/"
                        features={["Get a skills badge", "Impress Applicants", "Profit"]}
                    />
                    <Card
                        title="Mentorship Training"
                        text="Take a Mentorship test, get a skills badge"
                        buttonText="Coming Soon"
                        buttonLink="/"
                        features={["Get a skills badge", "Impress Applicants", "Profit"]}
                    />
                </div>
            </section>
        </div>
    )
}

export default TrainingsList
