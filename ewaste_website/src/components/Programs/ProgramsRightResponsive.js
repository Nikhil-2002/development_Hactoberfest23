import React from "react";
import Accordion from "../utils/Accordion";
import styles from "./Programs.module.css";

const ProgramsRightResponsive = ({ programs }) => {
  return (
    <>
      {programs.arr.map(({ title, body }) => {
        return (
          <div className={` ${styles.programRightResInner}`}>
            <Accordion
              isUpper={false}
              title={title}
              content={body}
              iconOpen="angle-down"
              iconClose="angle-up"
            ></Accordion>
          </div>
        );
      })}
    </>
  );
};

export default ProgramsRightResponsive;
