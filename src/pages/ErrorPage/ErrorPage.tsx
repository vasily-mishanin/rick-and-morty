import { useRouteError } from 'react-router-dom';
import { CloudIcon } from '@heroicons/react/24/solid';
import classes from './ErrorPage.module.css';

interface RouteError {
  statusText: string;
  message: string;
}

function ErrorPage() {
  const error = useRouteError() as RouteError;

  if (!error) {
    return null;
  }

  return (
    <div className={classes['error-page']}>
      <h2> Page is Not Found ot something else ¯\_(ツ)_/¯</h2>
      <CloudIcon className={classes['icon']} />
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
