import { useState } from "react";
import styles from "./Accordion.module.css";
import ProgramsList from "../Programs/ProgramsList";

const innerContent = (isUpper, content) => {
  if (isUpper) return <p>{content}</p>;
  else return <ProgramsList body={content} />;
};

const Accordion = ({ isUpper, title, content, iconOpen, iconClose }) => {
  const [click, setClick] = useState(false);

  return (
    <div
      className={`${isUpper && styles.QuestionBox} ${
        !isUpper && styles.programBoxRes
      }`}
    >
      <div
        onClick={() => setClick(!click)}
        className={`${styles.questionBoxInner} center`}
      >
        <div
          className={`${isUpper && styles.question} ${
            !isUpper && styles.programTitle
          }`}
        >
          <p>{title}</p>
        </div>
        <div className={`${!click && styles.sign} ${click && styles.hide}`}>
          <i className={`fas fa-${iconOpen}`}></i>
        </div>
        <div className={`${!click && styles.hide} ${click && styles.sign}`}>
          <i className={`fas fa-${iconClose}`}></i>
        </div>
      </div>
      <div className={`${styles.answers} ${click && styles.open}`}>
        {innerContent(isUpper, content)}
      </div>
    </div>
  );
};

export default Accordion;
