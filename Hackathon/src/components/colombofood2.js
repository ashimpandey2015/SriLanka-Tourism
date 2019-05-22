import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import PS from './img/P&S.jpg';

export class colombofood2 extends Component{
   
   back = e => {
    e.preventDefault();
    this.props.history.push(`/`);
}

   
    render(){
        
        return(
        <MuiThemeProvider>  
            <React.Fragment>
            <AppBar title ="Food"/>
             
            <h1>Resturants in Colombo</h1>

            <br/>
             <div>
             <img src={PS}   />
             <br/>
             <h4>Address: Avissawella Rd, Pannipitiya 10230</h4>
             <h4> Phone : 0112 516 038</h4>
             <h4>Website </h4> https://www.pereraandsons.com/
            </div>
            <br/>
             <br/>
             
             
             <RaisedButton
            label="Back"
            primary={true}
            styles = {styles.button}
            onClick ={this.back}
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



export default colombofood2