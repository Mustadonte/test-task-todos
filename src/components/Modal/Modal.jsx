import { useEffect } from 'react';
import css from './Modal.module.css';

export const Modal = ({ data, close, isOpen }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        close();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [close, isOpen]);

  const handleClick = e => {
    if (e.target === e.currentTarget) {
      close();
    }
  };
  return (
    <div className={css.overlay} onClick={handleClick}>
      <div className={css.content}>
        <h2 className={css.title}>{data.title}</h2>
        <span className={css.desc}>Description:</span>
        <p className={css.text}>{data.desc}</p>
        <label htmlFor="status">
          Status:
          <input
            name="status"
            type="checkbox"
            checked={data.status}
            className={css.checkbox}
          />
        </label>
        <button className={css.button} type="button" onClick={close}>
          Close
        </button>
      </div>
    </div>
  );
};
