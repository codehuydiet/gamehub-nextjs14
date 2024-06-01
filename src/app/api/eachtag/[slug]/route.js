import { tags } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    let { slug } = params;
    slug = "/tag/" + slug;
    // console.log(slug);
    try {
        connectToDb();
        const tag = await tags.findOne({ path: slug });
        // console.log(tag.id)
        if (!tag) throw new Error('Không tìm thấy Tag');
        return NextResponse.json(tag);
    } catch (err) {
        console.log(err);
        throw new Error("lỗi kết nối rồi bé ơi đây là trong api/eachtag/[slug]");
    }
};