'use client'

import React, { useState } from 'react';
import style from './form.module.css';
import Image from 'next/image';
import { createAvatar, createCover } from '@/lib/action';

const Form = ({ data }) => {
    const [imageSrc, setImageSrc] = useState('');
    const handleInputChange = (event) => {
        setImageSrc(event.target.value);
    };

    return (
        <div className={style.modify}>
            <form className={style.form} action={createCover}>
                <input
                    className={style.input}
                    name='img'
                    type="text"
                    placeholder='img'
                    onChange={handleInputChange}
                />
                <button className={style.button}>Create</button>
            </form>
            <Image className={style.img} src={imageSrc} width={400} height={200} alt="Preview Image" />
            <div className={style.stats}>Tổng có {data.length} dữ liệu</div>
        </div>
    );
}
export default Form