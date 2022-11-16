import Switcher from 'components/Switcher/Switcher';
import React, { useEffect, useState } from 'react';
import classes from './FormTask.module.css';
import FileInput from 'components/FileInput/FileInput';
import Modal from '../../components/Modal/Modal';
import { useForm, SubmitHandler, FieldError } from 'react-hook-form';

export enum TaskStateEnum {
  none = 'none',
  buffer = 'buffer',
  todo = 'todo',
  inProgress = 'inProgress',
  done = 'done',
}

export enum TaskOptionEnum {
  development = 'development',
  management = 'management',
  collaborative = 'collaborative',
}

export type IFormInputs = {
  id: string;
  taskName: string;
  assignee: string;
  assignDate: string;
  deadlineDate: string;
  description: string;
  taskState: TaskStateEnum;
  taskOption?: TaskOptionEnum[];
  taskSyncronization: boolean;
  taskImage?: string;
};

interface IFormTaskProps {
  afterSubmitHandler: (data: IFormInputs) => void;
}

function FormTask(props: IFormTaskProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid, isSubmitted, isSubmitSuccessful },
  } = useForm<IFormInputs>({ mode: 'onChange' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  //let profileImageFile: File;
  let profileImageFileDataURL = '';
  let taskSync = false;

  useEffect(() => {
    //reset();
  }, [isSubmitSuccessful]);

  const taskSyncToggleHandler = (checked: boolean) => {
    taskSync = checked;
  };

  const fileInputHandler = (file: File, fileDataURL: string) => {
    console.log('fileInputHandler');
    console.log('file', file);
    //profileImageFile = file;
    profileImageFileDataURL = fileDataURL;
  };

  const validateDescription = (inputValue: string) => inputValue.trim().split(' ').length > 2;

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    data.taskImage = profileImageFileDataURL;
    data.taskSyncronization = taskSync;
    console.log('onSubmit', isValid, data);
    props.afterSubmitHandler(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    reset();
  };

  const errorsClasses = (error: FieldError | undefined) => {
    const errorClass = `${classes['taskform__val-err-msg']} ${error ? classes['shown'] : ''}`;
    console.log(errorClass);
    return errorClass;
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p>Task data was successfully saved</p>
      </Modal>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={classes.taskform}
        //onInput={handleFormInput}
      >
        <div className={classes.taskform__assign}>
          <label htmlFor="taskName">
            Title:
            <input
              {...register('taskName', { required: true })}
              id="taskName"
              type="text"
              onInput={() => {}}
            />
          </label>

          <p className={errorsClasses(errors.taskName)} id="taskName_ErrMsg">
            A task should have title
          </p>

          <label htmlFor="assignee">
            Assignee:
            <input
              {...register('assignee', { required: true })}
              id="assignee"
              type="text"
              onInput={() => {}}
            />
          </label>
          <p className={errorsClasses(errors.assignee)} id="assignee_ErrMsg">
            A task should have assignee
          </p>
        </div>

        <div className={classes.taskform__dates}>
          <div className={classes['taskform__date']}>
            <label htmlFor="assignDate">
              Assign Date:
              <input
                {...register('assignDate', { required: true })}
                id="assignDate"
                type="date"
                onInput={() => {}}
              />
            </label>
            <p className={errorsClasses(errors.assignDate)} id="assignDate_ErrMsg">
              Assign date is required
            </p>
          </div>

          <div className={classes['taskform__date']}>
            <label htmlFor="deadlineDate">
              Deadline Date:
              <input
                {...register('deadlineDate', { required: true })}
                id="deadlineDate"
                type="date"
                onInput={() => {}}
              />
            </label>
            <p className={errorsClasses(errors.assignDate)} id="deadlineDate_ErrMsg">
              Deadline date is required
            </p>
          </div>
        </div>

        <div className={classes.taskform__description}>
          <p> Description (three or more words):</p>
          <textarea
            {...register('description', { required: true, validate: validateDescription })}
            id="description"
            cols={40}
            rows={5}
            onInput={() => {}}
          ></textarea>
          <p className={errorsClasses(errors.description)} id="description_ErrMsg">
            Description should be at lest three words in length
          </p>
        </div>
        <div className={classes.taskform__taskstate}>
          <label htmlFor="taskState">
            {' '}
            Task state:
            <select
              {...register('taskState', { required: true, validate: (value) => value !== 'none' })}
              id="taskState"
              onInput={() => {}}
            >
              <option value="none">None</option>
              <option value="buffer">Buffer</option>
              <option value="todo">To Do</option>
              <option value="inProgress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </label>
          <p className={errorsClasses(errors.taskState)} id="taskState_ErrMsg">
            The status shouldn&rsquo;t be &lsquo;None&lsquo;
          </p>
        </div>
        <div className={classes.taskform__options}>
          <fieldset className={classes.taskform__optionsFieldset}>
            <legend>
              Task Options (<u>optional</u>){' '}
            </legend>
            <label htmlFor="development">
              {' '}
              Development:
              <input
                {...register('taskOption')}
                value="development"
                id="development"
                type="checkbox"
              />{' '}
            </label>
            <label htmlFor="management">
              {' '}
              Management:
              <input
                {...register('taskOption')}
                value="management"
                id="management"
                type="checkbox"
              />{' '}
            </label>
            <label htmlFor="collaborative">
              {' '}
              Collaborative:
              <input
                {...register('taskOption')}
                value="collaborative"
                id="collaborative"
                type="checkbox"
              />{' '}
            </label>
          </fieldset>
        </div>
        <Switcher name="Task Syncronization" id="toggleSync" onToggle={taskSyncToggleHandler} />
        <FileInput name="taksImageInput" id="taksImageInput" onFileInput={fileInputHandler} />
        <div className={classes.taskform__submit}>
          <button type="submit" disabled={!isDirty || (isDirty && !isValid && isSubmitted)}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default FormTask;
