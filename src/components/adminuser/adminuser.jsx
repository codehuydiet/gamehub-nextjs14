import { connectToDb } from '@/lib/utils'
import style from './adminuser.module.css'
import { createUser, deleteUser } from '@/lib/action';

const getData = async () => {
    const data = await fetch(`${process.env.DOMAIN}/api/users`, { cache: 'no-store' })
    if (!data.ok) {
        throw new Error("Somthing went wrong");
    }
    return data.json();
}

const AdminUser = async () => {
    const data = await getData();
    // console.log(data[0]._id);
    return (
        <div className={style.container}>
            <div className={style.data}>
                {data.map((data) => (
                    <div className={style.item} key={data._id}>
                        {data.userName}
                        <form action={deleteUser}>
                            <button className={style.delete} type="submit" name="action" value={data._id}>Delete</button>
                        </form>
                    </div>
                ))}
            </div>
            <div className={style.modify}>
                <form className={style.form} action={createUser}>
                    <input className={style.input} name='userName' type="text" placeholder='userName' />
                    <input className={style.input} name='email' type="text" placeholder='email' />
                    <input className={style.input} name='password' type="text" placeholder='password' />
                    <input className={style.input} name='isAdmin' type="text" placeholder='isAdmin' />
                    <input className={style.input} name='nation' type="text" placeholder='nation' />
                    <button className={style.button}>Create</button>
                </form>
                <div className={style.stats}>Tổng có {data.length} dữ liệu</div>
            </div>
        </div>
    )
}
export default AdminUser