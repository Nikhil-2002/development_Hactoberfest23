import styles from "./Programs.module.css";

const ProgramsList = ({ body }) => {
  return (
    <div className={styles.programsListContent}>
      {body.map((listItem) => {
        return (
          <a href="/" className={styles.programsBoxLink}>
            {listItem}
          </a>
        );
      })}
    </div>
  );
};

export default ProgramsList;
