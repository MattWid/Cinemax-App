import { Link  } from "react-router-dom";
import icon from "../assets/cinemax-icon.png"


import "../css/NavBar.css"

function NavBar() {
    

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/" className="brand-link">
                    <img src={icon} alt="Cinemax Logo" className="brand-logo" />
                    Cinemax App
                    </Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>  
                <Link to="/favorites" className="nav-link">Favorites</Link>  
            </div>
        </nav>
    )
}
export default NavBar;