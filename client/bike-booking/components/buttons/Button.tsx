type Props = {
  type: "submit" | "reset" | "button" | undefined;
  text: string;
  styles?: string;
  handleClick?: () => void;
};
export const Button = ({ type, text, styles, handleClick }: Props) => {
  return (
    <button type={type} className={styles} onClick={handleClick}>
      {text}
    </button>
  );
};
