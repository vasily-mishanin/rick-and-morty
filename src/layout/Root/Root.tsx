import Footer from 'components/Footer/Footer';
import { Link, Outlet } from 'react-router-dom';
import MainNavigation from '../MainNavigation/MainNavigation';
import classes from './Root.module.css';

function Root() {
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <header className={classes.header}>
          <Link to="/">Project Management App</Link>
          <MainNavigation />
        </header>
        <main className={classes.main}>
          <div className={classes.outlet}>
            <Outlet />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Root;
