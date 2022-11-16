import Card from 'components/Card/Card';
import SearchBar from 'components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import classes from './CardsList.module.css';
import { IFormInputs } from 'components/FormTasks/FormTask';
import type { ISearchBarState } from '../../components/SearchBar/SearchBar';

interface CardsListProps {
  cards: IFormInputs[];
  showSearchBar: boolean;
}

function CardsList(props: CardsListProps) {
  const [cards, setCards] = useState<IFormInputs[]>(props.cards);
  const [filteredCards, setFilteredCards] = useState<IFormInputs[]>(props.cards);
  console.log('cards', cards);
  console.log('filteredCards', filteredCards);

  useEffect(() => {
    setCards(props.cards);
    setFilteredCards(props.cards);
  }, [props.cards]);

  const handleSearch = (query: ISearchBarState) => {
    const newFilteredCards = cards.filter((card) =>
      card.taskName.toLowerCase().includes(query.name.trim().toLowerCase())
    );
    setFilteredCards(newFilteredCards);
  };

  return (
    <div className={classes['cards-list']}>
      {props.showSearchBar && cards.length > 0 && <SearchBar onSearch={handleSearch} />}
      <ul className={classes.list} aria-label="items">
        {filteredCards.map((card) => (
          <li className={classes.list__item} key={card.id}>
            <Card cardData={card} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CardsList;
