import React from "react";

import FilmSearch from './components/FilmSearch'

import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { theme } from "./stylingTheme/ThemeProvider";
import { makeStyles } from "@material-ui/core/styles"

import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme) => ({
  root : {
  
    '& *' : {
      fontFamily: 'jost'
    }
  }

}))


const FlixDeetsApp = () => {
  
  const classes = useStyles()

  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Typography variant='h1' gutterBottom={true} align='center'>FLIX DEETS UNPLUGGED</Typography>
        <FilmSearch />
      </div>
    </ThemeProvider>
  );
}

export default FlixDeetsApp;
