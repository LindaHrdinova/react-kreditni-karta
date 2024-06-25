import './style.css';

interface PlasticCardProps {
  numberSet1: string;
  numberSet2: string;
  numberSet3: string;
  numberSet4: string;
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
