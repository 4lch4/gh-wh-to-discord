"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const push_1 = require("./events/push");
function parse(req) {
    switch (req.header('X-GitHub-Event')) {
        case 'push': return push_1.parse(req.body);
        default: {
            break;
        }
    }
}
exports.parse = parse;
