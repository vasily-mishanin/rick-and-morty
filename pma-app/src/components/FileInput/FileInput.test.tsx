import { render, screen, within } from '@testing-library/react';
import FileInput from './FileInput';

const fileInputHandler = (file: File, fileDataURL: string) => {
  const profileImageFile = file;
  const profileImageFileDataURL = fileDataURL;
  console.log('profileImageFile', profileImageFile);
  console.log('profileImageFileDataURL', profileImageFileDataURL);
};

describe('CardsList component', () => {
  test('renders list of cards', () => {
    const { container } = render(
      <FileInput name="TestInput" id="TestInput" onFileInput={fileInputHandler} />
    );
    const input = container.querySelector('input[name="TestInput"]');
    expect(input).toBeInTheDocument;
  });
});
