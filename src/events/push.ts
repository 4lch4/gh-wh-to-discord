import { MessageBuilder } from 'webhook-discord';
import { PushEventData } from '../models/push';
import defaults from '../utils/defaults.json';

export function parse (eventData: PushEventData): MessageBuilder {
  const builder = new MessageBuilder()
  builder.setAuthor(eventData.sender.login, eventData.sender.avatar_url, eventData.sender.html_url)
    .setText(`A commit has been pushed to [${eventData.repository.full_name}](${eventData.repository.html_url})`)
    .setAvatar(defaults.appIconUrl)
    .setURL(defaults.appUrl)
    .setName(`${defaults.appName}-GHWH`)
    .setTitle(eventData.head_commit.message)
    .setDescription(`Head commit was pushed by ${eventData.head_commit.committer.name}`)
    .addField('Commit Count', `${eventData.commits.length}`, true)

  for (let x = 0; x < 5; x++) {
    builder.addField(
      `Commit ${x} by ${eventData.commits[x].author.username}`, 
      `[${eventData.commits[x].message}](${eventData.commits[x].url})`, 
      true
    )
  }

  return builder
}
