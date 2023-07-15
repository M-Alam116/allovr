import Button from "../ui/button";
import classes from ".//hero.module.css";
import Image from "next/image";
import { RiArrowRightDownLine } from "react-icons/ri";

export default function Hero() {
  const buttonStyle = {
    backgroundColor: "transparent",
    color: "white",
    border: "1px solid white",
  };

  return (
    <section className={classes.heroMain} id="home">
      <div className={classes.hero}>
        <div className={classes.heroLeft}>
            <h1>
              Stake <span>ALLOVR.</span>
            </h1>
            <p>This is the best time to get the earnings you dream of.</p>
            <Button
              text={"SCROLL DOWN"}
              icon={<RiArrowRightDownLine />}
              styles={buttonStyle}
            />
          </div>
        <div className={classes.heroRight}>
          <div className={classes.heroGradient}></div>
          <Image
            src="/images/hero-illustration.png"
            width={800}
            height={600}
            alt="Hero illustration"
            className={classes.illustration}
          />
        </div>
      </div>
    </section>
  );
}
