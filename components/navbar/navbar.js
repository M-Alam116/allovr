import Image from "next/image";
import classes from "./navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
export default function Navbar() {
  const [hambarger, setHambarger] = useState(true);

  const hambargerHandler = () => {
    setHambarger(!hambarger);
  };

  if (!hambarger){

  }

  return (
    <nav className={classes.mainNav}>
      <div className={classes.left}>
        <Image
          src="/images/logo.png"
          width={150}
          height={40}
          alt="logo"
          className={classes.img}
        />
        {/* <h1>ALLOVR</h1> */}
      </div>
      <div className={classes.right}>
        <ul>
          <li>About</li>
          <li>How it Works</li>
          <li>Stacking</li>
        </ul>
        <div className={classes.outerHam}>
          <div className={classes.btn}>
            <Image
              src="/images/phantom.png"
              width={14}
              height={14}
              alt="icon"
              className={classes.icon}
            />
            <button>CONNECT PHANTOM WALLET</button>
          </div>

          {hambarger ? (
            <GiHamburgerMenu
              className={classes.hambarger}
              onClick={hambargerHandler}
            />
          ) : (
            <RxCross2
              className={classes.hambarger}
              onClick={hambargerHandler}
            />
          )}
        </div>
      </div>
    </nav>
  );
}
