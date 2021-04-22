import { makeStyles } from "@material-ui/styles";

export const useStylesHome = makeStyles({
  main: {
    background: "white",
    minHeight: "100vh",
    paddingBottom:"10vh",
    position:"static"
  },
  footer:{
    position:"absolute",
    top:"0",
    left:"0",
    background:"#cfcfcf",
    padding:"10px",
    width:"100%",
    display:"flex",
    justifyContent:"center"
  }
  ,
  tasktype: {
    padding: "10px 0px",
    display:"flex",
    flexWrap:"wrap"
  },
  alert:{
    display:"visible"
  },
  noalert:{
   display:"none"
    
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
    background:"#C4C4C4"
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
      background: "transparent !important",
      padding: "0px 8px",
      // color:"white"
    },
  },
});

export const styledIncomplteTask = makeStyles({
  box: {
    background: "transparent",
    border: "0.5px solid #9DBCF8",
    padding: "10px 15px",
    borderRadius: 5,
    margin: "10px 0px !important",
    // color:"white"
  },
  icon: {
    padding: "0px 10px",
    cursor: "pointer",
    color: "#9DBCF8",
  },
  CrossIcon: {
    padding: "0px 10px",
    cursor: "pointer",
    marginLeft: "auto",
    color: "#ADADAD",
  },
  incomplete: {},
  complete: {
    textDecoration: "line-through",
  },
});

export const styledComplteTask = makeStyles({
  box: {
    background: "transparent",
    
    border: "0.5px solid #9DBCF8",
    padding: "10px 15px",
    borderRadius: 5,
    margin: "10px 0px",
    // color:"white"
  },
  icon: {
    padding: "0px 10px",
    cursor: "pointer",
    color: "#9DBCF8",
  },
  CrossIcon: {
    padding: "0px 10px",
    cursor: "pointer",
    marginLeft: "auto",
    color: "#ADADAD",
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
    ".MuiFormHelperText-root ":{
      color:"red"
    },
    // ".MuiInputBase-input":{
    //   color:"white"
    // }
  },
});
