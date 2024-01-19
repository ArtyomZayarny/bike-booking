import { CloseButton } from "@/components/icons/closeButton";
import { Select } from "../select/Select";
import "./card.css";
import { IBike } from "@/types";

type Props = {
  data: IBike;
};

export const Card = ({ data }: Props) => {
  const { name, type, color, id, status, price } = data;
  return (
    <div className={`card ${status}`}>
      <div className="card-info">
        <h3 className="title">
          <span className="name">{name}</span>
          {`- ${type} (${color})`}
        </h3>
        <span className="id">{`ID: ${id}`}</span>
        <div className="status">
          <span className="label">Status:</span>
          <Select currentStatus={status} />
        </div>
        <div className="price">
          <span>{price}UAH/hr.</span>
        </div>
        <div className="close">
          <div className="close-btn">
            <CloseButton />
          </div>
        </div>
      </div>
    </div>
  );
};
