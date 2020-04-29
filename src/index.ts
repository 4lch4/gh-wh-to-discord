import { MessageBuilder } from 'webhook-discord';
import { parse as parsePush } from './events/push';

export function parse (req): MessageBuilder {
  switch (req.header('X-GitHub-Event')) {
    case 'push': return parsePush(req.body)

    default: {
      break;
    }
  }
}

