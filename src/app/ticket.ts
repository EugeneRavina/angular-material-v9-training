
export interface Priority {
    id: number;
    name: string;
    icon: string;
    color: string;
  }
  
  export interface IssueType {
    id: number;
    name: string;
    icon: string;
    color: string;
  }
  
export interface Ticket {
    ticketId : string;
    title: string;
    description?: string;
    estimateHours?: number;
    issueType?: IssueType;
    priority?: Priority;
}
