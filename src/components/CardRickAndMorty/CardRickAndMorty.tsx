import { useNavigate, useParams } from 'react-router-dom';
import styles from './CardRickAndMorty.module.css';

interface ICard {
  id: number;
  image: string;
  name: string;
}

const CardRickAndMorty: React.FC<ICard> = (props) => {
  const { image, name, id } = props;
  const navigate = useNavigate();
  const params = useParams();

  return (
    <div
      className={styles['card']}
      onClick={() => navigate(`/rick-and-morty/${params.page}/${id}`)}
    >
      <figure className={styles['card-figure']}>
        <img className={styles['card-image']} src={image} alt={name} />
        <figcaption className={styles['card-caption']}>{name}</figcaption>
      </figure>
    </div>
  );
};

export default CardRickAndMorty;
