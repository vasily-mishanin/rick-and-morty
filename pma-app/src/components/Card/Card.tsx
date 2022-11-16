import classes from './Card.module.css';
import DefaultTaskImage from '../../images/task-puzzle.jpeg';
import { IFormInputs, TaskOptionEnum } from 'components/FormTasks/FormTask';
interface CardProps {
  cardData: IFormInputs;
}

function Card(props: CardProps) {
  const {
    taskName,
    assignee,
    assignDate,
    deadlineDate,
    description,
    taskState,
    taskSyncronization,
    taskImage,
    taskOption,
  } = props.cardData;

  return (
    <article className={classes.card}>
      <h2 className={classes.card_taskTitle}>{taskName}</h2>
      <div className={classes.card__imgWrapper}>
        <img className={classes.card__img} src={taskImage ? taskImage : DefaultTaskImage}></img>
      </div>
      <div className={classes.card__assignee}>
        <p>
          Assignee: <b>{assignee}</b>
        </p>
      </div>

      <div>
        <p>
          {' '}
          Assignment date: <b>{assignDate}</b>
        </p>
        <p>
          {' '}
          Deadline: <b>{deadlineDate}</b>
        </p>
      </div>

      <div>
        <p>
          Descripion: <b>{description}</b>
        </p>
      </div>

      <div>
        <p>
          State: <b>{taskState}</b>
        </p>
      </div>

      <div className={classes.card__options}>
        <p>Options:</p>

        {taskOption && taskOption?.includes(TaskOptionEnum.development) && (
          <span className={classes.card__option}>development</span>
        )}

        {taskOption && taskOption?.includes(TaskOptionEnum.management) && (
          <span className={classes.card__option}>management</span>
        )}

        {taskOption && taskOption?.includes(TaskOptionEnum.collaborative) && (
          <span className={classes.card__option}>collaborative </span>
        )}
      </div>

      <div>
        <p>
          {' '}
          Task syncronization: <b> {taskSyncronization}</b>
        </p>
      </div>
    </article>
  );
}

export default Card;
