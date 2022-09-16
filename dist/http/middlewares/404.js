"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFound = void 0;
const BaseUrl_1 = require("../BaseUrl");
function NotFound(_, response) {
    return response.status(404).json({
        success: false,
        data: {
            error: {
                name: 'Not Found',
                message: 'The requested URL is not available.',
            },
            message: `Try ${BaseUrl_1.baseUrl} instead.`,
            now: new Date(),
        },
    });
}
exports.NotFound = NotFound;
