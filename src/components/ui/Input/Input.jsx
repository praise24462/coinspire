import styles from "./Input.module.scss";

export default function Input({
  placeholder,
  value,
  onChange,
  type = "text",
}) {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
    />
  );
}