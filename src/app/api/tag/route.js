import { tags } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    try {
        connectToDb();
        const tag = await tags.find();
        // console.log(tag);
        // console.log('asdasd');
        return NextResponse.json(tag);
    } catch (err) {
        console.log(err);
        throw new Error("lỗi kết nối rồi bé ơi đây là trong api/tag/router");
    }
}