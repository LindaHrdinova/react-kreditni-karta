import { useState } from 'react';
import './App.css';
import { CardNumbers } from './components/cardNumbers/cardNumbers';
import { PlasticCard } from './components/plasticCard/plasticCard';

function App() {
  const [numberSet1, setNumberSet1] = useState<string>("0");
  const [numberSet2, setNumberSet2] = useState<string>("0");
  const [numberSet3, setNumberSet3] = useState<string>("0");
  const [numberSet4, setNumberSet4] = useState<string>("0");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, nextRef: React.RefObject<HTMLInputElement> | null) => {
    const input = e.target;
    const maxLength = 4;

    if (input.value.length >= maxLength && nextRef) {
      nextRef.current?.focus();
    }
  };

  return (
    <>
      <h1>Platební karta</h1>
      <PlasticCard
        numberSet1={numberSet1}
        numberSet2={numberSet2}
        numberSet3={numberSet3}
        numberSet4={numberSet4}
      />
      <CardNumbers 
      onInputChange={handleInputChange}
      onSetNumberSet1={setNumberSet1}
      onSetNumberSet2={setNumberSet2}
      onSetNumberSet3={setNumberSet3}
      onSetNumberSet4={setNumberSet4}/>
    </>
  );
}

export default App;
