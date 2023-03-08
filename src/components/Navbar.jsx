import logoImage from './img/logo.jpg'

export const Navbar = () => {
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-section">
                    <div className="logo">
                        <img src={logoImage} alt="Logo" />
                    </div>
                    <div className="title">
                        <h3>Mountains Showcase</h3>
                    </div>
                </div>
            </div>
        </nav>
    )
}