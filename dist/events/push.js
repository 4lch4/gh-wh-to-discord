"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const webhook_discord_1 = require("webhook-discord");
const defaults_json_1 = __importDefault(require("../utils/defaults.json"));
function parse(eventData) {
    const builder = new webhook_discord_1.MessageBuilder();
    builder.setAuthor(eventData.sender.login, eventData.sender.avatar_url, eventData.sender.html_url)
        .setText(`A commit has been pushed to [${eventData.repository.full_name}](${eventData.repository.html_url})`)
        .setAvatar(defaults_json_1.default.appIconUrl)
        .setURL(defaults_json_1.default.appUrl)
        .setName(`${defaults_json_1.default.appName}-GHWH`)
        .setTitle(eventData.head_commit.message)
        .setDescription(`Head commit was pushed by ${eventData.head_commit.committer.name}`)
        .addField('Commit Count', `${eventData.commits.length}`, true);
    for (let x = 0; x < 5; x++) {
        builder.addField(`Commit ${x} by ${eventData.commits[x].author.username}`, `[${eventData.commits[x].message}](${eventData.commits[x].url})`, true);
    }
    return builder;
}
exports.parse = parse;
