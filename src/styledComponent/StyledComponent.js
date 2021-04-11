import { makeStyles } from "@material-ui/styles";

export const useStylesHome = makeStyles({
  main: {
    background: "#CFEDB9",
    minHeight: "100vh",
  },
  tasktype: {
    padding: "10px 0px",
   
  },
  dividerTag: {
    marginTop: "-10px",
    padding: "10px 0px",
    listStyle: "none",
    zIndex: 20,
  },
  divider: {
    marginLeft: "100px !important",
    zIndex: 10,
  },
  nodata: {
    height:"30vh",
    display: "flex",
    justifyContent:"center",
    alignItems: "center",
  },

  "@global": {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    ".MuiChip-root": {
      margin: "12px 10px 0px !important",
      height: "20px !important",
      fontWeight: 600,
      background: "white",
      padding: "0px 8px",
    },
  },
});

export const styledIncomplteTask = makeStyles({
  box: {
   
    border: "0.5px solid #9DBCF8",
    padding: "10px 15px",
    borderRadius: 5,
    margin: "10px 0px !important",
  },
  icon: {
    padding: "0px 10px",
    cursor: "pointer",
    color: "#8bc34a",
  },
  CrossIcon: {
    padding: "0px 10px",
    cursor: "pointer",
    marginLeft: "auto",
    color: "rgb(245, 0, 87)",
  },
  incomplete: {},
  complete: {
    textDecoration: "line-through",
  },
});

export const styledComplteTask = makeStyles({
  box: {
    border: "0.5px solid #9DBCF8",
    padding: "10px 15px",
    borderRadius: 5,
    margin: "10px 0px",
  },
  icon: {
    padding: "0px 10px",
    cursor: "pointer",
    color: "#8bc34a",
  },
  CrossIcon: {
    padding: "0px 10px",
    cursor: "pointer",
    marginLeft: "auto",
    color: "rgb(245, 0, 87)",
  },
  complete: {
    textDecoration: "line-through",
  },
});

export const styledInputText = makeStyles({
  "@global": {
    // You should target [class*="MuiButton-root"] instead if you nest themes.
    ".MuiOutlinedInput-input": {
      padding: "10px 15px 10px 15px !important",
    },
  },
});
