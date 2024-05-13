import { gametag, tags } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

const getId = async (params) => {
    console.log(params);
    try {
        connectToDb();
        const tag = await tags.findOne({ path: params });
        // console.log(tag.id)
        if (!tag) throw new Error('Không tìm thấy Tag');
        return tag.id;
    } catch (err) {
        console.log(err);
        throw new Error("lỗi kết nối rồi bé ơi đây là trong api/tag/router");
    }
};

export const GET = async (request, { params }) => {
    let { slug } = params;
    slug = "/tag/" + slug;
    try {
        const id = await getId(slug);
        // console.log(id);

        connectToDb();
        const tagData = await gametag.find({ idTag: id });
        console.log(tagData);
        return NextResponse.json(tagData);
    } catch (err) {
        console.log(err);
        throw new Error("lỗi kết nối rồi bé ơi đây là trong api/tag/router");
    }
};
