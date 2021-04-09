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
  