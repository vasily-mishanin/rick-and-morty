import { render, screen, within } from '@testing-library/react';
import Switcher from './Switcher';
import { ITaskCard } from 'model/types';
import ReactDOM from 'react-dom';

interface ISwitcherProps {
  name: string;
  id: string;
  onToggle: (checked: boolean) => void;
}

const fileInputHandler = (file: File, fileDataURL: string) => {
  const profileImageFile = file;
  const profileImageFileDataURL = fileDataURL;
  console.log('profileImageFile', profileImageFile);
  console.log('profileImageFileDataURL', profileImageFileDataURL);
};

describe('CardsList component', () => {
  test('renders Switcher', () => {
    const { container } = render(
      <Switcher name="TestSwitcherValue" id="TestSwitcherValue" onToggle={() => {}} />
    );
    const input = container.querySelector('input[name="TestSwitcherValue"]');
    expect(input).toBeInTheDocument;
  });
});
