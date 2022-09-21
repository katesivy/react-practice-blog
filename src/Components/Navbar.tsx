import React from "react";
import { Link, Outlet } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <Link to="/" className="navlink homeLink">
                    <h3 className="blog-title">Kate's Blog</h3>
                </Link>
                <Link to="/about" className="navlink aboutLink">
                    About
                </Link>
                <Link to="/create" className="navlink createLink">
                    Create Post
                </Link>
            </nav>
            <Outlet />
        </div>
    )
}