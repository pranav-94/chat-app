"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect('mongodb://localhost:27017/chatApp_v1');
const userSchema = new mongoose_1.default.Schema({
    username: String,
    password: String,
    firstname: String,
    lastname: String
});
const messageSchema = new mongoose_1.default.Schema({
    sender: String,
    receiver: String,
    userMsg: String,
    time: String,
    timeStamp: Number
});
const userModel = mongoose_1.default.model('userData', userSchema);
const messageModel = mongoose_1.default.model('messageData', messageSchema);
exports.default = { userModel, messageModel };
