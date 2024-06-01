import mongoose, { Types } from "mongoose";


const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50,
    },
    password: {
        type: String,
    },
    nation: {
        type: String,
        default: "none",
    },
    NGamePlayed: {
        type: Number,
        default: 0,
    },
    NGameLiked: {
        type: Number,
        default: 0,
    },
    NGameFavorited: {
        type: Number,
        default: 0,
    },
    idAvatar: {
        type: String,
        default: "663dffe9a3e16d327db80d19",
    },
    idCover: {
        type: String,
        default: "663dffefa3e16d327db80d8a",
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });
const tagSchema = new mongoose.Schema({
    tagName: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    }
}, { timestamps: true });
const gameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true,
    },
    embed: {
        type: String,
        required: true,
    },
    like: {
        type: Number,
        default: 0,
    },
    dislike: {
        type: Number,
        default: 0,
    },
    star: {
        type: Number,
        default: 0,
    },
    votes: {
        type: Number,
        default: 0,
    },
    img: {
        type: String,
    },
    technology: {
        type: String,
    },
    platforms: {
        type: String,
    }
}, { timestamps: true });
const avatarSchema = new mongoose.Schema({
    img: {
        type: String,
        required: true,
    }
}, { timestamps: true });
const coverSchema = new mongoose.Schema({
    img: {
        type: String,
        required: true,
    }
}, { timestamps: true });
const likeSchema = new mongoose.Schema({
    idUser: {
        type: String,
    },
    idGame: {
        type: String,
    },
    isLike: {
        type: Boolean,
        default: false,
    },
    isDisLike: {
        type: Boolean,
        default: false,
    },
    isFavorite: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });
const recentSchema = new mongoose.Schema({
    idUser: {
        type: String,
    },
    idGame: {
        type: String,
    },
    NPlayed: {
        type: Number,
    }
}, { timestamps: true });
const gametagSchema = new mongoose.Schema({
    idTag: {
        type: String,
        required: true,
    },
    idGame: {
        type: String,
        required: true,
    }
}, { timestamps: true });

export const users = mongoose.models?.users || mongoose.model("users", userSchema);
export const tags = mongoose.models?.tags || mongoose.model("tags", tagSchema);
export const games = mongoose.models?.games || mongoose.model("games", gameSchema);
export const avatar = mongoose.models?.avatar || mongoose.model("avatar", avatarSchema);
export const cover = mongoose.models?.cover || mongoose.model("cover", coverSchema);
export const like = mongoose.models?.like || mongoose.model("like", likeSchema);
export const recent = mongoose.models?.recent || mongoose.model("recent", recentSchema);
export const gametag = mongoose.models?.gametag || mongoose.model("gametag", gametagSchema);