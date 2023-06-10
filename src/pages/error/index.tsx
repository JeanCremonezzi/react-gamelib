import "./style.css"

export const ErrorPage = () => {
    return (
        <main className="error-main">

            <h1 className="error-code">- 404 -</h1>
            
            <h2 className="error-name">Page not found</h2>

            <span className="error-description">The page you are trying to access isn't available or doesn't exist!</span>
        </main>
    )
}
