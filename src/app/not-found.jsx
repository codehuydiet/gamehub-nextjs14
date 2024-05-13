import Link from "next/link"
import style from './notfound.module.scss'
const NotFound = () => {
    return (
        <div className={style.container}>
            <h1 className={style.glitch} data-text="GAME">GAME</h1>
            <h1 className={style.glitch} data-text="OVER">OVER</h1>
            <div className={style.descContainer}>
                <span className={style.subTiltle}>You reach dead end!!!</span>
                <span className={style.text}>Quay lại đi bé ở đây không có gì để chơi đâu web có nhiều game mà</span>
                <Link href="/" className={style.button}>Về trang chủ nhé</Link>
            </div>
        </div>
    )
}
export default NotFound