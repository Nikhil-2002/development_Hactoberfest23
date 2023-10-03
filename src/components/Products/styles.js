import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    height: "100vh",
    display: "flex",
    padding: "4rem",
    boxSizing: "border-box",
    flexWrap: "wrap",
  },
  card: {
    height: "30%",
    width: "30%",
    margin: "1rem",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "black",
    borderRadius: "5px",
  },
  desc: {
    display: "flex",
    flexDirection: "column",
    padding: "1rem",
  },
  title: {
    color: "white",
  },
}));

export default useStyles;
