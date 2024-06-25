import { Dispatch, SetStateAction, useRef } from 'react';
import './style.css';

interface PlasticCardProps {
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>, nextRef: React.RefObject<HTMLInputElement> | null) => void;
  onSetNumberSet1: Dispatch<SetStateAction<number>>
  onSetNumberSet2: Dispatch<SetStateAction<number>>;
  onSetNumberSet3: Dispatch<SetStateAction<number>>;
  onSetNumberSet4: Dispatch<SetStateAction<number>>;
}

// omezení délky posledního inputu, část 1/2
const limitToMaxLength = (input: string): string => {
  return input.slice(0, 4); // Vrátí prvních 4 znaků z řetězce
}

export const CardNumbers: React.FC<PlasticCardProps> = ({onInputChange, onSetNumberSet1, onSetNumberSet2, onSetNumberSet3, onSetNumberSet4}) => {
  const cardInputRef1 = useRef<HTMLInputElement>(null);
  const cardInputRef2 = useRef<HTMLInputElement>(null);
  const cardInputRef3 = useRef<HTMLInputElement>(null);
  const cardInputRef4 = useRef<HTMLInputElement>(null);


  const onHandleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    nextRef: React.RefObject<HTMLInputElement> | null,
  ) => {
    // omezení délky posledního inputu, část 2/2
    const input = e.target;
    const value = limitToMaxLength(input.value); // Použití funkce pro omezení délky
    const valueNum = Number(value)
  
    if (value.length === 0) {
      input.value = '';
    } else {
      input.value = value;
    }
  
    if (value.length >= 4 && nextRef) {
      nextRef.current?.focus();
    }
  
    // setValue
    switch (input.name) {
      case 'number1':
        onSetNumberSet1(valueNum);
        break;
      case 'number2':
        onSetNumberSet2(valueNum);
        break;
      case 'number3':
        onSetNumberSet3(valueNum);
        break;
      case 'number4':
        onSetNumberSet4(valueNum);
        break;
      default:
        break;
    }

    // přesunutí focusu
    onInputChange(e, nextRef);
  };

  return (
    <div className="creditCard__cardNumbers">
      <input type="number" maxLength={4} className="creditCard__number" ref={cardInputRef1} name="number1" onChange={(e) => onHandleChange(e, cardInputRef2)}/>
      <input type="number" maxLength={4} className="creditCard__number" ref={cardInputRef2} name="number2" onChange={(e) => onHandleChange(e, cardInputRef3)}/>
      <input type="number" maxLength={4} className="creditCard__number" ref={cardInputRef3} name="number3" onChange={(e) => onHandleChange(e, cardInputRef4)}/>
      <input type="number" maxLength={4} className="creditCard__number" ref={cardInputRef4} name="number4" onChange={(e) => onHandleChange(e, null)}/>
    </div>
  );
};
