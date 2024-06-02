import style from './itemGame.module.css'
import Image from "next/image";
import Link from "next/link";

const getData = async (slug) => {
    // console.log(slug);
    const res = await fetch(`${process.env.DOMAIN}/api/gametag/${slug}`, { cache: 'no-store' });
    // console.log(res);
    if (!res.ok) {
        throw new Error("Somthing went wrong");
    }
    return res.json();
}

const ItemGame = async ({ slug }) => {
    // console.log(slug);
    const data = await getData(slug);
    // console.log(data);
    return (
        < ul className={style.container} >
            {data.slice(0, 50).map((data) => (
                <li key={data.idGame} className={style.item}>
                    <div className={style.warpLink}>
                        <Link className={style.linkContainer} href={data.path}>
                            <div className={style.gameName}>{data.name}</div>
                            <Image className={style.img} src={data.img} fill alt="" />
                        </Link>
                    </div>

                </li>
            ))}
        </ul >
    )
}

export default ItemGame