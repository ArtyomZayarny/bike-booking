import { Status } from "../card/status.enum";

type Props = {
  currentStatus: string;
  handleSelect: (status: Status) => void;
};

export const Select = ({ currentStatus, handleSelect }: Props) => {
  const statuses = [...Object.values(Status)];
  const renderOptions = () => {
    return statuses.map((status: Status) => (
      <option key={status} value={status}>
        {status}
      </option>
    ));
  };
  return (
    <select
      name="status"
      className="select"
      value={currentStatus}
      onChange={(e) => handleSelect(e.target.value as Status)}
    >
      {renderOptions()}
    </select>
  );
};
