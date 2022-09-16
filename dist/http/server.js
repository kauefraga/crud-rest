"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = __importDefault(require("./app"));
function bootServer(port) {
    return app_1.default.listen(port, () => {
        console.log(`[server] running on port http://localhost:${port}/v1`);
    });
}
const PORT = process.env.PORT || 3333;
bootServer(PORT);
