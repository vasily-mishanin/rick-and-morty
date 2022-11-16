import { screen, render } from '@testing-library/react';
import Card from './Card';
import { IFormInputs, TaskStateEnum, TaskOptionEnum } from 'components/FormTasks/FormTask';

describe('Card component', () => {
  const taskCardObj: IFormInputs = {
    id: new Date().toISOString(),
    taskName: 'Test Name',
    assignee: 'Test Assignee',
    assignDate: 'Today',
    deadlineDate: 'Yesterday',
    description: "Do what I don't know",
    taskState: TaskStateEnum.none,
    taskOption: [TaskOptionEnum.development],
    taskSyncronization: false,
    taskImage: 'someURL',
  };

  test('render a Card info', () => {
    render(<Card cardData={taskCardObj} />);
    const infoParagraph = screen.getByText('Assignee', { exact: false });
    expect(infoParagraph).toBeInTheDocument();
  });
});
