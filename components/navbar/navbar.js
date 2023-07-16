import Image from "next/image";
import classes from "./navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [hamburger, setHamburger] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1003) {
        setHamburger(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const hamburgerHandler = () => {
    setHamburger(!hamburger);
  };

  return (
    <div className={`${classes.mainNav} ${hamburger ? "" : classes.vertical}`}>
      <div className={classes.left}>
        <Link href="#home" scroll={false}>
          <Image
            src="/images/logo.png"
            width={200}
            height={40}
            alt="logo"
            className={`${hamburger ? classes.img : classes.verticalImg}`}
          />
        </Link>
      </div>
      <div className={`${hamburger ? classes.right : classes.verticalUl}`}>
        {hamburger ? (
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
        ) : (
          <div className={classes.verticalLi}>
            <Link
              href="#about"
              scroll={false}
              style={{
                textDecoration: "none",
                color: "white",
                marginRight: "1rem",
              }}
            >
              About
            </Link>
            <Link
              href="#working"
              scroll={false}
              style={{
                textDecoration: "none",
                color: "white",
                marginRight: "1rem",
              }}
            >
              How it Works
            </Link>
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
          </div>
        )}
        <div className={classes.outerHam}>
          <div className={`${hamburger ? classes.btn : classes.verticalBtn}`}>
            <Image
              src="/images/phantom.png"
              width={14}
              height={14}
              alt="icon"
              className={classes.icon}
            />
            <button>CONNECT PHANTOM WALLET</button>
          </div>
        </div>
      </div>
      {hamburger ? (
        <GiHamburgerMenu
          className={classes.hambarger}
          onClick={hamburgerHandler}
        />
      ) : (
        <RxCross2 className={classes.hambarger} onClick={hamburgerHandler} />
      )}
    </div>
  );
}
