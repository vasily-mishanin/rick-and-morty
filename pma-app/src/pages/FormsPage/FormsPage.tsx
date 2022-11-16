import CardsList from 'components/CardsList/CardsList';
import FormTask from 'components/FormTasks/FormTask';
import { useState } from 'react';
import classes from './FormsPage.module.css';
import { IFormInputs } from 'components/FormTasks/FormTask';

function FormsPage() {
  const [tasksCards, setTasksCards] = useState<IFormInputs[]>([]);
  console.log('tasksCards', tasksCards);

  const getTaskDataFromTheFormAndPushIntoCards = (taskCardFormData: IFormInputs) => {
    taskCardFormData.id = new Date().toISOString();
    console.log('getDataFromTheFormAndPushIntoCards', taskCardFormData);
    setTasksCards((prevTaskCards) => [...prevTaskCards, ...[taskCardFormData]]);
  };

  return (
    <div className={classes['form-page']}>
      <h2 className={classes['form-heading']}>Add New Task Features</h2>
      <FormTask afterSubmitHandler={getTaskDataFromTheFormAndPushIntoCards} />
      <CardsList cards={tasksCards} showSearchBar={true} />
    </div>
  );
}

export default FormsPage;
