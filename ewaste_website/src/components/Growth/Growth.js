import styles from "./Growth.module.css";
import { growth } from "../../constants/growth";
import GrowthBox from "./GrowthBox";

const imgURL1 =
  "https://media.istockphoto.com/id/1173081228/vector/people-throw-garbage-into-containers-for-organic-and-e-waste-litter-bins-with-recycle-sign.jpg?s=170667a&w=0&k=20&c=To7x_fdBELGn2VqLoksPIbR8LPpZhRX9fmEcD4u4SVM=";
const imgURL2 =
  "https://media.istockphoto.com/id/1173081228/vector/people-throw-garbage-into-containers-for-organic-and-e-waste-litter-bins-with-recycle-sign.jpg?s=170667a&w=0&k=20&c=To7x_fdBELGn2VqLoksPIbR8LPpZhRX9fmEcD4u4SVM=";

const Growth = () => {
  return (
    <div className={`${styles.growthWrapper} center`}>
      <div className={`${styles.growthWrapperInner} center`}>
        <div className={styles.growthHeading}>
          <p>Join the E-Waste Revolution.</p>
        </div>
        <div className={styles.growthImg}>
          <img className={styles.img1} src={imgURL1} alt="" />
          <img className={styles.img2} src={imgURL2} alt="" />
        </div>
        <div className={`${styles.growthList} center`}>
          {growth.map(({ field, description }) => {
            return <GrowthBox field={field} description={description} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Growth;
