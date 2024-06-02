import { createTag, createUser, deleteTag } from '@/lib/action';
import style from './admintag.module.css'

const getData = async () => {
    const data = await fetch(`${process.env.DOMAIN}/api/tag`, { cache: 'no-store' })
    if (!data.ok) {
        throw new Error("Somthing went wrong");
    }
    return data.json();
}

const AdminTag = async () => {
    const data = await getData();
    // console.log(data[0]._id);
    return (
        <div className={style.container}>
            <div className={style.data}>
                {data.map((data) => (
                    <div className={style.item} key={data._id}>
                        {data.tagName}
                        <form action={deleteTag}>
                            <button className={style.delete} type="submit" name="action" value={data._id}>Delete</button>
                        </form>
                    </div>
                ))}
            </div>
            <div className={style.modify}>
                <form className={style.form} action={createTag}>
                    <input className={style.input} name='tagName' type="text" placeholder='tagName' />
                    <input className={style.input} name='path' type="text" placeholder='path' />
                    <input className={style.input} name='image' type="text" placeholder='image' />
                    <button className={style.button}>Create</button>
                </form>
                <div className={style.stats}>Tổng có {data.length} dữ liệu</div>
            </div>
        </div>
    )
}
export default AdminTag