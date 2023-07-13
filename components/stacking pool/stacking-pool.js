import Button from "../ui/button";
import classes from "./stacking-pool.module.css";
export default function StackingPool() {
  const btn1 = {
    color: "white",
    background: "rgba(237, 30, 121, 1)",
    width: "fit-content",
    padding: "0 16px",
  };

  const btn2 = {
    backgroundColor: "transparent",
    color: "white",
    border: "2px solid white",
    width: "fit-content",
    padding: "0 16px",
  };

  return (
    <section className={classes.container}>
      <div className={classes.stacking}>
        <div className={classes.content}>
          <h1>Staking pools</h1>
          <p>
            Browse ALLOVR’s 100% transparent staking pools. Select a pool to
            stake your ALLOVR tokens or get assigned one randomly by hitting
            <span> Stake AOVR now</span>. note that all staking pools work the
            same and
          </p>
          <h2>- earn the same there is no good or bad choice here</h2>
        </div>
        <div className={classes.btns}>
          <Button text={"TRIGGER INFLATION RUN"} styles={btn1} />
          <Button text={"REGISTER POOL"} styles={btn2} />
        </div>
      </div>
    </section>
  );
}
