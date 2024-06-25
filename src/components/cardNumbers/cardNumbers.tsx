import { useRef } from 'react';
import './style.css';

export const CardNumbers: React.FC = () => {
  const cardInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="creditCard__cardNumbers">
      <input type="number" ref={cardInputRef} className="creditCard__number" />
      <input type="number" ref={cardInputRef} className="creditCard__number" />
      <input type="number" ref={cardInputRef} className="creditCard__number" />
      <input type="number" ref={cardInputRef} className="creditCard__number" />
    </div>
  );
};
