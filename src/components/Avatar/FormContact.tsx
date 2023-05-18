import { useForm, ValidationError } from '@formspree/react';

const FormContact: React.FC = (): JSX.Element => {
    const [state, handleSubmit] = useForm('mjvdzono');

    if (state.succeeded) {
        return <p className="font-mono italic">Thank you! We'll get back to you shortly.</p>;
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 font-mono">
            <label htmlFor="contact-email">Email Address:</label>
            <input id="contact-email" type="email" name="email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            <label htmlFor="contact-message">Message:</label>
            <textarea id="contact-message" name="message" rows={10} cols={30} required />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <button type="submit" disabled={state.submitting} className="btn">
                Submit
            </button>
        </form>
    );
};

export default FormContact;
