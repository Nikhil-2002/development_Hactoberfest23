import { Fragment } from "react";
import styles from "./Features.module.css";
import { features } from "../../constants/features";
import RecyclingIcon from "@mui/icons-material/Recycling";

const Features = () => {
  return (
    <div className={`${styles.featuresWrapper} center`}>
      <div className={styles.featuresHeading}>
        <p>E-waste disposal you can count on</p>
      </div>
      <div className={`${styles.featuresListWrapper} center`}>
        <div className={`${styles.featuresList} center`}>
          {features.map(({ feature, description, image }) => {
            return (
              <div className={`${styles.featureDiv} center`}>
                <Fragment>
                  <div className={styles.feature}>
                    <p>{feature}</p>
                  </div>
                  <div className={styles.featureDescription}>
                    <p>{description}</p>
                  </div>
                  <div>
                    <img className={styles.featureImg} src={image} alt="img" />
                  </div>
                </Fragment>
              </div>
            );
          })}
        </div>
      </div>
      <button href className={styles.shopBtn}>
        Start Recycling <RecyclingIcon style={{ paddingTop: "10px" }} />
      </button>
    </div>
  );
};

export default Features;
