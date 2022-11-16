import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import classes from './DetailsPage.module.css';
import type { RickAndMortyCharacter } from 'model/types';
import { useAppDispatch, useAppSelector } from '../../store-redux/hooks';

function DetailsPage() {
  const navigate = useNavigate();

  const params = useParams();
  const characters = useAppSelector((state) => state.characters.characters.results);

  const character = characters.find(
    (char) => char.id === Number(params.id)
  ) as RickAndMortyCharacter;

  const { image, name, species, gender, status, origin, location, episode, created } = character;

  let episodesNumbers: string[] = [];
  if (episode.length > 0) {
    episodesNumbers = episode.map((episodeURL: string) => {
      const url = new URL(episodeURL);
      return url.pathname.split('/').at(-1) as string;
    });
  }

  const dateCreated = new Date(created);

  return (
    <div className={classes['details']}>
      <header>
        <button
          className={classes.backBtn}
          onClick={() => {
            navigate(-1); // add page
          }}
        >
          Back
        </button>
        <p>
          Page: <span className={classes.badge}> {params.page}</span>
        </p>
        <p>
          Character&apos;s Id:<span className={classes.badge}> {params.id}</span>
        </p>
      </header>
      <figure className={classes['details-figure']}>
        <img className={classes['details-image']} src={image} alt={name} />
        <figcaption className={classes['details-caption']}>{name}</figcaption>
      </figure>
      <div className={classes['details-main-block']}>
        {species && <span className={classes['details-species']}>{species}</span>}
        {gender !== 'unknown' && <span className={classes['details-gender']}>{gender}</span>}
        {status !== 'unknown' && <span className={classes['details-status']}>{status}</span>}
      </div>
      <div className={classes['details-secondary-block']}>
        <p>
          Created: <span className={classes['details-created']}>{dateCreated.toDateString()}</span>
        </p>

        <p>
          Origin: <span className={classes['details-origin']}>{origin.name}</span>
        </p>
        <p>
          Location: <span className={classes['details-location']}>{location.name}</span>
        </p>
      </div>
      <div className={classes['details-episodes-block']}>
        <p>Episodes:</p>
        <ul className={classes['details-episodes-list']}>
          {episodesNumbers.map((eN) => (
            <li className={classes['details-episodes-list-item']} key={eN}>
              {eN}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DetailsPage;
