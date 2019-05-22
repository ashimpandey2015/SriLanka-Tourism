import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import trinco from './img/trinco.jpg';
import trincomalee2 from './trincomalee2';

export class trincomalee extends Component{
   
   back = e => {
    e.preventDefault();
    this.props.history.push(`/`);
}

next = e => {
    e.preventDefault();
    this.props.history.push(`trincomalee2`);
}
   
    render(){
        
        return(
        <MuiThemeProvider>  
            <React.Fragment>
            <AppBar title ="Travel"/>
             
            <br/>
             <div>
             <img src={trinco}   />
             <br/>
             <h4>Address:  66 Main St, Trincomalee 31000</h4>
             <h4> Phone : 077 773 1689</h4>
             <h4>Website </h4> https://sowmiyatravels.webs.com/
            </div>
            <br/>
             <br/>
             
             <RaisedButton
            label="Next"
            primary={true}
            styles = {styles.button}
            onClick ={this.next}
            />
             
             <RaisedButton
            label="Back"
            primary={false}
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



export default trincomalee