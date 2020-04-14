import { Ticket } from "../models/ticket";

let todo : Ticket[] = [
    { ticketId: 'KNBAN-0001',title:'Setup Server', issueType: { id: 1, name: 'Task', icon: 'file_copy', color: 'primary'},
      description: 'Write a description', priority: { id: 1,name: 'High',icon: 'arrow_upward', color: 'warn'} },
    { ticketId: 'KNBAN-0002',title:'Database Setup',issueType: { id: 1, name: 'Task', icon: 'file_copy', color: 'primary'},
      description: 'Write a description', priority: { id: 1,name: 'High',icon: 'arrow_upward', color: 'warn'} },
    { ticketId: 'KNBAN-0003',title:'Repository Setup',issueType: { id: 1, name: 'Task', icon: 'file_copy', color: 'primary'},
      description: 'Write a description', priority: { id: 1,name: 'High',icon: 'arrow_upward', color: 'warn'} },
  ];

  let inDev : Ticket[]= [
    { ticketId: 'KNBAN-0004',title:'Login Design Module',issueType: { id: 1, name: 'Task', icon: 'file_copy', color: 'primary'},
      description: 'Write a description', priority: { id: 1,name: 'High',icon: 'arrow_upward', color: 'warn'} },
    { ticketId: 'KNBAN-0005',title:'Support NEHO-00123',issueType: { id: 1, name: 'Task', icon: 'bug_report', color: 'warn'},
      description: 'Write a description', priority: { id: 1,name: 'High',icon: 'arrow_upward', color: 'warn'} },
    { ticketId: 'KNBAN-0006',title:'File Repository',issueType: { id: 1, name: 'Task', icon: 'file_copy', color: 'primary'},
      description: 'Write a description', priority: { id: 1,name: 'High',icon: 'arrow_upward', color: 'warn'} },
  ];

  let inTest : Ticket[]= [
    { ticketId: 'KNBAN-00010',title:'Signup Design Module',issueType: { id: 1, name: 'Task', icon: 'file_copy', color: 'primary'},
      description: 'Write a description', priority: { id: 1,name: 'High',icon: 'arrow_upward', color: 'warn'} },
    { ticketId: 'KNBAN-00011',title:'Refund Planning',issueType: { id: 1, name: 'Task', icon: 'file_copy', color: 'primary'},
      description: 'Write a description', priority: { id: 1,name: 'High',icon: 'arrow_upward', color: 'warn'} },
    { ticketId: 'KNBAN-00012',title:'Regression Testing',issueType: { id: 1, name: 'Task', icon: 'file_copy', color: 'primary'},
      description: 'Write a description', priority: { id: 1,name: 'High',icon: 'arrow_upward', color: 'warn'} },
    { ticketId: 'KNBAN-00013',title:'Support NEHO-0015',issueType: { id: 1, name: 'Task', icon: 'bug_report', color: 'warn'},
      description: 'Write a description', priority: { id: 1,name: 'High',icon: 'arrow_upward', color: 'warn'} },
  ];

  let done : Ticket[]= [
    { ticketId: 'KNBAN-0007',title:'Setup Server',issueType: { id: 1, name: 'Task', icon: 'file_copy', color: 'primary'},
      description: 'Write a description', priority: { id: 1,name: 'High',icon: 'arrow_upward', color: 'warn'} },
    { ticketId: 'KNBAN-0008',title:'Database Setup',issueType: { id: 1, name: 'Task', icon: 'file_copy', color: 'primary'},
      description: 'Write a description', priority: { id: 1,name: 'High',icon: 'arrow_upward', color: 'warn'} },
    { ticketId: 'KNBAN-0009',title:'Repository Setup',issueType: { id: 1, name: 'Task', icon: 'file_copy', color: 'primary'},
      description: 'Write a description', priority: { id: 1,name: 'High',icon: 'arrow_upward', color: 'warn'} },
  ];

export {todo, inDev, inTest,done}