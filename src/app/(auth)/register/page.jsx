import RegisterForm from '@/components/registerform/registerform'
import style from './register.module.css'

const Register = () => {
    return (
        <div className={style.container}>
            <div className={style.contentContainer}>
                <div>
                    <h1 className="text-[1.75rem] font-[700] mt-[1.5rem] mb-[1rem]">Register</h1>
                </div>
                <RegisterForm></RegisterForm>
                <div className="flex text-[1rem] mt-[1.75rem] font-[700] text-[#ffffff]">
                    <span>Bạn có tài khoản rồi?</span>
                    <a className="text-[#8668ff] ml-[1rem] font-[700]" href="/login"> Đăng nhập ngay</a>
                </div>
            </div>
        </div>
    )
}

export default Register