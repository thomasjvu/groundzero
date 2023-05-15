const ButtonErrorBoundaryTest: React.FC = (): JSX.Element =>  {

    const handleButtonClick = () => {
        throw new Error('Testing error boundary')
    }

    return (
        <button className="btn btn-primary font-mono" onClick={handleButtonClick}>Throw Error</button>
    )
}

export default ButtonErrorBoundaryTest
