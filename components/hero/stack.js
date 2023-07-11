import Button from "../ui/button";
import classes from "./stack.module.css";
import { RiArrowRightUpLine } from "react-icons/ri";
export default function Stack() {
  const btn1 = {
    color: "white",
    background: "linear-gradient(90deg, #ED1E79 0%, #FBB03B 100%)",
  };

  const btn2 = {
    backgroundColor: "transparent",
    color: "white",
    border: "1px solid white",
  };

  return (
    <section className={classes.mainStack}>
      <div className={classes.stackLeft}>
        <p>Total Staked at this moment</p>
        <h1>
          56,669 <span>AOVR</span>
        </h1>
        <p>Community earnings since last payout</p>
        <h1>
          3,923 <span>AOVR</span>
        </h1>
        <p>Time to next payout</p>
        <div className={classes.time}>
          <div>
            <span>02</span>
            <h4>Days</h4>
          </div>
          <div>
            <span>14</span>
            <h4>Hours</h4>
          </div>
          <div>
            <span>22</span>
            <h4>Minutes</h4>
          </div>
          <div>
            <span>32</span>
            <h4>Seconds</h4>
          </div>
        </div>

        <div className={classes.btns}>
          <Button text={"STAKE AOVR NOW"} icon={<RiArrowRightUpLine />}  styles={btn1}/>
          <Button text={"WITHDRAW AOVR"}  styles={btn2}/>
        </div>
      </div>
      <div className={classes.stack}>Stake First</div>
    </section>
  );
}
