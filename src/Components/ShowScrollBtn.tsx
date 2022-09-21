import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

interface TopBtn {
    showTopBtn: boolean;
}


export default function ShowScrollBtn() {
    const [showTopBtn, setShowTopBtn] = useState<TopBtn>({showTopBtn:false});


    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn({showTopBtn:true});
            } else {
                setShowTopBtn({showTopBtn:false});
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="top-to-btm">
            {" "}
            {showTopBtn && (
                <FaAngleUp
                    className="icon-position icon-style"
                    onClick={goToTop}
                />
            )}{" "}
        </div>
    )
}