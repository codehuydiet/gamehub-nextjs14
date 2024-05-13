import style from './slugTag.module.css';
import ItemGame from '@/components/itemgame/itemGame';

const getTitle = async (slug) => {
    // console.log(slug);
    const res = await fetch(`http://localhost:3000/api/eachtag/${slug}`, { cache: 'no-store' });
    // console.log(res);
    if (!res.ok) {
        throw new Error("Somthing went wrong");
    }
    return res.json();
}

const SlugPage = async ({ params }) => {
    const { slug } = params;
    const title = await getTitle(slug);
    // console.log(title.tagName);
    // console.log(slug);
    return (
        <div className={style.container}>
            <div className={style.labelContainer}>
                {title.tagName}
            </div>
            <div>
                <ItemGame slug={slug}></ItemGame>
            </div>
        </div>
    )
}

export default SlugPage