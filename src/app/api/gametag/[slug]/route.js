import { games, gametag, tags } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

const getId = async (params) => {
    // console.log(params);
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

const getGames = async (params) => {
    // console.log(params);
    try {
        const id = await getId(params);
        // console.log(id);

        connectToDb();
        const tagData = await gametag.find({ idTag: id });
        // console.log(tagData);
        let data = [];
        for (let i = 0; i < tagData.length; i++) {
            data[i] = tagData[i];
        }
        // console.log(data[0].id);
        return data;
    } catch (err) {
        console.log(err);
        throw new Error("lỗi kết nối rồi bé ơi đây là trong api/tag/router");
    }
};

const getGame = async (idGame) => {
    // console.log(idGame);
    try {

        connectToDb();
        const game = await games.findById(idGame);
        // console.log(game.name);
        return game;
    } catch (err) {
        console.log(err);
        throw new Error("lỗi kết nối rồi bé ơi đây là trong api/tag/router");
    }
};

export const GET = async (request, { params }) => {
    let { slug } = params;
    slug = "/tag/" + slug;
    // console.log(slug);
    try {
        const data = await getGames(slug);
        // console.log(data[5].idGame);
        const result = []
        for (let i = 0; i < data.length; i++) {
            const game = await getGame(data[i].idGame);
            result.push(game);
        }
        // console.log(result);
        return NextResponse.json(result);
    } catch (err) {
        console.log(err);
        throw new Error("lỗi kết nối rồi bé ơi đây là trong api/tag/router");
    }
};
