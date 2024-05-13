import style from './admin.module.css'
import AdminUser from '@/components/adminuser/adminuser'
import AdminTag from '@/components/admintag/admintag'
import AdminGame from '@/components/admingame/admingame'
import AdminCover from '@/components/admincover/admincover'
import AdminAvatar from '@/components/adminavatar/adminavatar'

const Admin = () => {
    return (
        <div className={style.container}>
            <div className={style.warper}>
                <div className={style.title}>List User</div>
                <AdminUser></AdminUser>
            </div>
            <div className={style.warper}>
                <div className={style.title}>List Game</div>
                <AdminGame></AdminGame>
            </div>
            <div className={style.warper}>
                <div className={style.title}>List Tag Game</div>
                <AdminTag></AdminTag>
            </div>
            <div className={style.warper}>
                <div className={style.title}>List Avatar Image</div>
                <AdminAvatar></AdminAvatar>
            </div>
            <div className={style.warper}>
                <div className={style.title}>List Cover Image</div>
                <AdminCover></AdminCover>
            </div>
        </div>
    )
}

export default Admin