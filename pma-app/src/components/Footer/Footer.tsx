import classes from './Footer.module.css';

function Footer() {
  return (
    <footer>
      <div className={classes.footer}>
        {' '}
        <div>
          <a href="https://rs.school/">
            <img
              className={classes.footer__logo}
              src="https://rs.school/images/rs_school.svg"
              alt="RSS Logo"
            />
          </a>
        </div>
        <div>
          {' '}
          <a href="https://github.com/vasily-mishanin">
            <img
              className={classes['footer__logo-github']}
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="Github Logo"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
