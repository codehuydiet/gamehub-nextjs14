import Image from "next/image";
import style from './listGame.module.css';
import TagGame from "./tagGame/tagGame";

const ListGame = () => {

    return (
        <div className={style.container}>
            {gameTag.slice(0, 40).map((type) => (
                <div className={style.wrapContainer} key={type.idType}>
                    <div className={style.labelContainer}>
                        <h2 className={style.nameTag}>{type.nameType}</h2>
                        <Link className={style.viewMore} href={type.path}>View more</Link>
                    </div>
                    <List></List>
                </div>
            ))}
        </div>
    )
}

export default ListGame