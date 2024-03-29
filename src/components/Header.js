import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import avatar from "../avatar.png";

//CSS Styles

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title:{
      color:"tomato"
  },
  subtitle:{
      color:"tan",
      marginBottom:"3rem"
  },
  typedContainer:{
      position:"absolute",
      top:"50%",
      left:"50%",
      transform:"translate(-50%,-50%)",
      width: "100vw",
      textAlign:"center",
      zIndex:1
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
    <Grid container justify ="center">
    <Avatar className={classes.avatar} src={avatar} alt="Lokesh Dhanasekar" />
    </Grid>
     
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Lokesh Dhanasekar"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={["Java - SpringBoot", "Micro-Services","Amazon Web Services", "React JS",
           "Docker", "OpenShift", "ETL - IBM DataStage" ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
