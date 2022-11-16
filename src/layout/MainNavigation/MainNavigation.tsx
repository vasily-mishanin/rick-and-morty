import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <ul className={classes.mainNav}>
      <li>
        {' '}
        <NavLink to="about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="cards">Cards</NavLink>
      </li>
      <li>
        <NavLink to="forms">Forms</NavLink>
      </li>
      <li>
        <NavLink to="rick-and-morty/1">API</NavLink>
      </li>
    </ul>
  );
}

export default MainNavigation;
