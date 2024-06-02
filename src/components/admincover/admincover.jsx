import style from './admincover.module.css'
import Image from 'next/image';
import { deleteAvatar, deleteCover } from '@/lib/action';
import Form from './form/form';

const getData = async () => {
    const data = await fetch(`${process.env.DOMAIN}/api/covers`, { cache: 'no-store' })
    if (!data.ok) {
        throw new Error("Somthing went wrong");
    }
    return data.json();
}

const AdminCover = async () => {
    const data = await getData();
    // console.log(data[0]._id);
    return (
        <div className={style.container}>
            <div className={style.data}>
                {data.map((data) => (
                    <div className={style.item} key={data._id}>
                        <Image src={data.img} width={50} height={50} alt=''></Image>
                        <form action={deleteCover}>
                            <button className={style.delete} type="submit" name="action" value={data._id}>Delete</button>
                        </form>
                    </div>
                ))}
            </div>
            <Form data={data}></Form>
        </div>
    )
}
export default AdminCover