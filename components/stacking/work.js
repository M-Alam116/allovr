import Button from "../ui/button";
import classes from "./work.module.css";
import { RiArrowRightUpLine } from "react-icons/ri";
export default function Work() {
  const btn1 = {
    color: "white",
    background: "rgba(237, 30, 121, 1)",
    width: "fit-content",
    padding: "0 16px"
  };

  const btn2 = {
    backgroundColor: "transparent",
    color: "white",
    border: "2px solid white",
    width: "fit-content",
    padding: "0 16px"
  };

  return (
    <section className={classes.container}>
      <div className={classes.upper}>
        <div className={classes.left}>
          <h1>How does it work?</h1>
          <p>
            The total <span>AOVR</span> supply is inflated with an additional 3%
            every year. The total AOVR supply is inflated with an additional 3%
            every year. This inflation happens in weekly increments, paid out to
            everyone in the community with staked AOVR tokens at the time of
            payout and proportional to the amount staked. All staked tokens are
            held by the
            <span>AOVR</span> Staking treasury, with is controled by the
            <span>DAO</span> and therefore secured against malicious behavior by
            the <span>ALLOVR</span> community.
          </p>
        </div>
        <div className={classes.right}>
          <img src="/images/how-illustration.png" />
        </div>
      </div>
      <div className={classes.bottom}>
        <p>
          - An on-chain register of staking pools is
          <span> maintained publicly</span> and
          <span> transparently</span>, keeping reords of correct inflation
          distribution over all eligible accounts and
          <sapn>outsanting payments</sapn> per staking slot.
        </p>
        <div className={classes.btns}>
          <Button
            text={"READ TECHNICAL DESCRIPTION"}
            icon={<RiArrowRightUpLine />}
            styles={btn1}
          />
          <Button text={"BROWSE STAKING POOLS"} styles={btn2} />
        </div>
      </div>
    </section>
  );
}
