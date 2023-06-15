import { useEffect, useState } from 'react';
import { questionsUnity } from '../../types/questions';
import Layout from '../../layouts/Layout';
import { handleSession } from '../../helpers/handleSession';
import { supabase } from '../../supabaseClient';

const TrainingsUnity: React.FC = (): JSX.Element => {

    const session = handleSession()
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [score, setScore] = useState<number>(0);
    const [showResult, setShowResult] = useState<boolean>(false);

    useEffect(() => {
        const updateBadges = async () => {
            // When the user gets a perfect score, query that user's badges cell from the profiles table.
            if (score >= questionsUnity.length - 1) {
                const { data, error } = await supabase
                    .from('profiles')
                    .select('badges')
                    .eq('id', session?.user.id)
                    .single()

                // Retrieve the User's Badges
                if (error) {
                    console.error('Error retrieving user badges:', error)
                    return;
                }

                const badges = data?.badges || []

                // Append Unity Badge if it isn't already in the user's badges array.
                if (!badges.includes('Unity Badge')) {
                    badges.push('Unity Badge')

                    const { error: updateError } = await supabase
                        .from('profiles')
                        .update({ badges })
                        .eq('id', session?.user.id)

                    if (!updateError) {
                        console.log('Badge updated!')
                    } else {
                        console.error('Error updating user badges:', updateError)
                    }
                }
            }
        }

        updateBadges()
    }, [showResult]);

    // check if option is correct, if so, add 1 to the score
    const handleUserAnswer = (selectedOption: string) => {
        if (selectedOption === questionsUnity[currentQuestion].answer) {
            setScore(score + 1);
        }

        // increment through the current Questions
        if (currentQuestion + 1 < questionsUnity.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            // no more questions
            setShowResult(true);
        }
    };

    return (
        <Layout>
            <div>
                <h2 className="text-center font-display text-7xl">Unity Training</h2>
                <div id="quiz" className="flex my-10 gap-5 w-full">
                    {/* If there are no more questions, show the results */}
                    {showResult ? (
                        <div className="flex flex-col gap-5">
                            <h2 className="text-3xl uppercase font-bold font-mono">Score: {score} / {questionsUnity.length}</h2>
                            <p className="text-2xl uppercase font-mono"> { score > questionsUnity.length - 1 ? "Congrats! You have earned the 'Unity' badge. Please check your profile!" : "Yikes... Try again."}</p>
                        </div>
                    ) : (
                        // If questions remain, show the next question
                        <div className="flex flex-col w-full gap-5">
                            <h2 className="font-mono uppercase text-accent">Question: {currentQuestion + 1}</h2>
                            <p className="font-mono text-2xl">{questionsUnity[currentQuestion].question}</p>
                            <div className="flex flex-col gap-5" id="unity-question-options">
                                {questionsUnity[currentQuestion].options.map((option) => (
                                    <div
                                        key={option}
                                        className="btn font-mono"
                                        onClick={() => handleUserAnswer(option)}>
                                        {option}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default TrainingsUnity;
