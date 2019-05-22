import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from  'material-ui/RaisedButton';
import bg1 from '../components/img/bg1.jfif';

export class Index extends Component{
   continuefood = e => {
       e.preventDefault();
       this.props.history.push(`/food`);
   }

   continuetravel = e => {
    e.preventDefault();
    this.props.history.push(`/travel`);
   }

   continueaccomodation = e => {
    e.preventDefault();
    this.props.history.push(`/accomodation`);
   }

   continueactivities = e => {
    e.preventDefault();
    this.props.history.push(`/activities`);
   }

   
    render(){
        
        return(
        <MuiThemeProvider>  
            <React.Fragment>
            <AppBar title ="Ceylon Travel Buddy"/>
             
             {/* <br/>
             
             <img src={bg1}   />
             <br/> */}

             <h4>Welcome to Celyon Travel Buddy</h4>
             
             <br/>
            <RaisedButton 
            label="Food"
            primary={true}
            styles = {styles.button}
            onClick={this.continuefood}
            />
            <br/>
            <br/>

            <br/>
            <RaisedButton 
            label="Travel"
            primary={true}
            styles = {styles.button}
            onClick={this.continuetravel}
            />
            <br/>
            <br/>

            <br/>
            <RaisedButton 
            label="Accomodation"
            primary={true}
            styles = {styles.button}
            onClick={this.continueaccomodation}
            />
            <br/>
            <br/>

            <br/>
            <RaisedButton 
            label="Activities"
            primary={true}
            styles = {styles.button}
            onClick={this.continueactivities}
            />

          </React.Fragment>
        </MuiThemeProvider>
      )  
    }
}


const styles = {
    button: {
        margin: 15
    }   
}

export default Index