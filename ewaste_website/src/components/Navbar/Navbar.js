import React from "react";
import styles from "./Navbar.module.css";
import logo2 from "./logo2.png";

const Navbar = ({ hamActive, setHamActive }) => {
  const handleClick = () => {
    setHamActive(!hamActive);
  };

  return (
    <nav className={`${styles.navbarWrapper} center`}>
      <div className={`${styles.navbarInner} center`}>
        <button
          className={`${styles.hamburger} ${hamActive && styles.active}`}
          onClick={handleClick}
        >
          <span className={styles.hamburgerLines}></span>
        </button>
        <div className={`${styles.navLeft}`}>
          <img
            src={logo2}
            alt="logo"
            className={styles.brand}
            style={{ height: "80px", width: "120px" }}
          />
        </div>
        <div className={`${styles.navRight} center`}>
          <div className={styles.navLinksWrapper}>
            <div className={styles.verticalLine}> </div>
            <a href="/" className={`${styles.nav} center`}>
              Wallet
            </a>
            <a href="/" className={`${styles.nav} center`}>
              Redeem
            </a>
            <a href="/" className={`${styles.nav} center`}>
              Donation
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
