import React from 'react';
import { Container,AppBar, Typography, Toolbar, Avatar, Button, Paper } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import locus from './image/locus.png';
import arr from './image/arr.png';
import usa from './image/usa.png';
import hero from './image/Hero.jpg';

import { Tabs } from "@material-ui/core";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import './App.css';


const useStyles = makeStyles((theme) => ({
   root: {
     flexGrow: 1,
     height:60,
     
   },
   img1:{
      paddingLeft:theme.spacing(6),
      paddingTop:theme.spacing(2),
      paddingBottom:theme.spacing(2),
      width: 125,
      height: 30
   },
   img2:{
      paddingLeft:theme.spacing(6),
      paddingTop:theme.spacing(3),
      paddingBottom:theme.spacing(2),
      width: 24,
      height: 24
   },
   img3:{
      paddingLeft:theme.spacing(1),
      paddingTop:theme.spacing(0),
      paddingBottom:theme.spacing(2),
      width: 10,
      height: 10
   },
   
   menuButton: {
     marginRight: theme.spacing(2),
   },
   title: {
     flexGrow: 1,
   },
   tab: {
      paddingTop:theme.spacing(1),
      color: '#58595B'
   },
    
 }));

 
 

function App() {
   const classes = useStyles();


  return (
    <section class="hro">
    <section className={classes.root}>
      <AppBar position="static" style={{backgroundColor: '#FFFFFF'}} elevation={0} >
        <Toolbar>
          <Grid justify={"space-between"} container>
            <Grid xs={3} item>
               <Button></Button>
              <img
                className={classes.img1}
                src={locus}
                alt="Bosch Logo"
              />
            </Grid>
            <Grid xs={6} item>
              <Grid container justify={"center"}>
              <Tabs aria-label="Navigation Tabs" className={classes.tab}> 
                  <Tab label={"PRODUCTS"} />
                  <Tab label={"SOLUTIONS"} />
                  <Tab label={"RESOURCES"} />
                  <Tab label={"COMPANY"} />
                </Tabs>
              </Grid>
            </Grid>
            
            <Grid xs={2} item>
               
              <img
                className={classes.img2}
                src={usa}
                alt="usa"
              />
              <img
                className={classes.img3}
                src={arr}
                alt="arr"
              />

            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </section>
    <section class="funding-banner d-none d-md-flex">
   <div class="container">
      <div class="row align-items-center">
         <div class="offset-md-1-5  col-md-7">
            <span>Can you find the shortest route? </span>
            <h2>Test your routing skills with #TheLocusWay</h2>
         </div>
         <div class="col-md-2">
            <a href="/world-logistics-day/" class="cmn-btn" target="_blank" onclick="var otherWindow = window.open(); otherWindow.opener = null; otherWindow.location = href; return false;">#LogisticsDay2021</a>
         </div>
      </div>
   </div>
</section>

  <img src={hero} class="hr"/>
  
   </section>
    )
}

export default App;
