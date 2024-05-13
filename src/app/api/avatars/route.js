import { avatar } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request) => {
    try {
        connectToDb();
        const avatars = await avatar.find();
        // console.log(avatars);
        // console.log('asdasd');
        return NextResponse.json(avatars);
    } catch (err) {
        console.log(err);
        throw new Error("lỗi kết nối rồi bé ơi đây là trong api/tag/router");
    }
}