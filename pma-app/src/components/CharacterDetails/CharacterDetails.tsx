import classes from './CharacterDetails.module.css';
import type { RickAndMortyCharacter } from 'model/types';

function CharacterDetails(props: RickAndMortyCharacter) {
  let episodesNumbers: string[] = [];
  if (props.episode.length > 0) {
    episodesNumbers = props.episode.map((episodeURL: string) => {
      const url = new URL(episodeURL);
      return url.pathname.split('/').at(-1) as string;
    });
  }

  const dateCreated = new Date(props.created);
  return (
    <div className={classes['details']}>
      <figure className={classes['details-figure']}>
        <img className={classes['details-image']} src={props.image} alt={props.name} />
        <figcaption className={classes['details-caption']}>{props.name}</figcaption>
      </figure>
      <div className={classes['details-main-block']}>
        {props.species && <span className={classes['details-species']}>{props.species}</span>}
        {props.gender !== 'unknown' && (
          <span className={classes['details-gender']}>{props.gender}</span>
        )}
        {props.status !== 'unknown' && (
          <span className={classes['details-status']}>{props.status}</span>
        )}
      </div>
      <div className={classes['details-secondary-block']}>
        <p>
          Created: <span className={classes['details-created']}>{dateCreated.toDateString()}</span>
        </p>

        <p>
          Origin: <span className={classes['details-origin']}>{props.origin.name}</span>
        </p>
        <p>
          Location: <span className={classes['details-location']}>{props.location.name}</span>
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

export default CharacterDetails;
