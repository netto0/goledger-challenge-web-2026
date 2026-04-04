import styles from './InputComponent.module.css'
type props = {
  label: string;
  type: "text" | "number" | "textarea";
  value: string | number;
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement, HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement>,
  ) => void;
};
export default function InputComponent({
  label,
  type,
  value,
  handleChange,
}: props) {
  return (
    <div className={styles.inputContainer}>
      <label>{label}</label>
      {type == "textarea" ? (
        <textarea value={value} onChange={(e) => handleChange(e)} />
      ) : (
        <input type={type} value={value} onChange={(e) => handleChange(e)} />
      )}
    </div>
  );
}
