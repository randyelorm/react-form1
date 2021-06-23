import React, { Component } from 'react';
import "./classformstyles.css"

class ClassForm extends Component {

        constructor(props) {
            super(props)
            this.state = {
                textvalue: " ",
                emailvalue: " ",
                passwordvalue: "",
              
        
        }
            

        }

        inputChange = (event) => {
            this.setState({textvalue:  event.target.value})
        }

        emailChange = (event) => {
            this.setState({emailvalue: event.target.value})
        }

        passwordChange = (event) => {
            this.setState({passwordvalue: event.target.value})
        }

        

        handleSubmit = (event) => {
           
        console.log(this.state.textvalue)
        console.log(this.state.emailvalue)
        console.log(this.state.passwordvalue)
    
        event.preventDefault();
            
        }


    render() {
        return (
            <form className ="classForm-section" onSubmit = {this.handleSubmit}>
                <h1>CLASS COMPONENT FORM EXAMPLE</h1>
               <label htmlFor="name" className="heading">Enter Your Name:</label>
               <    input type="text" 
                    value={this.state.textvalue} 
                    onChange = {this.inputChange}   
                    name ="name"
                   
               />
               <br />

               <label htmlFor="email" className="heading">Enter Your Email:</label>
               <     input type="email" 
                     value ={this.state.emailvalue} 
                     onChange = {this.emailChange} 
                     name ="email"
               />

               <br />
               <label htmlFor="password"className="heading" >Enter Your Password:</label>
               <        input type="password" 
                        value = {this.state.passwordvalue} 
                        onChange = {this.passwordChange} 
                        name ="password" 
                        className ="password"
                 />

               <br />
               <input type="submit" className="submit-btn"/>
            </form>
        );
    }
}

export default ClassForm;
