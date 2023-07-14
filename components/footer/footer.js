import classes from "./footer.module.css";
import { BsTwitter } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { BiLogoDiscord } from "react-icons/bi";
export default function Footer() {
  return (
    <div className={classes.footer}>
      <img src="/images/logo.png" />
      <div className={classes.icons}>
        <BiLogoDiscord className={classes.icon}/>
        <FiInstagram className={classes.icon}/>
        <BsTwitter className={classes.icon}/>
      </div>
      <p>2022 . All Right Reserved</p>
    </div>
  );
}
