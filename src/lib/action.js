"use server"

import { revalidatePath, unstable_noStore } from "next/cache";
import { signIn, signOut } from "./auth";
import { avatar, cover, games, gametag, like, recent, tags, users } from "./models";
import { connectToDb } from "./utils";
import bcrypt from 'bcryptjs'
import { NextResponse } from "next/server";
import { redirect } from "next/dist/server/api-utils";

let visible = true;

export const Visible = () => {
    // console.log(visible);
    return visible;
}

export const isNavbarOn = async () => {
    visible = !visible
    // console.log(visible);
}

export const register = async (formData) => {
    const { userName, password, passwordRepeat, email, nation } = Object.fromEntries(formData);
    console.log(userName, password, passwordRepeat, email, nation);

    if (password !== passwordRepeat) {
        console.log("passwords do not match");
        return;
    }

    try {
        connectToDb();
        const user = await users.findOne({ email: email });
        if (user) {
            if (user.userName === userName) {
                console.log("Username is already in use!");
                return;
            }
            if (user.email === email) {
                console.log("This email is already registered!");
                return;
            }
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const newUser = users({
            userName: userName,
            password: hashPassword,
            email: email,
            nation: nation,
        });
        console.log(newUser);
        await newUser.save();
        return { success: true };
    } catch (error) {
        console.log(error);
        throw new Error("Registration error!");
    }
};

export const handleGooglLogin = async () => {
    await signIn("google");
}

export const handlegithubLogin = async () => {
    await signIn("github");
}

export const handleLogout = async () => {
    await signOut();
    redirect("/");
}

export const login = async (prevState, formData) => {
    const { EmailOrUserName, password } = Object.fromEntries(formData);
    // console.log(EmailOrUserName, password);
    try {
        const result = await signIn("credentials", { redirect: true, EmailOrUserName, password });
        // console.log(result);
    } catch (err) {
        console.log(err);

        if (err.message.includes("CredentialsSignin")) {
            return { error: "Invalid username or password" };
        }
        throw err;
    }
};

export const findUser = async (email) => {
    // console.log(EmailOrUserName, password);
    console.log(email);
    try {
        const result = await users.findOne({ email: email });
        console.log(result);
        return result;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

export const deleteUser = async (formData) => {
    // console.log("form data: ", formData);
    const id = formData.get('action');
    try {
        connectToDb();
        await recent.deleteMany({ idUser: id });
        await users.findByIdAndDelete(id);
        console.log("deleted from db");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
}

export const deleteGame = async (formData) => {
    // console.log("form data: ", formData);
    const id = formData.get('action');
    try {
        connectToDb();
        await like.deleteMany({ idGame: id });
        await recent.deleteMany({ idGame: id });
        await gametag.deleteMany({ idGame: id });
        await games.findByIdAndDelete(id);
        console.log("deleted from db");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
}

export const deleteTag = async (formData) => {
    // console.log("form data: ", formData);
    const id = formData.get('action');
    try {
        connectToDb();
        await gametag.deleteMany({ idGame: id });
        await tags.findByIdAndDelete(id);
        console.log("deleted from db");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
}

export const deleteAvatar = async (formData) => {
    // console.log("form data: ", formData);
    const id = formData.get('action');
    try {
        connectToDb();
        await gametag.deleteMany({ idGame: id });
        await tags.findByIdAndDelete(id);
        console.log("deleted from db");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
}

export const deleteCover = async (formData) => {
    // console.log("form data: ", formData);
    const id = formData.get('action');
    try {
        connectToDb();
        await gametag.deleteMany({ idGame: id });
        await tags.findByIdAndDelete(id);
        console.log("deleted from db");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
}

export const createUser = async (formData) => {
    const { userName, email, password, nation, isAdmin } = Object.fromEntries(formData);
    console.log(userName, email, password, nation, isAdmin);
    try {
        connectToDb();
        const userEmail = await users.findOne({ email: email });
        const username = await users.findOne({ userName: userName });
        if (userEmail) {
            console.log("email is already in use!");
            return;
        }
        if (username) {
            console.log("userName is already in use!");
            return;
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const newUser = users({
            userName: userName,
            password: hashPassword,
            email: email,
            nation: nation,
            isAdmin: isAdmin,
        });
        console.log(newUser);
        await newUser.save();
        revalidatePath("/admin");
        return { success: true };
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
}

export const createTag = async (formData) => {
    const { image, path, tagName } = Object.fromEntries(formData);
    console.log(image, path, tagName);
    try {
        connectToDb();
        const tagPath = await tags.findOne({ path: path });
        const tagImg = await tags.findOne({ image: image });
        const TagName = await tags.findOne({ tagName: tagName });
        if (tagPath) {
            console.log("path is already in use!");
            return;
        }
        if (tagImg) {
            console.log("img is already in use!");
            return;
        }
        if (TagName) {
            console.log("tag name is already in use!");
            return;
        }
        const newTag = tags({
            tagName: tagName,
            path: path,
            image: image,
        });
        console.log(newTag);
        await newTag.save();
        revalidatePath("/admin");
        return { success: true };
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
}

export const createGame = async (formData) => {
    const { name, embed, technology, platforms, img, path } = Object.fromEntries(formData);
    console.log(name, embed, technology, platforms, img, path);
    try {
        connectToDb();
        const path1 = "/game/" + path;
        const gameName = await games.findOne({ name: name });
        const gameEmbed = await games.findOne({ embed: embed });
        const gameImg = await games.findOne({ img: img });
        const gamePath = await games.findOne({ path: path1 });
        if (gamePath) {
            console.log("path is already in use!");
            return;
        }
        if (gameImg) {
            console.log("img is already in use!");
            return;
        }
        if (gameName) {
            console.log("game name is already in use!");
            return;
        }
        if (gameEmbed) {
            console.log("embed name is already in use!");
            return;
        }
        const newGame = games({
            name: name,
            embed: embed,
            technology: technology,
            platforms: platforms,
            img: img,
            path: path1,
        });
        console.log(newGame);
        await newGame.save();
        revalidatePath("/admin");
        return { success: true };
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
}

export const createAvatar = async (formData) => {
    const { img } = Object.fromEntries(formData);
    console.log(img);
    try {
        connectToDb();
        const avatarImg = await avatar.findOne({ img: img });
        if (avatarImg) {
            console.log("img is already in use!");
            return;
        }
        const newAvatar = avatar({
            img: img,
        });
        console.log(newAvatar);
        await newAvatar.save();
        revalidatePath("/admin");
        return { success: true };
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
}

export const createCover = async (formData) => {
    const { img } = Object.fromEntries(formData);
    console.log(img);
    try {
        connectToDb();
        const coverImg = await cover.findOne({ img: img });
        if (coverImg) {
            console.log("img is already in use!");
            return;
        }
        const newCover = cover({
            img: img,
        });
        console.log(newCover);
        await newCover.save();
        revalidatePath("/admin");
        return { success: true };
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
}

export const getUser = async (email) => {
    // console.log(email);
    try {
        connectToDb();
        const tag = await users.findOne({ email: email });
        return tag;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch user!");
    }
};

export const getAvatar = async (id) => {
    // console.log(email);
    try {
        connectToDb();
        const Avatar = await avatar.findById(id);
        console.log(Avatar.img);
        return Avatar.img;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch user!");
    }
};

export const getCover = async (id) => {
    // console.log(email);
    try {
        connectToDb();
        const Cover = await cover.findById(id);
        // console.log(Cover.img);
        return Cover.img;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch user!");
    }
};

export const recentPlayed = async (slug, idUser) => {
    console.log(slug);
    console.log(idUser);
    if (idUser) {
        slug = "/game/" + slug;
        console.log(slug);
        try {
            connectToDb();
            const game = await games.findOne({ path: slug });
            console.log(game.id);
            const user = await users.findById(idUser);
            console.log(user.id);
            const update = {
                $inc: { NPlayed: 1 },
            };
            const options = {
                new: true,
                upsert: true,
            };
            const updatedRecent = await recent.findOneAndUpdate(
                { idUser: user.id, idGame: game.id },
                update,
                options
            );
            console.log(updatedRecent);
        } catch (err) {
            console.log(err);
            throw new Error("lỗi kết nối rồi bé ơi đây là trong api/tag/router");
        }
    }
    return;
}