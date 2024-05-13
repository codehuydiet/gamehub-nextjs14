import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import { users } from "./models";
import bcrypt from 'bcryptjs'
import { connectToDb } from "./utils";
import { NextResponse } from "next/server";
import { authConfig } from "./auth.config";
import { redirect } from "next/navigation";

const loginAu = async (credentials) => {
    try {
        connectToDb();
        // console.log(credentials.password);
        const userbyname = await users.findOne({ userName: credentials.EmailOrUserName });
        const userbyemail = await users.findOne({ email: credentials.EmailOrUserName });
        // console.log(userbyname);
        // console.log(userbyemail);
        if (!userbyname) {
            if (!userbyemail) {
                console.log("can not find user");
                throw new Error("Wrong credentials!");
            }
        }
        if (userbyname) {
            console.log(1);
            const isPasswordCorrect = await bcrypt.compare(
                credentials.password,
                userbyname.password
            );
            if (!isPasswordCorrect) {
                console.log("pass not correct");
                throw new Error("Wrong credentials!");
            }
            // console.log("return : ", userbyname);
            return userbyname;
        }
        if (userbyemail) {
            console.log(1);
            const isPasswordCorrect = await bcrypt.compare(
                credentials.password,
                userbyemail.password
            );
            if (!isPasswordCorrect) {
                console.log("pass not correct");
                throw new Error("Wrong credentials!");
            }
            return userbyemail;
        }
        console.log("true all");
    } catch (err) {
        console.log(err);
        throw new Error("Failed to login!");
    }
};

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut
} = NextAuth({
    ...authConfig,
    providers: [

        Google({
            clientId: process.env.GOOGLE_ID ?? "",
            clientSecret: process.env.GOOGLE_SECRET ?? "",
        }),
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        CredentialsProvider({
            async authorize(credentials) {
                // console.log(credentials);
                try {
                    const user = await loginAu(credentials);
                    // console.log(user);
                    return user;
                } catch (err) {
                    return null;
                }
            }
        })],
    callbacks: {
        async signIn({ user, account, profile }) {
            // console.log(user, account, profile);
            if (account.provider === "github") {
                try {
                    connectToDb();
                    const check = await users.findOne({ email: profile.email });
                    // console.log(check);
                    if (!check) {
                        console.log(1);
                        const newUser = new users({
                            userName: profile.login,
                            email: profile.email,
                            isAdmin: false,
                            nation: profile.location,
                        });
                        await newUser.save();
                    }
                } catch (err) {
                    console.log(err);
                    throw new Error("lỗi kết nối database rồi bé ơi")
                }
            }
            return true;
        },
        ...authConfig.callbacks,
    }
})