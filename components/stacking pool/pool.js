import Button from "../ui/button";
import classes from "./pool.module.css";
export default function Pool(props) {
  const { stacked, owed, slot, title, link, reBalance } = props;

  const btn1 = {
    color: "white",
    background: "rgba(237, 30, 121, 1)",
    width: "89px",
    height: "41px",
    padding: "0 16px",
    fontSize: '14px'
  };

  const btn2 = {
    backgroundColor: "transparent",
    color: "white",
    border: "2px solid white",
    width: "126px",
    height: "41px",
    padding: "0 16px",
    fontSize: '14px'
  };

  return (
    <div className={classes.pool}>
      <h1>{title}</h1>
      <div className={classes.content}>
        <div>
          <p>Total Staked</p>
          <p>
            <span className={classes.stackedStyle}>{stacked}</span> AOVR
          </p>
        </div>
        <div>
          <p>Total Owed</p>
          <p>
            <span className={classes.stackedStyle}>{owed}</span> AOVR
          </p>
        </div>
      </div>
      <p>
        Available Slots : <span className={classes.slotStyle}>{slot} </span>
         Slots
      </p>
      <hr style={{ width: "100%", opacity: 0.2, margin: "15px 0" }}></hr>
      <h2 className={classes.linkStyle}>{link}</h2>
      <div className={classes.btns}>
        {reBalance && <Button text={"REBALANCE"} styles={btn2} />}
        <Button text={"STAKE"} styles={btn1} />
      </div>
    </div>
  );
}
