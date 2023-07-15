import Image from "next/image";
import classes from "./navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import Link from "next/link";
export default function Navbar() {
  const [hambarger, setHambarger] = useState(true);

  const hambargerHandler = () => {
    setHambarger(!hambarger);
  };

  return (
    <div className={classes.mainNav}>
      <div className={classes.left}>
        <Link href="#home" scroll={false}>
          <Image
            src="/images/logo.png"
            width={200}
            height={40}
            alt="logo"
            className={classes.img}
          />
        </Link>
      </div>
      <div className={classes.right}>
        <ul>
          <li>
            <Link
              href="#about"
              scroll={false}
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#working"
              scroll={false}
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              How it Works
            </Link>
          </li>
          <li>
            <Link
              href="#stacking"
              scroll={false}
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              Stacking
            </Link>
          </li>
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
    </div>
  );
}
