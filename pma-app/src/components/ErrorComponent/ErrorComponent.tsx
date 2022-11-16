import classes from './ErrorComponent.module.css';

function ErrorComponent(props: { message: string }) {
  return (
    <div className={classes['error']}>
      <h4> Bad request, no such names in the series</h4>
      <p>{props.message}</p>
    </div>
  );
}

export default ErrorComponent;
