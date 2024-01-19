import { Status } from "../card/status.enum";

type Props = {
  currentStatus: string;
};

export const Select = ({ currentStatus }: Props) => {
  const statuses = [...Object.values(Status)];
  const renderOptions = () => {
    return statuses.map((status: Status) => (
      <option key={status} value={status} selected={currentStatus === status}>
        {status}
      </option>
    ));
  };
  return (
    <select name="" id="" className="select">
      {renderOptions()}
    </select>
  );
};
