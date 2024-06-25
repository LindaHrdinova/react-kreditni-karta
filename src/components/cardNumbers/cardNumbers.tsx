import { useRef } from 'react';
import './style.css';

interface PlasticCardProps {
  numberSet1: number;
  numberSet2: number;
  numberSet3: number;
  numberSet4: number;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>, nextRef: React.RefObject<HTMLInputElement> | null) => void;

}

export const CardNumbers: React.FC<PlasticCardProps> = ({onInputChange}) => {
  const cardInputRef1 = useRef<HTMLInputElement>(null);
  const cardInputRef2 = useRef<HTMLInputElement>(null);
  const cardInputRef3 = useRef<HTMLInputElement>(null);
  const cardInputRef4 = useRef<HTMLInputElement>(null);

  return (
    <div className="creditCard__cardNumbers">
      <input type="number" maxLength={4} className="creditCard__number" ref={cardInputRef1} onChange={(e) => onInputChange(e, cardInputRef2)}/>
      <input type="number" maxLength={4} className="creditCard__number" ref={cardInputRef2} onChange={(e) => onInputChange(e, cardInputRef3)}/>
      <input type="number" maxLength={4} className="creditCard__number" ref={cardInputRef3} onChange={(e) => onInputChange(e, cardInputRef4)}/>
      <input type="number" maxLength={4} className="creditCard__number" ref={cardInputRef4} onChange={(e) => onInputChange(e, null)}/>
    </div>
  );
};
