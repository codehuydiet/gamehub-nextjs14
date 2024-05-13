'use client'
import style from './loginform.module.css'
import { useState } from 'react';
import Link from 'next/link';
import { useFormState } from "react-dom";
import { login } from '@/lib/action';


const LoginForm = () => {
    const [focus, setFocus] = useState(null);
    const [state, formAction] = useFormState(login, undefined);
    const handleFocus = (field) => {
        setFocus(field);
    }
    const handleBlur = () => {
        setFocus(null);
    }
    return (
        <div>
            <form className='w-[100%]' action={formAction}>
                <div className={'flex justify-center items-start flex-col w-[100%] mt-[0.5rem]'}>
                    <div className={`${style.inputWrap} ${focus === 'email' ? style.border : ''}`}>
                        <input className="outline-none text-[1rem] w-[100%] font-[700] text-[#f9faff] bg-transparent p-0" type="text"
                            placeholder="Email or UserName"
                            onFocus={() => handleFocus('email')}
                            onBlur={handleBlur}
                            name='EmailOrUserName'
                        />
                    </div>
                </div>
                <div className={'flex justify-center items-start flex-col w-[100%] mt-[0.5rem]'}>
                    <div className={`${style.inputWrap} ${focus === 'password' ? style.border : ''}`}>
                        <input className="outline-none text-[1rem] w-[350px] font-[700] text-[#f9faff] bg-transparent p-0" type="password"
                            placeholder="Password"
                            onFocus={() => handleFocus('password')}
                            onBlur={handleBlur}
                            name='password'
                        />
                    </div>
                </div>
                <div className="relative w-[100%]">
                    <Link href='/fogot-password' className="h-[2.5rem] text-[#a48eff] text-[0.875rem] flex justify-center items-center mt-[0.25rem] mb-[0.5rem] float-right justify-end">Forgot Password?</Link>
                </div>
                <div className="w-[100%]">
                    <button className="bg-[#6842ff] text-[#f9faff] hover:bg-[#8668ff] rounded-[30px] flex justify-center items-center font-[700] text-[1rem] px-[0.5rem] py-[1rem] w-[100%] ">Log in</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm