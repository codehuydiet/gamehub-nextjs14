import { createGame, deleteGame } from '@/lib/action';
import style from './admingame.module.css'

const getData = async () => {
    const data = await fetch(`${process.env.DOMAIN}/api/allgame`, { cache: 'no-store' })
    if (!data.ok) {
        throw new Error("Somthing went wrong");
    }
    return data.json();
}

const AdminGame = async () => {
    const data = await getData();
    // console.log(data[0]._id);
    return (
        <div className={style.container}>
            <div className={style.data}>
                {data.map((data) => (
                    <div className={style.item} key={data._id}>
                        {data.name}
                        <form action={deleteGame}>
                            <button className={style.delete} type="submit" name="action" value={data._id}>Delete</button>
                        </form>
                    </div>
                ))}
            </div>
            <div className={style.modify}>
                <form className={style.form} action={createGame}>
                    <input className={style.input} name='name' type="text" placeholder='name' />
                    <input className={style.input} name='embed' type="text" placeholder='embed' />
                    <input className={style.input} name='technology' type="text" placeholder='technology' />
                    <input className={style.input} name='platforms' type="text" placeholder='platforms' />
                    <input className={style.input} name='img' type="text" placeholder='img' />
                    <input className={style.input} name='path' type="text" placeholder='path' />
                    <button className={style.button}>Create</button>
                </form>
                <div className={style.stats}>Tổng có {data.length} dữ liệu</div>
            </div>
        </div>
    )
}
export default AdminGame