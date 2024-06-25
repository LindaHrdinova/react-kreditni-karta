import './style.css';

export const CardNumbers: React.FC = ({}) => {
  return (
    <div className="creditCard__cardNumbers">
      <input className="creditCard__number"></input>{' '}
      <input className="creditCard__number"></input>{' '}
      <input className="creditCard__number"></input>{' '}
      <input className="creditCard__number"></input>
    </div>
  );
};
