import { render, screen, within } from '@testing-library/react';
import Modal from './Modal';
import { ITaskCard } from 'model/types';
import ReactDOM from 'react-dom';

const fileInputHandler = (file: File, fileDataURL: string) => {
  const profileImageFile = file;
  const profileImageFileDataURL = fileDataURL;
  console.log('profileImageFile', profileImageFile);
  console.log('profileImageFileDataURL', profileImageFileDataURL);
};

describe('CardsList component', () => {
  test('renders Modal', () => {
    const message = <p>Task data successfully saved</p>;
    render(
      <Modal isOpen={false} onClose={() => {}}>
        {message}
      </Modal>
    );
    const modalWindow = screen.findByText('Task data successfully saved');
    expect(modalWindow).toBeInTheDocument;
  });
});
