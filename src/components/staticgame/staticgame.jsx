import style from './staticgame.module.css'
import StaticData from './staticdata/staticdata'

const staticData = [
    {
        name: "EvoWars.io",
        image: "https://i.imgur.com/OwSa0qI.png",
        slug: "/game/evowarsio",
        linkEmbed: "https://www.crazygames.com/embed/evowarsio",
        child: [
            {
                name: "Bloxd.io",
                image: "https://images.crazygames.com/games/bloxdhop-io/cover_16x9-1709115453824.png?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&w=336&fit=crop",
                slug: "/game/bloxdhop-io",
                linkEmbed: "https://www.crazygames.com/embed/bloxdhop-io",
            },
            {
                name: "Miniblox",
                image: "https://images.crazygames.com/miniblox_16x9/20240301043933/miniblox_16x9-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
                slug: "/game/miniblox",
                linkEmbed: "https://www.crazygames.com/embed/miniblox",
            },
            {
                name: "Space Waves",
                image: "https://images.crazygames.com/space-waves_16x9/20240416040040/space-waves_16x9-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
                slug: "/game/space-waves",
                linkEmbed: "https://www.crazygames.com/embed/space-waves",
            },
            {
                name: "Taming.io",
                image: "https://images.crazygames.com/taming-io_16x9/20231110124553/taming-io_16x9-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
                slug: "/game/taming-io",
                linkEmbed: "https://www.crazygames.com/embed/taming-io",
            },
        ]
    },
    {
        name: "Ragdoll Archers",
        image: "https://images.crazygames.com/ragdoll-archers_16x9/20240205020743/ragdoll-archers_16x9-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
        slug: "/game/ragdoll-archers",
        linkEmbed: "https://www.crazygames.com/embed/ragdoll-archers",
        child: [
            {
                name: "8 Ball Billiards Classic",
                image: "https://images.crazygames.com/8-ball-billiards-classic_16x9/20231108025958/8-ball-billiards-classic_16x9-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
                slug: "/game/8-ball-billiards-classic",
                linkEmbed: "https://www.crazygames.com/embed/8-ball-billiards-classic",
            },
            {
                name: "Shell Shockers",
                image: "https://images.crazygames.com/shellshockersio_16x9/20240105032649/shellshockersio_16x9-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
                slug: "/game/shell-shockers",
                linkEmbed: "https://www.crazygames.com/embed/shellshockersio",
            },
            {
                name: "StarBlast",
                image: "https://images.crazygames.com/starblastio/20210428165729/starblastio-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
                slug: "/game/star-blast",
                linkEmbed: "https://www.crazygames.com/embed/starblastio",
            },
            {
                name: "MiniGiants.io",
                image: "https://images.crazygames.com/games/minigiants-io/cover-1584553354815.png?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
                slug: "/game/mini-giants-io",
                linkEmbed: "https://www.crazygames.com/embed/minigiants-io",
            },
        ]
    },
    {
        name: "Stabfish 2",
        image: "https://images.crazygames.com/games/stabfish2-io-multiplayer/cover_16x9-1707297228237.png?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
        slug: "/game/stabfish-2",
        linkEmbed: "https://www.crazygames.com/embed/stabfish2-io-multiplayer",
        child: [
            {
                name: "Super Spin",
                image: "https://images.crazygames.com/super-spin_16x9/20231204095248/super-spin_16x9-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
                slug: "/game/super-spin",
                linkEmbed: "https://www.crazygames.com/embed/super-spin",
            },
            {
                name: "Survivor: Space Battle",
                image: "https://images.crazygames.com/survivor-space-battle_16x9/20240422040642/survivor-space-battle_16x9-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
                slug: "/game/survivor-space-battle",
                linkEmbed: "https://www.crazygames.com/embed/survivor-space-battle",
            },
            {
                name: "EvoWorld.io (FlyOrDie.io)",
                image: "https://images.crazygames.com/flyordieio/20210614144226/flyordieio-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
                slug: "/game/flyordieio",
                linkEmbed: "https://www.crazygames.com/embed/flyordieio",
            },
            {
                name: "MiniGiants.io",
                image: "https://images.crazygames.com/games/minigiants-io/cover-1584553354815.png?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
                slug: "/game/mini-giants-io",
                linkEmbed: "https://www.crazygames.com/embed/minigiants-io",
            },
        ]
    },
    {
        name: "WarCall.io",
        image: "https://images.crazygames.com/games/warcall-io/cover-1604914734657.png?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
        slug: "/game/war-call-io",
        linkEmbed: "https://www.crazygames.com/embed/warcall-io",
        child: [
            {
                name: "MiniGiants.io",
                image: "https://images.crazygames.com/games/minigiants-io/cover-1584553354815.png?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
                slug: "/game/mini-giants-io",
                linkEmbed: "https://www.crazygames.com/embed/minigiants-io",
            },
            {
                name: "BattleDudes.io",
                image: "https://images.crazygames.com/battledudes-io/20230313173817/battledudes-io-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
                slug: "/game/battle-dudes-io",
                linkEmbed: "https://www.crazygames.com/embed/battledudes-io",
            },
            {
                name: "DEADSHOT.io",
                image: "https://images.crazygames.com/games/deadshot-io/cover_16x9-1694770506842.png?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
                slug: "/game/deadshot-io",
                linkEmbed: "https://www.crazygames.com/embed/deadshot-io",
            },
            {
                name: "Space Wars Battleground",
                image: "https://images.crazygames.com/space-wars-battleground_16x9/20240219044250/space-wars-battleground_16x9-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
                slug: "/game/space-wars-battleground",
                linkEmbed: "https://www.crazygames.com/embed/space-wars-battleground",
            },
        ]
    },
    {
        name: "Diep.io",
        image: "https://images.crazygames.com/diepio/20230629173952/diepio-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
        slug: "/game/diepio",
        linkEmbed: "https://www.crazygames.com/embed/diepio",
        child: [
            {
                name: "Race Clicker: Tap Tap Game",
                image: "https://images.crazygames.com/race-clicker-tap-tap-game_16x9/20240417022511/race-clicker-tap-tap-game_16x9-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
                slug: "/game/race-clicker-tap-tap-game",
                linkEmbed: "https://www.crazygames.com/embed/race-clicker-tap-tap-game",
            },
            {
                name: "Lunar Knight",
                image: "https://images.crazygames.com/lunar-knight_16x9/20240405095616/lunar-knight_16x9-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
                slug: "/game/lunar-knight",
                linkEmbed: "https://www.crazygames.com/embed/lunar-knight",
            },
            {
                name: "Bullet Force",
                image: "https://images.crazygames.com/bullet-force-multiplayer_16x9/20230901083229/bullet-force-multiplayer_16x9-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crophttps://images.crazygames.com/bullet-force-multiplayer_16x9/20230901083229/bullet-force-multiplayer_16x9-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
                slug: "/game/bullet-force-multiplayer",
                linkEmbed: "https://www.crazygames.com/embed/bullet-force-multiplayer",
            },
            {
                name: "Merge & Dig!",
                image: "https://images.crazygames.com/merge-dig_16x9/20240416072418/merge-dig_16x9-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
                slug: "/game/merge-dig",
                linkEmbed: "https://www.crazygames.com/embed/merge-dig",
            },
        ]
    },
    {
        name: "Mergest Kingdom",
        image: "https://images.crazygames.com/mergest-kingdom_16x9/20240411091826/mergest-kingdom_16x9-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
        slug: "/game/mergest-kingdom",
        linkEmbed: "https://www.crazygames.com/embed/mergest-kingdom",
        child: [
            {
                name: "Worms.Zone",
                image: "https://images.crazygames.com/worms-zone_16x9/20231010023858/worms-zone_16x9-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
                slug: "/game/worms-zone",
                linkEmbed: "https://www.crazygames.com/embed/worms-zone",
            },
            {
                name: "Leek Factory Tycoon",
                image: "https://images.crazygames.com/leek-factory-tycoon_16x9/20230928064058/leek-factory-tycoon_16x9-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
                slug: "/game/leek-factory-tycoon",
                linkEmbed: "https://www.crazygames.com/embed/leek-factory-tycoon",
            },
            {
                name: "Night City Racing",
                image: "https://images.crazygames.com/night-city-racing/20230127195620/night-city-racing-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
                slug: "/game/night-city-racing",
                linkEmbed: "https://www.crazygames.com/embed/night-city-racing",
            },
            {
                name: "Merge & Dig!",
                image: "https://images.crazygames.com/merge-dig_16x9/20240416072418/merge-dig_16x9-cover?auto=format%2Ccompress&q=65&cs=strip&ch=DPR&fit=crop",
                slug: "/game/merge-dig",
                linkEmbed: "https://www.crazygames.com/embed/merge-dig",
            },
        ]
    },
]

const StaticGame = () => {
    return (
        <div className={style.container}>
            <StaticData staticData={staticData}></StaticData>
        </div>
    )
}

export default StaticGame