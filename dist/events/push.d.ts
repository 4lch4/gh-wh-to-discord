import { MessageBuilder } from 'webhook-discord';
import { PushEventData } from '../models/push';
export declare function parse(eventData: PushEventData): MessageBuilder;
