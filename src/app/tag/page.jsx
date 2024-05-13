import style from './tag.module.css'
import TagCard from '@/components/tagcard/tagcard'

const getData = async () => {
    const res = await fetch("http://localhost:3000/api/tag", { cache: 'no-store' });
    // console.log(res);
    if (!res.ok) {
        throw new Error("Somthing went wrong");
    }
    return res.json();
}
const Tag = async () => {
    const tags = await getData();
    // console.log(tags);
    return (
        <div className="w-[100%] h-[calc(100vh)] pt-[1rem] pr-[1rem] pb-[2.25] pl-[1.5rem] ">
            <h1 className="text-[1.5rem] text-[#fff] pl-[1rem] pt[1rem] leading-[1.9375rem] font-[Nunito] font-[1000]">All Tags</h1>
            <div className="z-[0] pt-[1rem] pb-[2.25rem] pl-[1.5rem] pr-[1rem] flex flex-row flex-wrap mt[1rem] justify-center">
                {tags.map((tag) => (
                    <div key={tag._id}>
                        <TagCard tag={tag}></TagCard>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tag