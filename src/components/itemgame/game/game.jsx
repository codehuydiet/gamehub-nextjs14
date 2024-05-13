import style from './slugGame.module.css'
import Image from "next/image";
import Link from "next/link";

const SlugGame = ({ game }) => {
    return (
        <div key={game.idGame} className={style.item}>
            <div className={style.warpLink}>
                <Link className={style.linkContainer} href={game.embed}>
                    <div className={style.gameName}>{game.tenGame}</div>
                    <Image className={style.img} src={game.image} fill alt="" />
                </Link>
            </div>
        </div>
    )
}

export default SlugGame