import './style.css';

interface PlasticCardProps {
  numberSet1: number;
  numberSet2: number;
  numberSet3: number;
  numberSet4: number;
}

export const PlasticCard: React.FC<PlasticCardProps> = ({
  numberSet1,
  numberSet2,
  numberSet3,
  numberSet4,
}) => {
  return (
    <div className="creditCard__card">
      <div className="creditCard__card--numbers">
        {numberSet1} {numberSet2} {numberSet3} {numberSet4}
      </div>
    </div>
  );
};
