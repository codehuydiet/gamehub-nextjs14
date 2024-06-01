'use client'

import Link from 'next/link';
import style from './staticdata.module.css'
import React, { useRef, useState, useEffect } from "react";
import Image from 'next/image';

const StaticData = ({ staticData }) => {
    // console.log(staticData);
    const [scrollPosition, setScrollPosition] = useState(0);
    const slideRef = useRef(null);
    const [isAtEnd, setIsAtEnd] = useState(false);
    const checkIfScrolledToEnd = () => {
        if (slideRef.current) {
            const { scrollLeft, scrollWidth, offsetWidth } = slideRef.current;
            //console.log("scrool left: ", scrollLeft, " scroll width: ", scrollWidth, " offset width: ", offsetWidth);
            const atEnd = scrollLeft + offsetWidth >= scrollWidth - 1;
            //const check = atEnd ? console.log("tiếp đi bé") : console.log("hết rồi bé")
            setIsAtEnd(atEnd);
        }
    };

    const scrollLeft = () => {
        if (slideRef.current) {
            slideRef.current.scrollBy({ left: -200, behavior: 'smooth' });
            setTimeout(() => {
                setScrollPosition(slideRef.current.scrollLeft);
                console.log(slideRef);
                checkIfScrolledToEnd();
            }, 0);
        }
    };

    const scrollRight = () => {
        if (slideRef.current) {
            slideRef.current.scrollBy({ left: 200, behavior: 'smooth' });
            setTimeout(() => {
                setScrollPosition(slideRef.current.scrollLeft);
                console.log(slideRef);
                checkIfScrolledToEnd();
            }, 0);
        }
    };

    const leftButtonClass = scrollPosition === 0 ? 'hidden' : '';
    const rightButtonClass = isAtEnd ? 'hidden' : '';
    return (
        <div className={style.container}>
            <button className={`${style.buttonLeft} ${leftButtonClass}`} aria-label="Left arrow" onClick={scrollLeft}>{"<"}</button>
            <div ref={slideRef} className={style.wrapData}>
                {staticData.map((data) => (
                    <ul key={data.name} className={style.list}>
                        <li className={style.itemMain}>
                            <div className={style.linkMainContainer}>
                                <Link className={style.linkMain} href={data.slug}>
                                    <div className={style.gameName}>{data.name}</div>
                                    <Image className={style.imgMain} src={data.image} alt="Thumbnail" fill />
                                </Link>
                            </div>
                        </li>
                        <li className={style.itemChild}>
                            <div className={style.childContainer}>
                                {data.child.map((childata) => (
                                    <Link key={childata.name} className={style.linkChild} href={childata.slug}>
                                        <div className={style.gameName}>{childata.name}</div>
                                        <Image className={style.imgChild} src={childata.image} alt="Thumbnail" fill />
                                    </Link>
                                ))}
                            </div>
                        </li>
                    </ul>
                ))}
            </div>
            <button className={`${style.buttonRight} ${rightButtonClass}`} aria-label="Right arrow" onClick={scrollRight}>{">"}</button>
        </div>
    )
}

export default StaticData