"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWorld(request, response) {
    var user = CreateUser_1.default({
        email: 'luiz',
        password: '1234',
        techs: [
            'Node',
            'React',
            { title: 'Javascript', experience: 90 }
        ]
    });
    console.log(user.email);
    return response.json({ message: 'Hello World' });
}
exports.helloWorld = helloWorld;
