import { Fragment, useState } from "react";
import styles from "./Growth.module.css";

const GrowthBox = ({ field, description }) => {
  const [click, setClick] = useState(false);

  return (
    <div onClick={() => setClick(!click)} className={styles.growthDiv}>
      <Fragment>
        <div className={styles.growthField}>{field}</div>
        <div className={`${styles.growthDes} ${click && styles.open}`}>
          {description}
        </div>
      </Fragment>
    </div>
  );
};

export default GrowthBox;
