import { IFormInputs, TaskStateEnum, TaskOptionEnum } from 'components/FormTasks/FormTask';

export const dataTasks: IFormInputs[] = [
  {
    id: '01',
    taskName: 'Do That Task',
    assignee: 'Jane Air',
    assignDate: '2022-10-12T16:41:23.110Z', //Date
    deadlineDate: '2022-10-18T16:41:23.110Z',
    description: 'Create Adaptive design of PMA Web App for tablets and all mobile devices',
    taskState: TaskStateEnum.done, // dropdown/select
    taskOption: [TaskOptionEnum.development], // checkbox
    taskSyncronization: false,
    taskImage:
      'https://thumbs.dreamstime.com/b/task-complex-like-puzzle-pictured-as-word-task-puzzle-pieces-to-show-task-can-be-difficult-needs-cooperating-task-164219714.jpg',
  },
  {
    id: '02',
    taskName: 'Do This Task',
    assignee: 'Jane Air',
    assignDate: '2022-10-12T16:41:23.110Z',
    deadlineDate: '2022-10-18T16:41:23.110Z',
    description: 'Create Adaptive design of PMA Web App for tablets and all mobile devices',
    taskState: TaskStateEnum.inProgress,
    taskOption: [TaskOptionEnum.development], // checkbox
    taskSyncronization: false,
    taskImage:
      'https://thumbs.dreamstime.com/b/task-complex-like-puzzle-pictured-as-word-task-puzzle-pieces-to-show-task-can-be-difficult-needs-cooperating-task-164219714.jpg',
  },
  {
    id: '03',
    taskName: 'And one More',
    assignee: 'Jane Air',
    assignDate: '2022-10-12T16:41:23.110Z',
    deadlineDate: '2022-10-18T16:41:23.110Z',
    description: 'Create Adaptive design of PMA Web App for tablets and all mobile devices',
    taskState: TaskStateEnum.buffer,
    taskOption: [TaskOptionEnum.collaborative], // checkbox
    taskSyncronization: false,
    taskImage:
      'https://thumbs.dreamstime.com/b/task-complex-like-puzzle-pictured-as-word-task-puzzle-pieces-to-show-task-can-be-difficult-needs-cooperating-task-164219714.jpg',
  },
  {
    id: '04',
    taskName: 'Do all things',
    assignee: 'Jane Air',
    assignDate: '2022-10-12T16:41:23.110Z',
    deadlineDate: '2022-10-18T16:41:23.110Z',
    description: 'Create Adaptive design of PMA Web App for tablets and all mobile devices',
    taskState: TaskStateEnum.todo,
    taskOption: [TaskOptionEnum.development], // checkbox
    taskSyncronization: false,
    taskImage:
      'https://thumbs.dreamstime.com/b/task-complex-like-puzzle-pictured-as-word-task-puzzle-pieces-to-show-task-can-be-difficult-needs-cooperating-task-164219714.jpg',
  },
  {
    id: '05',
    taskName: 'Layout of Web App',
    assignee: 'Jane Air',
    assignDate: '2022-10-12T16:41:23.110Z',
    deadlineDate: '2022-10-18T16:41:23.110Z',
    description: 'Create Adaptive design of PMA Web App for tablets and all mobile devices',
    taskState: TaskStateEnum.done,
    taskOption: [TaskOptionEnum.collaborative], // checkbox
    taskSyncronization: false,
    taskImage:
      'https://thumbs.dreamstime.com/b/task-complex-like-puzzle-pictured-as-word-task-puzzle-pieces-to-show-task-can-be-difficult-needs-cooperating-task-164219714.jpg',
  },
];
