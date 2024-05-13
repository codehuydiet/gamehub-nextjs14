import { cover } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    try {
        connectToDb();
        const covers = await cover.find();
        // console.log(covers);
        // console.log('asdasd');
        return NextResponse.json(covers);
    } catch (err) {
        console.log(err);
        throw new Error("lỗi kết nối rồi bé ơi đây là trong api/tag/router");
    }
}