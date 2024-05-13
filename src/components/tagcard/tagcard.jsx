import style from './tagcard.module.css'
import Image from "next/image";
import Link from 'next/link';

const TagCard = ({ tag }) => {
    return (
        <div className={style.container}>
            <Link className={style.link} href={tag.path}>
                <div className={style.wrapContent}>
                    <div className={style.imgContainer}>
                        <Image className={style.img} src={tag.img} alt="" fill />
                    </div>
                    <div className={style.textContainer}>
                        <p className={style.text}>{tag.tagName}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default TagCard