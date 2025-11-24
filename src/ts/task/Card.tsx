import { CardProps } from "./CardProps.types";

const Card = ({ name, age, isActive }: CardProps) => {
  return (
    <div>
      {name} {age} {isActive && isActive}
    </div>
  );
};

export default Card;
