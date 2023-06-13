import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./page-header.css"

export const PageHeader = () => {
    return(
        <div className="page-header-container">
            <div className="page-header">
                <h1>Tomi Färm</h1>
            </div>
            <div className="page-navigation">
                <Link to="/" className="navigation-link">Home</Link>
                <Link to="/about" className="navigation-link">About me</Link>
                <Link to="/projects" className="navigation-link">Projects</Link>
                <Link to="/contact" className="navigation-link">Contact me</Link>
            </div>
        </div>
    );
};