import Image from 'next/image';
import style from './usernav.module.css'
import Link from 'next/link';
import { auth } from '@/lib/auth';
import { getAvatar, getUser, handleLogout } from '@/lib/action';

const lang = [
    {
        id: 1,
        name: "čeština"
    },
    {
        id: 2,
        name: "Dansk"
    },
    {
        id: 3,
        name: "Deutsch"
    },
    {
        id: 4,
        name: "English"
    },
    {
        id: 5,
        name: "Español"
    },
    {
        id: 6,
        name: "Français"
    },
    {
        id: 7,
        name: "Indonesia"
    },
    {
        id: 8,
        name: "Italiano"
    },
    {
        id: 9,
        name: "Magyar"
    },
    {
        id: 10,
        name: "Nederlands"
    },
    {
        id: 11,
        name: "Norsk"
    },
    {
        id: 12,
        name: "Polski"
    },
    {
        id: 13,
        name: "Português"
    },
    {
        id: 14,
        name: "Română"
    },
    {
        id: 15,
        name: "Suomi"
    },
    {
        id: 16,
        name: "Svenska"
    },
    {
        id: 17,
        name: "Tiếng Việt"
    },
    {
        id: 18,
        name: "Türkçe"
    },
    {
        id: 19,
        name: "Ελληνικά"
    },
    {
        id: 20,
        name: "Русский"
    },
    {
        id: 21,
        name: "Українська"
    },
    {
        id: 22,
        name: "عربي"
    },
    {
        id: 23,
        name: "ไทย"
    },
]

