import { render, screen, within } from '@testing-library/react';
import CardsList from './CardsList';
import { dataTasks } from '../../model/dataTasksTypeB';

describe('CardsList component', () => {
  test('renders list of cards', () => {
    render(<CardsList cards={dataTasks} showSearchBar />);
    const cardsList = screen.getByRole('list', { name: /items/i });
    const { getAllByRole } = within(cardsList);
    const cards = getAllByRole('listitem');
    expect(cards).toHaveLength(dataTasks.length);
  });
});
