import Link from 'next/link'
import style from './navLink.module.css'
import { usePathname } from 'next/navigation'

const NavLink = ({ item }) => {
    const pathName = usePathname();
    return (
        <Link
            href={item.slug}
            className={style.container}
        >
            <div className={`${style.item} ${pathName === item.slug && style.active}`}>
                {item.svg}
                <div className={style.name} aria-label={item.nameTag}>{item.nameTag}</div>
            </div>
        </Link>
    )
}

export default NavLink