import Button from "../ui/button";
import classes from "./stack.module.css";
import { RiArrowRightUpLine } from "react-icons/ri";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { RxCross2 } from "react-icons/rx";
export default function Stack() {
  const [openStack, setOpenStack] = useState(false);
  const handleOpenStack = () => setOpenStack(true);
  const handleCloseStack = () => setOpenStack(false);

  const [openWithdraw, setOpenWithdraw] = useState(false);
  const handleOpenWithdraw = () => setOpenWithdraw(true);
  const handleCloseWithdraw = () => setOpenWithdraw(false);

  const btn1 = {
    color: "white",
    background: "linear-gradient(90deg, #ED1E79 0%, #FBB03B 100%)",
  };

  const btn2 = {
    backgroundColor: "transparent",
    color: "white",
    border: "1px solid white",
  };

  const btn = {
    width: "100%",
    color: "white",
    background: "linear-gradient(90deg, #ED1E79 0%, #FBB03B 100%)",
  };

  return (
    <section className={classes.mainStack}>
      <div className={classes.stackLeft}>
        <p>Total Staked at this moment</p>
        <h1>
          56,669 <span>AOVR</span>
        </h1>
        <p>Community earnings since last payout</p>
        <h1>
          3,923 <span>AOVR</span>
        </h1>
        <p>Time to next payout</p>
        <div className={classes.time}>
          <div>
            <span>02</span>
            <h4>Days</h4>
          </div>
          <div>
            <span>14</span>
            <h4>Hours</h4>
          </div>
          <div>
            <span>22</span>
            <h4>Minutes</h4>
          </div>
          <div>
            <span>32</span>
            <h4>Seconds</h4>
          </div>
        </div>

        <div className={classes.btns}>
          <Button
            text={"STAKE AOVR NOW"}
            icon={<RiArrowRightUpLine />}
            styles={btn1}
            onClick={handleOpenStack}
          />

          <Button
            text={"WITHDRAW AOVR"}
            styles={btn2}
            onClick={handleOpenWithdraw}
          />
          <div>
            <Modal
              open={openStack}
              onClose={handleCloseStack}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className={classes.box}>
                <RxCross2
                  className={classes.cross}
                  onClick={handleCloseStack}
                />
                <h1>Stake AOVR</h1>
                <p>
                  Staking some or all of your 25.200.000 AOVR will allow you to
                  earn AOVR weekly. The minimum investment time is 1 week,
                  meaning you will be able to withdraw your stake for 1 week.
                  The minimum stake is 10 AOVR.
                </p>
                <h2>Stake</h2>
                <span>5000</span>
                <Button
                  text={"STAKE 5000 AOVR"}
                  icon={<RiArrowRightUpLine />}
                  styles={btn}
                />
              </Box>
            </Modal>
          </div>

          <div>
            <Modal
              open={openWithdraw}
              onClose={handleCloseWithdraw}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className={classes.box}>
                <RxCross2
                  className={classes.cross}
                  onClick={handleCloseWithdraw}
                />
                <h1>Request AOVR Withdrawal</h1>
                <p>
                  After requesting the withdrawal of some or all of your 5000
                  AOVR it will take 1 week until you are able to claim your
                  withdrawal. This measure is in place to prevent system
                  manipulation.
                </p>
                <h2>Withdrawal Amount</h2>
                <span>500</span>
                <Button
                  text={"WITHDRAWAL 500 AOVR"}
                  icon={<RiArrowRightUpLine />}
                  styles={btn}
                />
              </Box>
            </Modal>
          </div>
        </div>
      </div>
      <div className={classes.stack}>Stake First</div>
    </section>
  );
}
