import classes from './ListRickAndMorty.module.css';
import CardRickAndMorty from 'components/CardRickAndMorty/CardRickAndMorty';
import type { RickAndMortyCharacter } from 'model/types';
import Spinner from '../Spinner/Spinner';
import { useAppSelector } from '../../store-redux/hooks';

interface ICardsRickAndMorty {
  cards: RickAndMortyCharacter[];
}

const ListRickAndMorty: React.FC<ICardsRickAndMorty> = ({ cards }) => {
  const appState = useAppSelector((state) => state.characters);
  return (
    <div className={classes['list-wrapper']}>
      <ul className={classes['list']}>
        {appState.isLoading ? (
          <Spinner />
        ) : (
          cards.map((card) => (
            <li className={classes['list-item']} key={card.id}>
              <CardRickAndMorty name={card.name} image={card.image} id={card.id} />
            </li>
          ))
        )}{' '}
      </ul>
    </div>
  );
};

export default ListRickAndMorty;
