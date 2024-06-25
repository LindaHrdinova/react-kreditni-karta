import { useState } from 'react';
import './App.css';
import { CardNumbers } from './components/cardNumbers/cardNumbers';
import { PlasticCard } from './components/plasticCard/plasticCard';

function App() {
  const [numberSet1, setNumberSet1] = useState<number>(0);
  const [numberSet2, setNumberSet2] = useState<number>(0);
  const [numberSet3, setNumberSet3] = useState<number>(0);
  const [numberSet4, setNumberSet4] = useState<number>(0);

  return (
    <>
      <h1>Platební karta</h1>
      <PlasticCard
        numberSet1={numberSet1}
        numberSet2={numberSet2}
        numberSet3={numberSet3}
        numberSet4={numberSet4}
      />
      <CardNumbers />
    </>
  );
}

export default App;
