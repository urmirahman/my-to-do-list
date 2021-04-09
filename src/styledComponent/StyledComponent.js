import { makeStyles } from "@material-ui/styles";

export const useStylesHome = makeStyles({
    main:{
     background:"black"
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
  
    "@global": {
      // You should target [class*="MuiButton-root"] instead if you nest themes.
      ".MuiChip-root": {
        margin: "0px 10px !important",
        height: "20px !important",
        fontWeight: 600,
      },
    },
  });
  
 export const styledIncomplteTask = makeStyles({
    box: {
      background: "#00c9ff" /* fallback for old browsers */,
      background:
        "-webkit-linear-gradient(to right, #00c9ff, #92fe9d)" /* Chrome 10-25, Safari 5.1-6 */,
      background: " linear-gradient(to right, #00c9ff, #92fe9d)",
      padding: "10px 15px",
      borderRadius: 5,
      margin: "10px 0px !important",
    },
    icon: {
      padding: "0px 10px",
      cursor: "pointer",
    },
    CrossIcon: {
      padding: "0px 10px",
      cursor: "pointer",
      marginLeft:"auto"
    },
    incomplete: {},
    complete: {
      textDecoration: "line-through",
    },
  });

 export const styledComplteTask = makeStyles({
    box: {
      background: "#00c9ff" /* fallback for old browsers */,
      background:
        "-webkit-linear-gradient(to right, #00c9ff, #92fe9d)" /* Chrome 10-25, Safari 5.1-6 */,
      background: " linear-gradient(to right, #00c9ff, #92fe9d)",
      padding: "10px 15px",
      borderRadius: 5,
      margin:"10px 0px"
    },
    icon: {
      padding: "0px 10px",
      cursor: "pointer",
    },
    CrossIcon: {
      padding: "0px 10px",
      cursor: "pointer",
      marginLeft:"auto"
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
  