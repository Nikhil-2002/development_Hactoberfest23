import React from "react";
import styles from "./Programs.module.css";
import ProgramsList from "./ProgramsList";

const ProgramsRight = ({ programs }) => {
  return (
    <div className={`${styles.programsRight} center`}>
      {programs.arr.map(({ title, body }) => {
        return (
          <div className={`${styles.programsBox} center`}>
            <p className={styles.programsBoxTitle}>{title}</p>
            <ProgramsList body={body} />
          </div>
        );
      })}
    </div>
  );
};

export default ProgramsRight;
