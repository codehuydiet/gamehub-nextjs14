import style from './favorite.module.css'
const Favorite = () => {
    return (
        <div className="w-[100%] h-[calc(100vh-3.75rem)] bg-[#1a1b28] font-[Nunito]">
            <div className="h-[3.75rem] pr-[3.75rem] flex items-center justify-center">
                <h1 className="text-[24px] font-[900] font-[Nunito]">My games</h1>
            </div>
            <div className={style.buttonWrap2}>
                <div className='h-[100%]'>
                    <div className={style.labelContainer}>
                        <span>Favorites</span>
                    </div>
                    <div className="" aria-label="Favorite">
                        <div className="">
                            <div className="flex flex-col items-center pt-[1rem] px-[3.5rem] mt-[0.5rem]">
                                <svg className="w-[3.125rem] h-[3.125rem] mb-[1rem]" viewBox="0 0 120 120" focusable="false" aria-hidden="true" width="120" height="120" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M40.2223 15C33.318 15 27.6735 16.4827 23.1717 19.1231C18.6594 21.7698 15.571 25.4186 13.5457 29.3108C9.59151 36.9098 9.62884 45.499 10.593 50.4327C13.1027 63.2751 22.0972 76.7358 31.5186 86.7905C36.2887 91.8812 41.354 96.3 46.0789 99.4881C50.5575 102.51 55.5562 105 60.0001 105C64.444 105 69.4427 102.51 73.9213 99.4881C78.6462 96.3 83.7115 91.8812 88.4816 86.7905C97.903 76.7358 106.897 63.2751 109.407 50.4327C110.371 45.499 110.409 36.9098 106.455 29.3108C104.429 25.4186 101.341 21.7698 96.8285 19.1231C92.3267 16.4827 86.6822 15 79.7779 15C74.2905 15 69.5521 17.478 65.892 20.5653C63.6296 22.4736 61.6515 24.7163 60.0001 27.0366C58.3487 24.7163 56.3706 22.4736 54.1082 20.5653C50.4481 17.478 45.7097 15 40.2223 15Z" fill="url(#paint0_linear_1861_3922)"></path><defs><linearGradient id="paint0_linear_1861_3922" x1="60.0001" y1="15" x2="60.0001" y2="105" gradientUnits="userSpaceOnUse"><stop stopColor="#B634C1"></stop><stop offset="1" stopColor="#FF8BA7"></stop></linearGradient></defs></svg>
                                <h2 className="text-[1.25rem] font-[900] text-center">Tạo tài khoản và thêm game mà bạn yêu thích</h2>
                            </div>
                        </div>
                        <div className="">

                        </div>
                    </div>
                </div>
                <div>
                    <div className={style.labelContainer}>
                        <span>Recent</span>
                    </div>
                    <div className="" aria-label="Recent">
                        <div className="w-[100%] flex flex-col items-center">
                            <svg className="w-[7.5rem] h-[7.5rem] fill-[#2f3148]" viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 7C12.5523 7 13 7.44772 13 8V11.5858L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12V8C11 7.44772 11.4477 7 12 7Z"></path></svg>
                            <h2 className="text-[1rem] font-[400] text-center text-[#aaadbe] px-[2rem] mt-[0.5rem]">Tất cả các trò chơi bạn chơi gần đây sẽ được liệt kê ở đây. Hay tìm kiếm điều gì thú vị nào!</h2>
                        </div>
                        <div className="">

                        </div>
                    </div>
                </div>
                <div>
                    <div className={style.labelContainer}>
                        <span>Liked</span>
                    </div>
                    <div className="" aria-label="Liked">
                        <div className="">
                            <div className="flex flex-col items-center pt-[1rem] px-[3.5rem] mt-[0.5rem]">
                                <svg className="w-[3.125rem] h-[3.125rem] mb-[1rem]" viewBox="0 0 120 120" focusable="false" aria-hidden="true" width="120" height="120" fill="none"><path d="M12 63.125C12 61.8939 12.2419 60.6748 12.7118 59.5373C13.1817 58.3999 13.8705 57.3664 14.7389 56.4959C15.6072 55.6253 16.638 54.9348 17.7725 54.4636C18.9071 53.9925 20.123 53.75 21.351 53.75C22.579 53.75 23.795 53.9925 24.9295 54.4636C26.064 54.9348 27.0949 55.6253 27.9632 56.4959C28.8315 57.3664 29.5203 58.3999 29.9902 59.5373C30.4602 60.6748 30.702 61.8939 30.702 63.125V100.625C30.702 103.111 29.7169 105.496 27.9632 107.254C26.2095 109.012 23.8311 110 21.351 110C18.871 110 16.4925 109.012 14.7389 107.254C12.9852 105.496 12 103.111 12 100.625V63.125ZM36.9361 62.0812V96.0187C36.935 98.3416 37.5795 100.619 38.7974 102.595C40.0153 104.571 41.7583 106.168 43.8309 107.206L44.1426 107.362C47.6018 109.096 51.4156 109.999 55.2828 110H89.0462C91.9296 110.001 94.7243 109 96.9544 107.168C99.1845 105.335 100.712 102.785 101.277 99.95L108.758 62.45C109.12 60.6367 109.075 58.7656 108.629 56.9715C108.182 55.1774 107.343 53.5051 106.174 52.0751C105.005 50.645 103.533 49.4929 101.866 48.7018C100.199 47.9107 98.3777 47.5002 96.5333 47.5H74.3402V22.5C74.3402 19.1848 73.0266 16.0054 70.6884 13.6612C68.3502 11.317 65.1789 10 61.8721 10C60.2188 10 58.6331 10.6585 57.464 11.8306C56.2949 13.0027 55.6381 14.5924 55.6381 16.25V20.4187C55.6381 25.828 53.8882 31.0913 50.6509 35.4187L41.9233 47.0812C38.686 51.4087 36.9361 56.672 36.9361 62.0812Z" fill="url(#paint0_linear_1861_3955)"></path><defs><linearGradient id="paint0_linear_1861_3955" x1="60.5" y1="10" x2="60.5" y2="110" gradientUnits="userSpaceOnUse"><stop stopColor="#AA3FFF"></stop><stop offset="1" stopColor="#7ED1FF"></stop></linearGradient></defs></svg>
                                <h2 className="text-[1.25rem] font-[900] text-center">Tạo tài khoản để xem tất cả các game mà bạn đã thích</h2>
                            </div>
                        </div>
                        <div className="">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Favorite;