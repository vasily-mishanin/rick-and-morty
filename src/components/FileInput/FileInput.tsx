import { useEffect, useRef, useState } from 'react';
import classes from './FileInput.module.css';

interface IFileInputProps {
  name: string;
  id: string;
  onFileInput: (file: File, fileDataURL: string) => void;
}

function FileInput(props: IFileInputProps) {
  const [file, setFile] = useState<File | null>(null);
  const [fileDataURL, setFileDataURL] = useState<string | null>(null);

  if (file && fileDataURL) {
    props.onFileInput(file, fileDataURL);
  }

  const profileImageInputRef = useRef<HTMLInputElement>(null);
  const imageMimeType = /image\/(png|jpg|jpeg)/i;

  const handleFileInput = () => {
    if (profileImageInputRef.current) {
      // console.log('Files!!!');
      let fileRefValue: File;
      if (profileImageInputRef.current.files) {
        fileRefValue = profileImageInputRef.current.files[0];

        if (fileRefValue && !fileRefValue.type.match(imageMimeType)) {
          alert('Image mime type is not valid');
          return;
        }

        setFile(fileRefValue);
      }
      if (!profileImageInputRef.current.files && file) {
        setFile(null);
      }
    }
  };

  useEffect(() => {
    console.log('useEffect!!!');
    let fileReader: FileReader;
    let isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.addEventListener('load', () => {
        // console.log('fileReader', fileReader.result);
        if (fileReader.result && !isCancel) {
          if (typeof fileReader.result === 'string') {
            setFileDataURL(fileReader.result);
          }
        }
      });

      fileReader.readAsDataURL(file);
    } else {
      setFileDataURL(null);
    }
    return () => {
      console.log('useEffect!!! -- UNMOUNT');
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  return (
    <div>
      <div>
        <label htmlFor={props.id}>
          {' '}
          Upload task image:
          <input
            type="file"
            accept="image/*"
            name={props.name}
            id={props.id}
            ref={profileImageInputRef}
            onChange={handleFileInput}
          />
        </label>
      </div>

      {fileDataURL ? (
        <div className={classes['img-preview-wrapper']}>
          {<img src={fileDataURL} alt="preview" />}
        </div>
      ) : null}
    </div>
  );
}

export default FileInput;
