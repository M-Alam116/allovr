import classes from "./button.module.css";

export default function Button(props) {
  const {  icon, text, styles, onClick } = props;

  return (
    <button className={classes.btn} style={styles} onClick={onClick}>
      {text}
      {icon}
    </button>
  );
}
