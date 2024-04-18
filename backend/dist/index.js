"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const signupData = req.body;
    const Data = yield db_1.default.userModel.create({
        username: signupData.username,
        password: signupData.password,
        firstname: signupData.firstname,
        lastname: signupData.lastname
    });
    res.json({
        msg: 'success',
        data: Data
    });
}));
app.get('/allUsers', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allUserData = yield db_1.default.userModel.find();
    res.status(200).json({
        msg: 'success',
        data: allUserData
    });
}));
app.post('/messages', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    yield db_1.default.messageModel.create({
        sender: req.body.sender,
        receiver: req.body.receiver,
        userMsg: req.body.userMsg,
        time: req.body.time
    });
}));
app.post('/getMsgs', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userMsgs = yield db_1.default.messageModel.find({
        sender: req.body.sender,
        receiver: req.body.receiver
    });
    res.json({
        msg: 'success',
        data: userMsgs
    });
}));
app.post('/signIn', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const signInData = req.body;
    const signInStatus = yield db_1.default.userModel.find({
        username: signInData.username,
        password: signInData.password
    });
    if (signInStatus.length !== 1) {
        res.status(403).json({
            status: "wrong inputs"
        });
        return;
    }
    res.status(200).json({
        msg: 'success'
    });
}));
app.listen(3000);
