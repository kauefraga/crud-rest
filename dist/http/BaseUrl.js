"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseUrl = void 0;
exports.baseUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3333/v1'
    : 'https://crud-rest.onrender.com/v1';
