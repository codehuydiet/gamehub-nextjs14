"use client"

import { gameDisLike, gameLike } from "@/lib/action";
import style from "./likecomponent.module.css"

const LikeComponent = ({ data, user }) => {
    console.log(data._id);
    console.log(user._id);
    const handleLike = async (event) => {
        event.preventDefault();
        // console.log(1);
        if (user?._id && data?._id) {
            try {
                // console.log(1);
                await gameLike(user._id, data._id);
                // console.log(1);
            } catch (err) {
                console.log(err);
                throw new Error({ message: "lỗi rồi bé ơi" });
            }
        }
    };
    const handleDislike = async (event) => {
        event.preventDefault();
        // console.log(1);
        if (user?._id && data?._id) {
            try {
                // console.log(1);
                await gameDisLike(user._id, data._id);
                // console.log(1);
            } catch (err) {
                console.log(err);
                throw new Error({ message: "lỗi rồi bé ơi" });
            }
        }
    };
    return (
        <div className={style.like}>
            <form onSubmit={handleLike} className={style.form}>
                <button className={style.likeContainer}>
                    <div className={style.svgWarper}>
                        <svg className={style.svg} class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-14yq2cq" focusable="false" aria-hidden="true" viewBox="0 0 24 24" width="24" height="24"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.1051 3.90453C10.1051 2.84042 10.9755 2 12.0215 2H12.1183C13.7773 2 15.1446 3.33088 15.1446 5V9H18.9711C21.2014 9 22.6959 11.3321 21.6755 13.3463L18.1295 20.3463C17.6137 21.3646 16.5645 22 15.4251 22H11.3546C11.1082 22 10.8627 21.9702 10.6236 21.9112L6.93101 21H5.02628C3.36726 21 2 19.6691 2 18V12C2 10.3309 3.36726 9 5.02628 9H7.19669L9.66081 5.35177C9.95107 4.92203 10.1051 4.41848 10.1051 3.90453ZM6.05257 11H5.02628C4.44713 11 4 11.46 4 12V18C4 18.54 4.44713 19 5.02628 19H6.05257V11ZM8.05257 19.2168V11.3061L11.3182 6.47121C11.8129 5.73871 12.0857 4.88122 12.1041 4H12.1183C12.6974 4 13.1446 4.45998 13.1446 5V9H12.1183C11.566 9 11.1183 9.44772 11.1183 10C11.1183 10.5523 11.566 11 12.1183 11H18.9711C19.7534 11 20.2183 11.7971 19.8914 12.4425L16.3454 19.4425C16.1747 19.7794 15.8207 20 15.4251 20H11.3546C11.2696 20 11.185 19.9897 11.1027 19.9694L8.05257 19.2168Z"></path></svg>
                    </div>
                    <div className={style.number}>
                        {data.like}
                    </div>
                </button>
            </form>
            <form onSubmit={handleDislike} className={style.form}>
                <button className={style.likeContainer}>
                    <div className={style.svgWarper}>
                        <svg className={style.svg} class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-14yq2cq" focusable="false" aria-hidden="true" viewBox="0 0 24 24" width="24" height="24"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.57484 4C8.17921 4 7.82522 4.22056 7.65455 4.55747L4.10855 11.5575C3.78161 12.2029 4.24657 13 5.02885 13H11.8817C12.434 13 12.8817 13.4477 12.8817 14C12.8817 14.5523 12.434 15 11.8817 15H10.8554V19C10.8554 19.54 11.3025 20 11.8817 20H11.8958C11.9142 19.1188 12.187 18.2613 12.6818 17.5288L15.9474 12.6939V4.78324L12.8972 4.03059C12.815 4.01029 12.7304 4 12.6454 4H8.57484ZM17.9474 5V13H18.9737C19.5528 13 19.9999 12.54 19.9999 12V6C19.9999 5.45998 19.5528 5 18.9737 5H17.9474ZM16.8033 15L14.3391 18.6482C14.0489 19.078 13.8948 19.5815 13.8948 20.0955C13.8948 21.1596 13.0245 22 11.9784 22H11.8817C10.2226 22 8.85538 20.6691 8.85538 19V15H5.02885C2.79852 15 1.30407 12.6679 2.32441 10.6537L5.87041 3.65368C6.38621 2.63545 7.43548 2 8.57484 2H12.6454C12.8917 2 13.1372 2.02982 13.3764 2.08884L17.0689 3H18.9737C20.6327 3 21.9999 4.33087 21.9999 6V12C21.9999 13.6691 20.6327 15 18.9737 15H16.8033Z"></path></svg>
                    </div>
                    <div className={style.number}>
                        {data.dislike}
                    </div>
                </button>
            </form>
            <form action="" className={style.form}>
                <button className={style.likeContainer}>
                    <div className={style.svgWarper}>
                        <svg className={style.svg} class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-14yq2cq" focusable="false" aria-hidden="true" viewBox="0 0 24 24" width="24" height="24"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.47368 6.78578C3.94666 7.79745 3.9392 9.02672 4.07146 9.70273C4.46989 11.7393 5.98381 14.0997 7.75719 15.9902C8.63197 16.9227 9.53387 17.7018 10.3315 18.2394C11.1783 18.8102 11.749 19 12 19C12.251 19 12.8217 18.8102 13.6685 18.2394C14.4661 17.7018 15.368 16.9227 16.2428 15.9902C18.0162 14.0997 19.5301 11.7393 19.9286 9.70273C20.0608 9.02672 20.0534 7.79745 19.5263 6.78578C19.2725 6.29849 18.9017 5.86627 18.3619 5.55002C17.82 5.23252 17.0529 5 15.96 5C14.7111 5 13.7204 5.56856 13.2125 6.32446C12.8891 6.80569 12.3638 6.94309 12 6.94309C11.6362 6.94309 11.1109 6.80569 10.7876 6.32446C10.2796 5.56856 9.28887 5 8.04003 5C6.94711 5 6.18001 5.23252 5.63809 5.55002C5.09831 5.86627 4.72752 6.29849 4.47368 6.78578ZM4.62707 3.82438C5.52816 3.29645 6.65797 3 8.04003 3C9.61785 3 11.0464 3.61724 12 4.64452C12.9536 3.61724 14.3822 3 15.96 3C17.342 3 18.4719 3.29645 19.3729 3.82438C20.2762 4.35357 20.8945 5.08322 21.3001 5.86176C22.0919 7.38172 22.0844 9.09982 21.8913 10.0867C21.3888 12.6555 19.5878 15.3476 17.7015 17.3585C16.7464 18.3766 15.7323 19.2603 14.7863 19.8979C13.8895 20.5023 12.8891 21 12 21C11.1109 21 10.1105 20.5023 9.21371 19.8979C8.26775 19.2603 7.25361 18.3766 6.29853 17.3585C4.41221 15.3476 2.61121 12.6555 2.10867 10.0867C1.91558 9.09982 1.90812 7.38172 2.69993 5.86176C3.1055 5.08322 3.72383 4.35357 4.62707 3.82438Z"></path></svg>
                    </div>
                </button>
            </form>
            <form action="">

            </form>
        </div>
    )
}

export default LikeComponent