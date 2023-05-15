import { useState, useEffect, ReactNode } from "react";
import Error from "../pages/Error/Error";

interface ErrorBoundaryProps {
    children: ReactNode
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }): JSX.Element => {
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        const errorHandler = (event: Error | ErrorEvent ): void => {
            console.error('Error caught by ErrorBoundary:', event)
            setHasError(true)
        }

        window.addEventListener('error', errorHandler)
        return () => {
            window.removeEventListener('error', errorHandler)
        }
    })

    if (hasError) {
        return <Error />
    }

    return <>{children}</>
}

export default ErrorBoundary