const UserNav = async () => {
    const session = await auth();
    // console.log(session?.user.email);
    const data = await getUser(session?.user.email);
    // console.log(data?.isAdmin);
    return (
        <div className="custom-scrollbar right-[0] h-[calc(100vh-3.75rem)] flex-1 bg-[#1a1b28] overflow-auto">
            <div className="flex flex-col pl-[1.75rem] mt-[1rem] items-start items-center">
                <div className="relative flex items-center justify-center text-[1.25rem] rounded-[50%] w-[3.75rem] h-[3.75rem] mb-[0.75rem]">
                    <Image src={data?.idAvatar ? await getAvatar(data?.idAvatar) : "/noavatar.png"} alt='' fill className="rounded-[50%]"></Image>
                </div>
                <div className="font-[800] text-[1.25rem] leading-[1.6875rem]">
                    {data?.userName}
                </div>
                <div className="text-[#f9faff] leading-[1rem]">
                    {data?.email}
                </div>
                <div className="flex items-start gap-[0.625rem] mt-[1.5rem] mb-[1.25]">
                    <Link href='/user-info' className="text-[1rem] text-[#eff0f7] font-[400] h-[1.375rem] flex justify-center items-center bg-[transparent]" >
                        <svg className="h-[1.25rem] w-[1.25rem] mr-[0.5rem] fill-[#666a7f]" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" d="M6.08194 19.9771H17.9181C17.4451 17.1282 14.981 15 12 15C9.01897 15 6.55491 17.1282 6.08194 19.9771ZM4 20.9771C4 16.5223 7.58876 13 12 13C16.4112 13 20 16.5223 20 20.9771C20 21.5294 19.5523 21.9771 19 21.9771H5C4.44772 21.9771 4 21.5294 4 20.9771Z"></path><path xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" d="M12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4ZM7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7Z"></path></svg>
                        My Profile
                    </Link>
                    <button className="text-[1rem] text-[#eff0f7] font-[400] h-[1.375rem] flex justify-center items-center bg-[transparent]">
                        <svg className="h-[1.25rem] w-[1.25rem] mr-[0.5rem] fill-[#666a7f]" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M19.6856 4.31439C19.2503 3.87913 18.5446 3.87913 18.1094 4.31439L8.9578 13.466V15.0422H10.534L19.6856 5.89061C20.1209 5.45535 20.1209 4.74965 19.6856 4.31439ZM16.7037 2.9087C17.9153 1.6971 19.8797 1.6971 21.0913 2.9087C22.3029 4.1203 22.3029 6.0847 21.0913 7.2963L11.6486 16.739C11.4622 16.9254 11.2094 17.0301 10.9457 17.0301H7.96382C7.41487 17.0301 6.96985 16.5851 6.96985 16.0362V13.0543C6.96985 12.7906 7.07458 12.5378 7.26098 12.3514L16.7037 2.9087ZM5.97588 6.09647C4.87797 6.09647 3.98794 6.9865 3.98794 8.08441V18.0241C3.98794 19.122 4.87797 20.0121 5.97588 20.0121H15.9156C17.0135 20.0121 17.9035 19.122 17.9035 18.0241V15.0422C17.9035 14.4932 18.3485 14.0482 18.8975 14.0482C19.4465 14.0482 19.8915 14.4932 19.8915 15.0422V18.0241C19.8915 20.2199 18.1114 22 15.9156 22H5.97588C3.78006 22 2 20.2199 2 18.0241V8.08441C2 5.88859 3.78006 4.10853 5.97588 4.10853H9.95177C10.5007 4.10853 10.9457 4.55354 10.9457 5.1025C10.9457 5.65145 10.5007 6.09647 9.95177 6.09647H5.97588Z"></path></svg>
                        Edit Profile
                    </button>
                    <Link href='/' className="text-[1rem] text-[#eff0f7] font-[400] h-[1.375rem] flex justify-center items-center bg-[transparent]">
                        <svg className="h-[1.25rem] w-[1.25rem] mr-[0.5rem] fill-[#666a7f]" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M9.35285 4.08139C10.0266 1.3062 13.9734 1.3062 14.6471 4.08139C14.7628 4.5579 15.3088 4.78402 15.7275 4.52888C18.1662 3.04293 20.9571 5.83376 19.4711 8.27251C19.216 8.69125 19.4421 9.23717 19.9186 9.35285C22.6938 10.0266 22.6938 13.9734 19.9186 14.6471C19.4421 14.7628 19.216 15.3088 19.4711 15.7275C20.9571 18.1662 18.1662 20.9571 15.7275 19.4711C15.3088 19.216 14.7628 19.4421 14.6471 19.9186C13.9734 22.6938 10.0266 22.6938 9.35285 19.9186C9.23717 19.4421 8.69125 19.216 8.27252 19.4711C5.83376 20.9571 3.04293 18.1662 4.52889 15.7275C4.78402 15.3088 4.5579 14.7628 4.08139 14.6471C1.3062 13.9734 1.3062 10.0266 4.08139 9.35285C4.5579 9.23717 4.78402 8.69125 4.52888 8.27251C3.04293 5.83376 5.83376 3.04293 8.27252 4.52888C8.69125 4.78402 9.23717 4.55789 9.35285 4.08139ZM12.7036 4.55323C12.5245 3.81559 11.4755 3.81559 11.2964 4.55322C10.8612 6.34596 8.80726 7.19673 7.23186 6.23681C6.58365 5.84185 5.84185 6.58364 6.23681 7.23185C7.19673 8.80726 6.34596 10.8612 4.55322 11.2964C3.81559 11.4755 3.81559 12.5245 4.55323 12.7036C6.34596 13.1388 7.19673 15.1927 6.23682 16.7681C5.84186 17.4164 6.58365 18.1581 7.23186 17.7632C8.80726 16.8033 10.8612 17.654 11.2964 19.4468C11.4755 20.1844 12.5245 20.1844 12.7036 19.4468C13.1388 17.654 15.1927 16.8033 16.7681 17.7632C17.4164 18.1581 18.1581 17.4164 17.7632 16.7681C16.8033 15.1927 17.654 13.1388 19.4468 12.7036C20.1844 12.5245 20.1844 11.4755 19.4468 11.2964C17.654 10.8612 16.8033 8.80726 17.7632 7.23185C18.1581 6.58364 17.4164 5.84185 16.7681 6.23682C15.1927 7.19673 13.1388 6.34596 12.7036 4.55323ZM12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10ZM8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z"></path></svg>
                        Account settings
                    </Link>
                    <form action={handleLogout}>
                        <button className="text-[1rem] text-[#eff0f7] font-[400] h-[1.375rem] flex justify-center items-center bg-[transparent]">
                            <svg className="h-[1.25rem] w-[1.25rem] mr-[0.5rem] fill-[#666a7f]" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M6 5C4.89543 5 4 5.89543 4 7V17C4 18.1046 4.89543 19 6 19H10C11.1046 19 12 18.1046 12 17V16C12 15.4477 12.4477 15 13 15C13.5523 15 14 15.4477 14 16V17C14 19.2091 12.2091 21 10 21H6C3.79086 21 2 19.2091 2 17V7C2 4.79086 3.79086 3 6 3H10C12.2091 3 14 4.79086 14 7V8C14 8.55228 13.5523 9 13 9C12.4477 9 12 8.55228 12 8V7C12 5.89543 11.1046 5 10 5H6ZM16.2929 7.29289C16.6834 6.90237 17.3166 6.90237 17.7071 7.29289L21.7071 11.2929C22.0976 11.6834 22.0976 12.3166 21.7071 12.7071L17.7071 16.7071C17.3166 17.0976 16.6834 17.0976 16.2929 16.7071C15.9024 16.3166 15.9024 15.6834 16.2929 15.2929L18.5858 13L7 13C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11L18.5858 11L16.2929 8.70711C15.9024 8.31658 15.9024 7.68342 16.2929 7.29289Z"></path></svg>
                            Log out
                        </button>
                    </form>
                </div>
            </div>
            <hr className="border-[#2f3148] w-[100%] mt-[1rem]" />
            <div className="flex flex-col pl-[1.75rem] mt-[0rem] items-start items-center">
                <div className="flex items-start gap-[0.625rem] mt-[1.25rem] mb-[1.25rem]">
                    <button className="text-[1rem] text-[#eff0f7] font-[400] h-[1.375rem] flex justify-center items-center bg-[transparent]">
                        <svg className="h-[1.25rem] w-[1.25rem] mr-[0.5rem] fill-[#666a7f]" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M1.99998 7C1.99998 5.34315 3.34313 4 4.99998 4H19C20.6568 4 22 5.34315 22 7V7.98448C22.0001 7.99422 22.0001 8.00395 22 8.01368V17C22 18.6569 20.6568 20 19 20H4.99998C3.34313 20 1.99998 18.6569 1.99998 17V8.01367C1.99984 8.00395 1.99984 7.99422 1.99998 7.98449V7ZM3.99998 9.86852V17C3.99998 17.5523 4.4477 18 4.99998 18H19C19.5523 18 20 17.5523 20 17V9.86852L13.6641 14.0925C12.6564 14.7642 11.3436 14.7642 10.3359 14.0925L3.99998 9.86852ZM20 7.46482L12.5547 12.4283C12.2188 12.6523 11.7812 12.6523 11.4453 12.4283L3.99998 7.46482V7C3.99998 6.44772 4.4477 6 4.99998 6H19C19.5523 6 20 6.44772 20 7V7.46482Z"></path></svg>
                        Contact us
                    </button>
                    <a className="text-[#fffffff]" href="">
                        <button className="text-[1rem] text-[#eff0f7] font-[400] h-[1.375rem] flex justify-center items-center bg-[transparent]">
                            <svg className="h-[1.25rem] w-[1.25rem] mr-[0.5rem] fill-[#666a7f]" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path d="M11 4C8.79086 4 7 5.79086 7 8C7 8.30288 7.03348 8.59674 7.09656 8.87852C7.21716 9.41729 6.8783 9.95187 6.33958 10.0727C5.00015 10.3732 4 11.571 4 13C4 13.8705 4.36934 14.7016 4.96373 15.2883C5.35677 15.6763 5.36087 16.3095 4.97288 16.7025C4.5849 17.0956 3.95174 17.0997 3.5587 16.7117C2.60038 15.7657 2 14.4285 2 13C2 10.9436 3.24073 9.1787 5.01385 8.41034C5.00466 8.27465 5 8.13781 5 8C5 4.68629 7.68629 2 11 2C13.6277 2 15.8592 3.68831 16.6719 6.03894C19.6341 6.38143 22 8.94255 22 12C22 13.7179 21.2754 15.4723 20.1092 16.6913C19.7274 17.0904 19.0944 17.1044 18.6954 16.7226C18.2963 16.3408 18.2823 15.7078 18.6641 15.3087C19.4817 14.4541 20 13.192 20 12C20 9.82403 18.1682 8.00178 15.9992 8.00004C15.9728 8.00002 15.9463 8.00027 15.9198 8.00079C15.4368 8.01024 15.0161 7.67312 14.9201 7.19971C14.5499 5.37395 12.9343 4 11 4ZM12 10C12.5523 10 13 10.4477 13 11V18.5858L14.2929 17.2929C14.6834 16.9024 15.3166 16.9024 15.7071 17.2929C16.0976 17.6834 16.0976 18.3166 15.7071 18.7071L12.7071 21.7071C12.3166 22.0976 11.6834 22.0976 11.2929 21.7071L8.29289 18.7071C7.90237 18.3166 7.90237 17.6834 8.29289 17.2929C8.68342 16.9024 9.31658 16.9024 9.70711 17.2929L11 18.5858V11C11 10.4477 11.4477 10 12 10Z"></path></svg>
                            Install app
                        </button>
                    </a>
                </div>
            </div>
            <hr className="border-[#2f3148] w-[100%] mt-[0rem]" />
            <div className='w-[100%] flex justify-center'>
                <Link href="/" className={style.button}>Về trang chủ</Link>
            </div>
            <div id="sidebarLanguageSelector" className="flex justify-center w-[100%] h-[2.5rem] relative inline-block px-[1rem] mt-[1rem]" style={{ scrollbarColor: "#AAADBE transparent", scrollbarWidth: "thin" }} >
                <button className="w-[10.3125rem] h-[2.5rem] flex flex-row justify-around items-center  border-solid border-[#28293D] border-[2px] rounded-[0.5rem] hover:bg-[#373952]">
                    <div>English</div>
                    <svg className="w-[1.125rem] h-[1.125rem] mr-[0.25rem] ml-[0.5rem]" viewBox="0 0 24 24" focusable="false" aria-hidden="true" ><path fillRule="evenodd" clipRule="evenodd" d="M21.6699 7.25758C22.08 7.62758 22.1124 8.25991 21.7424 8.66994L14.2424 16.9814C13.0169 18.3395 10.9831 18.3395 9.75757 16.9814L2.25757 8.66994C1.88757 8.25991 1.92002 7.62758 2.33005 7.25758C2.74008 6.88759 3.37241 6.92004 3.74241 7.33006L11.2424 15.6415C11.6737 16.1195 12.3263 16.1195 12.7576 15.6415L20.2576 7.33006C20.6276 6.92004 21.2599 6.88759 21.6699 7.25758Z"></path>
                    </svg>
                </button>
                <div className="w-[11.25rem] max-h-[11.0625rem] bg-transparent absolute left-[8px]">
                    <ul className="hidden bg-[#2F3148] rounded-[0.625rem] max-h-[11.0625rem] overflow-y-auto custom-scrollbar flex flex-col">
                        {lang.slice(0, 23).map((langs) => (
                            <li key={langs.id} className="h-[2.5rem] leading-[2.5rem] py-[1rem] pl-[1rem] hover:bg-[#373952] flex items-center">
                                <p>{langs.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="w-[80%] flex justify-center mb-[0.25rem] mt-[0.25rem] text-[#878A9E] flex-wrap pl-[3.75rem] m-auto">
                <a className="pt-[0.3rem] hover:opacity-[0.8] w-[auto] mr-[1rem] flex flex-wrap overflow-hidden" href="#"><span className="mb-[0.125rem] mt-[0.235rem]">About</span></a>
                <a className="pt-[0.3rem] hover:opacity-[0.8] w-[auto] mr-[1rem] flex flex-wrap overflow-hidden" href="#"><span className="mb-[0.125rem] mt-[0.235rem]">Developers</span></a>
                <a className="pt-[0.3rem] hover:opacity-[0.8] w-[auto] mr-[1rem] flex flex-wrap overflow-hidden" href="#"><span className="mb-[0.125rem] mt-[0.235rem]">Advertising</span></a>
                <a className="pt-[0.3rem] hover:opacity-[0.8] w-[auto] mr-[1rem] flex flex-wrap overflow-hidden" href="#"><span className="mb-[0.125rem] mt-[0.235rem]">Kids site</span></a>
                <a className="pt-[0.3rem] hover:opacity-[0.8] w-[auto] mr-[1rem] flex flex-wrap overflow-hidden" href="#"><span className="mb-[0.125rem] mt-[0.235rem]">Jobs</span></a>
                <a className="pt-[0.3rem] hover:opacity-[0.8] w-[auto] mr-[1rem] flex flex-wrap overflow-hidden" href="#"><span className="mb-[0.125rem] mt-[0.235rem]">Info for parents</span></a>
                <a className="pt-[0.3rem] hover:opacity-[0.8] w-[auto] mr-[1rem] flex flex-wrap overflow-hidden" href="#"><span className="mb-[0.125rem] mt-[0.235rem]">Term and conditions</span></a>
                <a className="pt-[0.3rem] hover:opacity-[0.8] w-[auto] mr-[1rem] flex flex-wrap overflow-hidden" href="#"><span className="mb-[0.125rem] mt-[0.235rem]">Privacy</span></a>
                <a className="pt-[0.3rem] hover:opacity-[0.8] w-[auto] mr-[1rem] flex flex-wrap overflow-hidden" href="#"><span className="mb-[0.125rem] mt-[0.235rem]">All games</span></a>
            </div>
            <div className="flex flex-row flex-wrap mt-[1rem] ml-[0.5rem] w-[90%] justify-center pl-[3.75rem] m-auto">
                <a className="w-[2.1875rem] h-[2.1875rem] px-[1rem] py-[0.5rem] border-solid border-[0.125rem] mx-[0.25rem] rounded-[50%] relative mb-[0.5rem] border-[#878A9E] hover:border-[#6842FF]" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><svg className="w-[1rem] absolute left-[25%] top-[25%]" fill="#ffffff" viewBox="0 0 17 19" focusable="false" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M16.003 7.92466C14.4917 7.92826 13.0175 7.45898 11.7886 6.58311V12.6917C11.7882 13.8231 11.4409 14.9274 10.7931 15.8569C10.1454 16.7864 9.22803 17.4969 8.16379 17.8934C7.09955 18.2898 5.93912 18.3532 4.83767 18.0753C3.73623 17.7973 2.74626 17.1911 2.00015 16.3378C1.25403 15.4845 0.787339 14.4248 0.662465 13.3002C0.537591 12.1757 0.76049 11.04 1.30136 10.0451C1.84223 9.05006 2.67528 8.2432 3.68913 7.73236C4.70298 7.22151 5.84931 7.03103 6.97482 7.18638V10.2588C6.45978 10.0975 5.90673 10.1023 5.39463 10.2727C4.88253 10.443 4.43758 10.7701 4.12332 11.2072C3.80906 11.6444 3.64156 12.1692 3.64474 12.7068C3.64792 13.2444 3.82162 13.7672 4.14103 14.2006C4.46044 14.634 4.90923 14.9559 5.4233 15.1202C5.93738 15.2845 6.49046 15.2829 7.00355 15.1155C7.51664 14.9482 7.96351 14.6237 8.28034 14.1884C8.59717 13.7531 8.76776 13.2293 8.76775 12.6917V0.75H11.7886C11.7865 1.004 11.8079 1.25766 11.8524 1.50776C11.9574 2.06608 12.1757 2.59721 12.4939 3.06866C12.8121 3.54011 13.2235 3.94197 13.703 4.24966C14.3853 4.69881 15.1851 4.93821 16.003 4.93804V7.92466Z"></path></svg></a>
                <a className="w-[2.1875rem] h-[2.1875rem] px-[1rem] py-[0.5rem] border-solid border-[0.125rem] mx-[0.25rem] rounded-[50%] relative mb-[0.5rem] border-[#878A9E] hover:border-[#6842FF]" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><svg className="w-[1rem] absolute left-[25%] top-[25%]" fill="#ffffff" viewBox="0 0 15 15" focusable="false" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M5.62529 5.28991H8.33342V6.63886C8.72352 5.86303 9.72394 5.16595 11.2268 5.16595C14.1077 5.16595 14.7916 6.71032 14.7916 9.54386V14.7917H11.875V10.1892C11.875 8.57553 11.4849 7.66553 10.4918 7.66553C9.11435 7.66553 8.54196 8.64626 8.54196 10.1884V14.7917H5.62529V5.28991ZM0.623938 14.6677H3.5406V5.16595H0.623938V14.6677ZM3.95842 2.06772C3.95853 2.31219 3.91004 2.55424 3.81578 2.77981C3.72152 3.00538 3.58337 3.20997 3.40935 3.38168C3.05673 3.73213 2.57942 3.9283 2.08227 3.92709C1.58599 3.92676 1.10979 3.73109 0.756646 3.38241C0.583259 3.21011 0.445573 3.0053 0.35148 2.7797C0.257387 2.5541 0.208735 2.31215 0.208313 2.06772C0.208313 1.57407 0.405188 1.10157 0.757375 0.753031C1.11021 0.403876 1.58661 0.208125 2.083 0.208344C2.58029 0.208344 3.05717 0.40449 3.40935 0.753031C3.76081 1.10157 3.95842 1.57407 3.95842 2.06772Z"></path></svg></a>
                <a className="w-[2.1875rem] h-[2.1875rem] px-[1rem] py-[0.5rem] border-solid border-[0.125rem] mx-[0.25rem] rounded-[50%] relative mb-[0.5rem] border-[#878A9E] hover:border-[#6842FF]" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><svg className="w-[1rem] absolute left-[25%] top-[25%]" fill="#ffffff" viewBox="0 0 30 30" focusable="false" aria-hidden="true"><path d="M22.1885 3.75H26.0219L17.6469 13.3229L27.5 26.3469H19.7854L13.7437 18.4469L6.82917 26.3469H2.99375L11.9521 16.1073L2.5 3.75104H10.4104L15.8719 10.9719L22.1885 3.75ZM20.8438 24.0531H22.9677L9.25625 5.92396H6.97708L20.8438 24.0531Z" fill="white"></path></svg></a>
                <a className="w-[2.1875rem] h-[2.1875rem] px-[1rem] py-[0.5rem] border-solid border-[0.125rem] mx-[0.25rem] rounded-[50%] relative mb-[0.5rem] border-[#878A9E] hover:border-[#6842FF]" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><svg className="w-[1rem] absolute left-[25%] top-[25%]" fill="#ffffff" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path xmlns="http://www.w3.org/2000/svg" d="M21.4911 6.63154C21.409 6.30155 21.2483 5.99642 21.0229 5.74232C20.7974 5.48821 20.5138 5.29271 20.1964 5.17256C17.1429 3.99105 12.2679 4 12 4C11.7321 4 6.85714 3.99105 3.80357 5.17256C3.4862 5.29271 3.20262 5.48821 2.97713 5.74232C2.75165 5.99642 2.59099 6.30155 2.50893 6.63154C2.27679 7.51767 2 9.14672 2 11.8409C2 14.5351 2.27679 16.1641 2.50893 17.0503C2.59099 17.3803 2.75165 17.6854 2.97713 17.9395C3.20262 18.1936 3.4862 18.3891 3.80357 18.5093C6.73214 19.646 11.3214 19.6818 11.9375 19.6818H12.0625C12.6786 19.6818 17.2679 19.646 20.1964 18.5093C20.5138 18.3891 20.7974 18.1936 21.0229 17.9395C21.2483 17.6854 21.409 17.3803 21.4911 17.0503C21.7232 16.1641 22 14.5351 22 11.8409C22 9.14672 21.7232 7.51767 21.4911 6.63154ZM15.0536 12.1363L10.7679 15.0005C10.711 15.0425 10.642 15.0645 10.5714 15.0632C10.5123 15.061 10.4544 15.0457 10.4018 15.0184C10.3447 14.9887 10.297 14.9437 10.2639 14.8884C10.2308 14.8331 10.2136 14.7697 10.2143 14.7052V8.97665C10.2136 8.91217 10.2308 8.84876 10.2639 8.79346C10.297 8.73816 10.3447 8.69313 10.4018 8.66337C10.4587 8.63292 10.5228 8.61851 10.5873 8.62166C10.6517 8.62481 10.7141 8.64541 10.7679 8.68127L15.0536 11.5455C15.1034 11.577 15.1444 11.6206 15.1729 11.6722C15.2013 11.7239 15.2162 11.7819 15.2162 11.8409C15.2162 11.8999 15.2013 11.9579 15.1729 12.0096C15.1444 12.0613 15.1034 12.1048 15.0536 12.1363Z"></path></svg></a>
                <a className="w-[2.1875rem] h-[2.1875rem] px-[1rem] py-[0.5rem] border-solid border-[0.125rem] mx-[0.25rem] rounded-[50%] relative mb-[0.5rem] border-[#878A9E] hover:border-[#6842FF]" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><svg className="w-[1rem] absolute left-[25%] top-[25%]" fill="#ffffff" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path d="M4.33466 2.08799C4.43624 2.02988 4.55133 1.99954 4.66835 2.00001C4.78537 2.00047 4.90021 2.03174 5.00132 2.09066L15.4586 8.1906L12.2226 11.1026L4 3.70264V2.66665C3.9999 2.54927 4.0308 2.43395 4.08956 2.33234C4.14833 2.23073 4.23288 2.14644 4.33466 2.08799ZM4 5.49729V18.5025L11.2266 11.9999L4 5.49729ZM4 20.2972V21.3331C3.99997 21.4504 4.03088 21.5657 4.08963 21.6672C4.14837 21.7687 4.23287 21.853 4.33458 21.9114C4.43629 21.9698 4.55162 22.0004 4.66892 22C4.78622 21.9996 4.90134 21.9683 5.00266 21.9091L15.4586 15.8092L12.2226 12.8972L4 20.2972ZM16.6679 15.1039L21.0012 12.5759C21.1019 12.5172 21.1855 12.4331 21.2435 12.3321C21.3016 12.231 21.3322 12.1165 21.3322 11.9999C21.3322 11.8833 21.3016 11.7688 21.2435 11.6677C21.1855 11.5667 21.1019 11.4826 21.0012 11.4239L16.6679 8.89592L13.2186 11.9999L16.6679 15.1039Z"></path></svg></a>
                <a className="w-[2.1875rem] h-[2.1875rem] px-[1rem] py-[0.5rem] border-solid border-[0.125rem] mx-[0.25rem] rounded-[50%] relative mb-[0.5rem] border-[#878A9E] hover:border-[#6842FF]" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><svg className="w-[1rem] absolute left-[25%] top-[25%]" fill="#ffffff" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path d="M18.1643 21.1976C17.0658 22.253 15.8665 22.0864 14.712 21.5864C13.4903 21.0754 12.3695 21.0531 11.0805 21.5864C9.46647 22.2752 8.61462 22.0752 7.65069 21.1976C2.18095 15.6094 2.98796 7.09936 9.19746 6.78828C10.7106 6.86605 11.7642 7.6104 12.6497 7.67706C13.9723 7.41043 15.2388 6.64386 16.6511 6.74385C18.3436 6.87716 19.6214 7.54374 20.462 8.74359C16.9649 10.8211 17.7944 15.3872 21 16.6648C20.3611 18.3313 19.5317 19.9866 18.153 21.2087L18.1643 21.1976ZM12.5376 6.72163C12.3695 4.24416 14.3982 2.19997 16.7296 2C17.0546 4.8663 14.1068 6.99937 12.5376 6.72163Z"></path></svg></a>
            </div>
        </div>
    )
}
export default UserNav;