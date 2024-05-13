'use client'

import style from './navbar.module.css'
import React from "react";
import Footer from '../footer/footer';
import { useState } from "react";
import Links from './links/links';
import { Visible } from '@/lib/action';

const Navbar = ({ setOpenClose }) => {
    const [isHover, setIsHover] = useState(true);

    const MouseEnter = () => {
        setIsHover(true);
    }
    const MouseLeave = () => {
        setIsHover(false);
    }
    return (
        <div onMouseEnter={MouseEnter} onMouseLeave={MouseLeave} className={style.container}>
            <Links></Links>
            {isHover && (
                <div className="w-[100%] h-auto">
                    <Footer footerVis={setOpenClose}></Footer>
                </div>
            )}
        </div>
    )
}

export default Navbar;