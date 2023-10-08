import styles from "./Questions.module.css";
import { questions } from "../../constants/questions";
import Accordion from "../utils/Accordion";

const Questions = () => {
  return (
    <div className={`${styles.QuestionWrapper} center`}>
      <div className={`${styles.QuestionsWrapperInner} center`}>
        <div className={styles.QuestionsHeading}>
          <p>Common questions</p>
        </div>
        <div className={`${styles.QuestionsList} center`}>
          {questions.map(({ question, answer }) => {
            return (
              <Accordion
                isUpper={true}
                title={question}
                content={answer}
                iconOpen="plus"
                iconClose="minus"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Questions;
