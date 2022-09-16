"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (_, response) => response.status(200).json({
    success: true,
    data: {
        message: 'Hello, world! 👋',
        now: new Date(),
    },
});
