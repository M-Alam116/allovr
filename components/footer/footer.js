import classes from "./footer.module.css";
import { BsTwitter } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { BiLogoDiscord } from "react-icons/bi";
import Link from "next/link";
export default function Footer() {
  return (
    <div className={classes.footer}>
      <Link href="#home" scroll={false}>
        <img src="/images/logo.png" />
      </Link>
      <div className={classes.icons}>
        <BiLogoDiscord className={classes.icon} />
        <FiInstagram className={classes.icon} />
        <BsTwitter className={classes.icon} />
      </div>
      <p>2022 . All Right Reserved</p>
    </div>
  );
}
