import Button from "../ui/button";
import classes from "./stacking.module.css";
import Image from "next/image";
import { RiArrowRightDownLine } from "react-icons/ri";
export default function Stacking() {
  const buttonStyle1 = {
    backgroundColor: "black",
    color: "white",
  };

  const buttonStyle2 = {
    backgroundColor: "transparent",
    color: "black",
    border: "2px solid black",
  };

  return (
    <section className={classes.container} id="about">
      <div className={classes.stacking}>
        <div className={classes.gradient}>
          {/* <Image src='/images/gradient.png' width={450} height={600} alt="gradient"/> */}
          <img src="/images/gradient.png" />
        </div>
        <div className={classes.content}>
          <h1>What is Staking?</h1>
          <p>
            Staking is when you lock AOVR tokens over a certain time span. In
            return, you receive a share of the weekly minted new
            <span>AOVR</span> tokens. While your tokens, are staked you cannot
            send them to other wallets cast votes wihte them in the
            <span> ALLOVR DAO</span> or make use of any other utility the tokens
            hold. However, it is completely up to you how many tokens if any
            you’d like to stake.
          </p>
        </div>
      </div>
      <div className={classes.text}>
        - The number of <span>tokens</span> you gain from the weekly minted
        supply is proportional to the size of your stake compared to those of
        all others. The minimum staking period is oane wee after that you can
        withdraw your tokens <span>plus your earned interest</span> at any time.
      </div>
      <div className={classes.action}>
        <div className={classes.actionGradient}></div>
        <div className={classes.actionContent}>
          <h1>Start your action now!</h1>
          <div className={classes.btns}>
            <Button
              text={"STAKE AOVR NOW"}
              styles={buttonStyle1}
              icon={<RiArrowRightDownLine />}
            />
            <Button text={"WITHDRAW AOVR"} styles={buttonStyle2} />
          </div>
        </div>
      </div>
    </section>
  );
}
