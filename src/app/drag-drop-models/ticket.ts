import { IssueType } from './issue-type';
import { Priority } from './priority';

export class Ticket {
  ticketId : string;
  title: string;
  description?: string;
  estimateHours?: number;
  issueType?: IssueType;
  priority?: Priority;
}
