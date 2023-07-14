import Footer from "../footer/footer";
import Button from "../ui/button";
import Pool from "./pool";
import classes from "./stacking-pool.module.css";
import data from "@/lib/data";
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

  const loadBtn = {
    backgroundColor: "transparent",
    color: "white",
    border: "2px solid white",
    width: "200px",
    height: "56px",
    padding: "16px 40px 16px 40px",
    fontSize: "16px",
    fontWight: 500,
    margin: 'auto'
  };

  return (
    <section className={classes.container}>
      <div className={classes.bg}></div>
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
      <div className={classes.pool}>
        {data.map((pool) => (
          <Pool
            title={pool.title}
            stacked={pool.stacked}
            owed={pool.owed}
            slot={pool.slot}
            link={pool.link}
            reBalance={pool.reBalance}
          />
        ))}
      </div>
      <Button text={"LOAD MORE ..."} styles={loadBtn}/>
      <Footer />
    </section>
  );
}
