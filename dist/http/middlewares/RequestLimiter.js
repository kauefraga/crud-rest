"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestLimiter = void 0;
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
function limiter(_, response) {
    return response.status(429).json({
        success: false,
        data: {
            error: {
                name: 'Too many requests',
                message: 'Request limit exceeded',
            },
            now: new Date(),
        },
    });
}
exports.RequestLimiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 100,
    handler: limiter,
});
