import classes from './Pagination.module.css';
import { useNavigate, useParams } from 'react-router-dom';

type PaginationProps = {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
};

function Pagination({ totalItems, itemsPerPage, currentPage }: PaginationProps) {
  const navigate = useNavigate();
  const params = useParams();

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pages: number[] = Array.from(Array(totalPages).fill(1), (el, i) => el + i);
  const MAX_PAGES_BADGES = 7;

  const classForPageBtn = (page: number) => {
    return page === currentPage
      ? `${classes['pageBtn']} ${classes['currentPage']}`
      : classes['pageBtn'];
  };

  return (
    <div className={classes.pagination}>
      <button
        className={classes.controlBtnLeft}
        onClick={() => navigate(`/rick-and-morty/${currentPage - 1}`)}
        disabled={currentPage === 1}
      ></button>
      <ul className={classes.list}>
        {pages.map((page) => {
          if (page <= MAX_PAGES_BADGES) {
            return (
              <li key={page} className={classes.item}>
                <button
                  className={classForPageBtn(page)}
                  onClick={() => navigate(`/rick-and-morty/${page}`)}
                >
                  {page}
                </button>
              </li>
            );
          }
          if (page > MAX_PAGES_BADGES && Number(params.page) === page && page !== pages.at(-1)) {
            return (
              <li key={page} className={classes.item}>
                <span style={{ paddingRight: '1rem' }}>...</span>
                <button
                  className={classForPageBtn(page)}
                  onClick={() => navigate(`/rick-and-morty/${page}`)}
                >
                  {page}
                </button>
              </li>
            );
          }

          if (page === pages.at(-1)) {
            return (
              <li key={page} className={classes.item}>
                <span style={{ paddingRight: '1rem' }}>...</span>
                <button
                  className={classForPageBtn(page)}
                  onClick={() => navigate(`/rick-and-morty/${page}`)}
                >
                  {page}
                </button>
              </li>
            );
          }
        })}
      </ul>
      <button
        className={classes.controlBtnRight}
        onClick={() => navigate(`/rick-and-morty/${currentPage + 1}`)}
        disabled={!(currentPage < totalPages)}
      ></button>
    </div>
  );
}

export default Pagination;
