import React from "react";
import { Link, Outlet } from 'react-router-dom';
import CommonButton from "./MuiComponents/CommonButton";

export default function Navbar() {

    const buttonStyles = {
        fontSize: '0.875rem',
        fontWeight: 600,
        textTransform: 'capitalize',
        color: 'white',
        borderRadius: 2.5,
        padding: 2,
        '&.MuiButton-contained': {
            backgroundColor: '#006d77',
            '&:hover': {
                backgroundColor: '#006db3'
            },
        },
        '&.MuiButton-outlined': {
            color: "#fff",
            borderColor: '#fff',
            '&:hover': {
                backgroundColor: 'transparent'
            },
        },
    };

    return (
        <div>
            <nav className="navbar">
                <CommonButton
                    sx={buttonStyles}
                    variant="contained"
                >
                    <Link to="/" className="navlink homeLink">
                        <h3 className="blog-title">Kate's Blog</h3>
                    </Link>
                </CommonButton>
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