import { auth } from '@/lib/auth';
import style from './sluggame.module.css'
import { gameLike, getUser, recentPlayed } from '@/lib/action';
import LikeComponent from '@/components/likecomponent/likecomponent';

const getData = async (slug) => {
    console.log(slug);
    const res = await fetch(`${process.env.DOMAIN}/api/allgame/${slug}`, { cache: 'no-store' });
    console.log(res);
    if (!res.ok) {
        throw new Error("Somthing went wrong");
    }
    return res.json();
}

const SlugGame = async ({ params }) => {
    const session = await auth();
    // console.log(session);
    // console.log(params);
    const { slug } = params;
    console.log(slug);
    const data = await getData(slug);
    const user = await getUser(session?.user.email);
    console.log(data?._id);
    console.log(user?.id);
    recentPlayed(slug, user?._id);
    return (
        <div className="pl-[0.5rem] pb-[5.25rem] w-[100%] flex justify-center">
            <div className="flex justify-center" id={style.grid_item}>
                <div className="bg-[#ffffff]" id={style.game}>
                    <iframe className='w-[100%] h-[100%]' src={data?.embed} allow="gamepad *;"></iframe>
                </div>
                {user?.id && (
                    <LikeComponent user={user} data={data} ></LikeComponent>
                )}
                <div className='w-[100%] h-[100%] bg-[#1a1b28] ' style={{ gridArea: "info" }}>
                    <div className='' id="gameInfoContainer">
                        <div className='pl-[1.5rem] pr-[0.5rem] flex flex-row'>
                            <div className='pr-[1rem] w-[calc(100%-300px)] text-[0.875rem] pt-[1rem] pb-[0.5rem]'>
                                <div className='pb-[0.5rem]'>
                                    <h1 className='text-[1.25rem] leading-[1.167] font-[1000]'>{data?.name}</h1>
                                </div>
                                <div className='py-[0.5rem] flex'>
                                    <button className='rounded-[1.875rem] bg-[#373952] h-[2.5rem]' type="button">
                                        <div className='px-[1rem] py-[0.5rem] flex flex-row items-center'>
                                            <svg className='w-[1.25rem] h-[1.25rem]' viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10ZM2 12C2 9.79086 3.79086 8 6 8C8.20914 8 10 9.79086 10 12C10 14.2091 8.20914 16 6 16C3.79086 16 2 14.2091 2 12Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4ZM14 6C14 3.79086 15.7909 2 18 2C20.2091 2 22 3.79086 22 6C22 8.20914 20.2091 10 18 10C15.7909 10 14 8.20914 14 6Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M18 16C16.8954 16 16 16.8954 16 18C16 19.1046 16.8954 20 18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16ZM14 18C14 15.7909 15.7909 14 18 14C20.2091 14 22 15.7909 22 18C22 20.2091 20.2091 22 18 22C15.7909 22 14 20.2091 14 18Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M15.5528 17.8944L7.5528 13.8944L8.44722 12.1056L16.4472 16.1056L15.5528 17.8944Z"></path><path fillRule="evenodd" clipRule="evenodd" d="M8.4472 11.8944L16.4472 7.89443L15.5528 6.10558L7.55278 10.1056L8.4472 11.8944Z"></path></svg>
                                            <span className='pl-[0.5rem] text-[1rem] font-[1000]'>Share</span>
                                        </div>
                                    </button>
                                    <button className='rounded-[1.875rem] bg-[#373952] h-[2.5rem] ml-[1rem]' type="button">
                                        <div className='px-[1rem] py-[0.5rem] flex flex-row items-center'>
                                            <svg className='w-[1.25rem] h-[1.25rem]' viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M13.9701 4.24253C14.5059 4.37648 14.8317 4.91941 14.6978 5.45521L11.1828 19.5149C11.0489 20.0507 10.5059 20.3765 9.97014 20.2425C9.43435 20.1086 9.10859 19.5656 9.24254 19.0298L12.7575 4.97013C12.8914 4.43434 13.4343 4.10858 13.9701 4.24253ZM7.66339 6.25172C8.07665 6.61809 8.11466 7.25012 7.74828 7.66338L4.0543 11.83C4.02867 11.859 4 11.9173 4 12C4 12.0827 4.02867 12.141 4.05429 12.1699L7.74828 16.3366C8.11466 16.7499 8.07665 17.3819 7.66339 17.7483C7.25013 18.1146 6.6181 18.0766 6.25172 17.6634L2.55774 13.4967C1.81408 12.6579 1.81409 11.3421 2.55774 10.5033L6.25173 6.3366C6.6181 5.92334 7.25013 5.88534 7.66339 6.25172ZM16.3366 6.25172C16.7499 5.88534 17.3819 5.92334 17.7483 6.3366L21.4423 10.5033C22.1859 11.3421 22.1859 12.6579 21.4423 13.4967L17.7483 17.6634C17.3819 18.0766 16.7499 18.1146 16.3366 17.7483C15.9234 17.3819 15.8853 16.7499 16.2517 16.3366L19.9457 12.1699C19.9713 12.141 20 12.0827 20 12C20 11.9173 19.9713 11.859 19.9457 11.83L16.2517 7.66338C15.8853 7.25012 15.9234 6.61809 16.3366 6.25172Z"></path></svg>
                                            <span className='pl-[0.5rem] text-[1rem] font-[1000]'>Embed</span>
                                        </div>
                                    </button>
                                </div>
                                <div className='max-w-[100%] text-[0.875rem] pt-[0.5rem]'>
                                    <div className='flex flex-row'>
                                        <div className='w-[6.875rem] text-[#767A8E] text-[0.875rem] h-[1.8125rem]'>Rating:</div>
                                        <div className='flex'>
                                            <div className='text-[0.875rem] font-[1000] leading-[1.5]'>{data.star}</div>
                                            <div className='text-[0.75rem] font-[400] flex  leading-[1.5] ml-[0.25rem] pt-[0.1rem]'>({data?.votes} votes)</div>
                                        </div>
                                    </div>
                                    <div className='flex flex-row'>
                                        <div className='w-[6.875rem] text-[#767A8E] text-[0.875rem] h-[1.8125rem]'>Released:</div>
                                        <div className=''>{data.createdAt}</div>
                                    </div>
                                    <div className='flex flex-row'>
                                        <div className='w-[6.875rem] text-[#767A8E] text-[0.875rem] h-[1.8125rem]'>Last Updated:</div>
                                        <div className=''>{data.updatedAt}</div>
                                    </div>
                                    <div className='flex flex-row'>
                                        <div className='w-[6.875rem] text-[#767A8E] text-[0.875rem] h-[1.8125rem]'>Technology:</div>
                                        <div className=''>{data.technology}</div>
                                    </div>
                                    <div className='flex flex-row'>
                                        <div className='w-[6.875rem] text-[#767A8E] text-[0.875rem] h-[1.8125rem]'>Platforms:</div>
                                        <div className=''>{data.platforms}</div>
                                    </div>
                                    <div className='flex flex-row'>
                                        <div className='w-[6.875rem] text-[#767A8E] text-[0.875rem] h-[1.8125rem]'>Classification:</div>
                                        <div className=''>
                                            <div className=' flex text-[#A48EFF] font-[900]'>
                                                <div className='flex'>
                                                    <a href="https://www.crazygames.com/">Games</a>
                                                    <div className=''>»</div>
                                                </div>
                                                <div className='flex'>
                                                    <a href="https://www.crazygames.com/c/io">.io</a>
                                                    <div className=''>»</div>
                                                </div>
                                                <div className=''>
                                                    <a href="https://www.crazygames.com/t/battle">Battle</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-row'>
                                        <div className='w-[6.875rem] text-[#767A8E] text-[0.875rem] h-[1.8125rem]'>Wiki pages:</div>
                                        <div className=''>
                                            <div className=''>
                                                <a className='text-[#A48EFF] font-[900]' href="#" target="_blank">Fandom</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className='w-[34.875rem] mt-[0.25rem] mb-[1.25rem] opacity-15' />

                                <div className='mb-[0.875rem]'>
                                    <p>{data.name} is an game set in a top-down online battle arena. Collect orbs and battle other players to evolve your warrior. Each evolution improves your weapon range but slows your movement. How many will you slay before you fall?</p>
                                </div>
                                <div className=''>
                                    <h2 className='my-[0.875rem] font-[1000]'>How to Play</h2>
                                    <p className='mb-[0.875rem]'>Traverse the online battleground collecting orbs to grow your warrior into greater forms. Take down enemies with swords, axes, and more. Continue the fight until you{"'"}re struck down by the enemy. See what level of evolution you can reach before your day of reckoning comes!</p>
                                    <h3 className='my-[1rem] font-[800]'>Tips</h3>
                                    <ul className='list-disc pl-[2.5rem]'>
                                        <li>Focus on collecting orbs around the outside of the map when you are low level</li>
                                        <li>Your weapon range improves as you get bigger, but you also become slower, so remember to remain cautious and alert!</li>
                                        <li>When you{"'"}re smaller, you can move faster - use it to your advantage and play more evasively when you are low level</li>
                                    </ul>
                                    <h2 className='my-[0.875rem] font-[800]'>More IO game action</h2>
                                    <p>If you like EvoWars, make sure to try our other smash hit .io games, such as <a className='text-[#A48EFF] font-[800]' target="_blank" href="#">Bloxd.io</a>, <a className='text-[#A48EFF] font-[800]' target="_blank" href="#">Agar.io</a> and <a className='text-[#A48EFF] font-[800]' target="_blank" href="#">ZombsRoyale.io</a>!
                                    </p>
                                    <h2 className='my-[0.875rem] font-[800]'>Features</h2>
                                    <ul>
                                        <li>Intense slashing game play to eliminate opponents</li>
                                        <li>You can level up to increase the size and evolve to more than 15 character models</li>
                                        <li>Define your own play style and use every opportunity as good as possible</li>
                                        <li>Sprint ability at the cost of your experience points</li>
                                    </ul>
                                    <h2 className='my-[0.875rem] font-[800]'>Release Date</h2>
                                    <p>March 2018 </p>
                                    <h2 className='my-[0.875rem] font-[800]'>Developer</h2>
                                    <p>EvoWars.io was made by Night Steed Games.</p>
                                    <h2 className='my-[0.875rem] font-[800]'>Platforms</h2>
                                    <ul className='list-disc pl-[2.5rem]'>
                                        <li>Web browser (desktop and mobile)</li>
                                        <li>Android</li>
                                        <li>iOS</li>
                                    </ul>
                                </div>
                                <h3 className='my-[0.875rem] font-[800]'>Last Updated</h3>
                                <p>Dec 19, 2023</p>
                                <div className=''>
                                    <h2 className='my-[0.875rem] font-[800]'>Controls</h2>
                                    <ul className='list-disc pl-[2.5rem]'>
                                        <li>Move your mouse to control the character{"'"}s movement</li>
                                        <li>Left click to attack</li>
                                        <li>Right click to sprint</li>
                                    </ul>
                                </div>
                                <h2 className='my-[0.875rem] font-[800]'>FAQ</h2>
                                <div className=''>
                                    <div className=''>
                                        <h3 className='my-[0.875rem] font-[800]'>How many evolutions are there in EvoWars?</h3>
                                        <div className=''>
                                            <p>There are 36 evolutions and an additional 2 secret evolutions.</p>
                                        </div>
                                    </div>
                                    <div className=''>
                                        <h3 className='my-[0.875rem] font-[800]'>Do people still play EvoWars.io?</h3>
                                        <div className=''>
                                            <p>Yes! The game receives regular updates and you can play for free here to explore the new features as and when they land.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex-1'>

                            </div>
                        </div>
                    </div>
                </div>
                {/* {gameDetail.slice(0, 29).map((game) => (
                    <a key={game.idGame} className="relative block border-[2px] border-solid border-transparent hover:border-[#A48EFF] rounded-[0.625rem]" href="#">
                        <div className=""></div>
                        <Image className='rounded-[0.625rem] h-[100%]' src={game.image} fill alt="" />
                    </a>
                ))}
                <div className={style.grid_bot}>
                    {gameDetail.slice(30, 48).map((game) => (
                        <a key={game.idGame} className="relative block border-[2px] border-solid border-transparent hover:border-[#A48EFF] rounded-[0.625rem]" href="#">
                            <div className=""></div>
                            <Image className='rounded-[0.625rem] h-[100%]' src={game.image} fill alt="" />
                        </a>
                    ))}
                </div> */}
            </div>
        </div>
    )
}
export default SlugGame