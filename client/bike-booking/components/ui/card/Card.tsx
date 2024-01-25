import { CloseButton } from "@/components/icons/closeButton";
import { Select } from "../select/Select";
import "./card.css";
import { IBike } from "@/types";
import { useContext } from "react";
import { BikesContext } from "@/context/bikes-context";
import { Status } from "./status.enum";

type Props = {
  data: IBike;
};

export const Card = ({ data }: Props) => {
  const { deleteBike, updateBike } = useContext(BikesContext);
  const { name, type, color, _id, status, price, slugID } = data;

  const handleDelete = (id: string) => {
    deleteBike(id);
  };

  const updateStatus = (status: Status) => {
    updateBike(_id, status);
  };

  return (
    <div className={`card ${status}`}>
      <div className="card-info">
        <h3 className="title">
          <span className="name">{name}</span>
          {`- ${type} (${color})`}
        </h3>
        <span className="id">{`ID: ${slugID || ""}`}</span>
        <div className="status">
          <span className="label">Status:</span>
          <Select currentStatus={status} handleSelect={updateStatus} />
        </div>
        <div className="price">
          <span>{price}UAH/hr.</span>
        </div>
        <div className="close">
          <div className="close-btn" onClick={() => handleDelete(_id)}>
            <CloseButton />
          </div>
        </div>
      </div>
    </div>
  );
};
