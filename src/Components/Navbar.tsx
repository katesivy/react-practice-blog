import { ForkRight } from "@mui/icons-material";
import { findByLabelText } from "@testing-library/react";
import React from "react";
import { Link, Outlet } from 'react-router-dom';
import CommonButton from "./MuiComponents/CommonButton";

export default function Navbar() {

    const buttonStyles = {
        // fontSize: '0.875rem',
        fontWeight: 600,
        textTransform: 'capitalize',
        textDecoration: 'none',
        // color: 'white',
        borderRadius: 8,
        underline: 'none',
        // display: 'inline-flex',
        '&.MuiButton-contained': {
            backgroundColor: '#e5989b',
            size: 'medium',
            marginLeft: 4,
            '&:hover': {
                border: 'solid #6d6875',
            },
        },
        '&.MuiButton-outlined': {
            color: "#e5989b",
            borderColor: '#ffb4a2',
            float: 'right',
            marginRight: 5,
            size: 'small',
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
                    <Link to="/" className="navlink homeLink" > 
                        <h3 className="blog-title">Kate's Blog</h3>
                    </Link>
                </CommonButton>
                <CommonButton
                    sx={buttonStyles}
                    variant="outlined"
                >
                    <Link to="/about" className="navlink aboutLink">
                        About
                    </Link>
                </CommonButton>
                <CommonButton
                    sx={buttonStyles}
                    variant="outlined"
                >
                    <Link to="/create" className="navlink createLink">
                        Create Post
                    </Link>
                </CommonButton>
            </nav>
            <Outlet />
        </div>
    )
}