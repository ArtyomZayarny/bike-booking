import styles from "./form.module.css";
type Props = {
  value: string;
  name: string;
  placeholder: string;
  handleChange: (event: any) => void;
  type?: string;
};

export const Input = ({
  value,
  name,
  placeholder,
  handleChange,
  type = "text",
}: Props) => {
  return (
    <input
      className={styles.formEl}
      autoComplete="off"
      type={type}
      value={value}
      name={name}
      minLength={5}
      required
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
