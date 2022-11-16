import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

interface IModalProps {
  // children: JSX.Element;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({ isOpen, onClose, children }: IModalProps) => {
  if (!isOpen) return null;

  const PORTAL = document.getElementById('react-portal-modal-container') as HTMLDivElement;

  return ReactDOM.createPortal(
    <div className={classes['modal']} onClick={onClose}>
      <div className={classes['modal-content']}>
        <button onClick={onClose} className={classes['close-btn']}>
          X
        </button>
        {children}
      </div>
    </div>,
    PORTAL
  );
};

export default Modal;
