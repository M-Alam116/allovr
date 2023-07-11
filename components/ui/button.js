import classes from "./button.module.css";

export default function Button(props) {
  const {  icon, text, styles } = props;

  return (
    <button className={classes.btn} style={styles}>
      {text}
      {icon}
    </button>
  );
}
