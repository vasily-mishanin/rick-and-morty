import { render, screen, within } from '@testing-library/react';
import FormTask from './FormTask';
import { IFormInputs, TaskStateEnum } from 'components/FormTasks/FormTask';

const fileInputHandler = (file: File, fileDataURL: string) => {
  const profileImageFile = file;
  const profileImageFileDataURL = fileDataURL;
  console.log('profileImageFile', profileImageFile);
  console.log('profileImageFileDataURL', profileImageFileDataURL);
};

const getTaskDataFromTheFormAndPushIntoCards = (taskCardFormData: IFormInputs) => {
  console.log('getDataFromTheFormAndPushIntoCards', taskCardFormData);
};

describe('CardsList component', () => {
  test('renders a TaskForm', () => {
    render(<FormTask afterSubmitHandler={getTaskDataFromTheFormAndPushIntoCards} />);
    const submitBtn = screen.findByText('Submit');
    expect(submitBtn).toBeInTheDocument;
  });
});
