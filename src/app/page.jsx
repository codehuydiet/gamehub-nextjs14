import style from './home.module.css'

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.staticGame}>
        {/* <StaticGame></StaticGame> */}
      </div>
      <div className={style.contentContainer}>
        {/* <ListGame /> */}
      </div>
    </div >
  );
}

export default Home
