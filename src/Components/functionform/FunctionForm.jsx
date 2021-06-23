import React, { useState } from 'react';
import "./functionformstyles.css"

const FunctionForm = () => {


  
    const [age, setAge] = useState("")
    const [country, setCountry] = useState("")
    const [occupation, setOccupation] = useState("")

    

    const changeAge = (event) => {
        setAge(event.target.value)
    }

    const changeCountry = (event) => {
        setCountry(event.target.value)
    }

    const changeOccupation = (event) =>{
        setOccupation(event.target.value)
    }


   const handleSubmit = (event) => {
           
        console.log(age)
        console.log(country)
        console.log(occupation)
        event.preventDefault();
            
        }




    return (
        <form className="functional_section" onSubmit = {handleSubmit}>
            <h1>FUNCTIONAL FORM EXAMPLE</h1>

            <label htmlFor="age">Enter Your Age:</label>
            <input type="number" 
            name = "age" 
            value = {age} 
            onChange ={changeAge} 
            className = "age"
            />

            <br/>
            
            <label htmlFor="country">Country of Origin:</label>
            <input type="text" name = "country" value = {country} onChange = {changeCountry} />

            <br/>
            
            <label htmlFor="">Occupation</label>
            <input type="text"  value = {occupation} onChange={changeOccupation}/>

            <br/>
            <input className = "func-submit-btn" type="submit" />
        </form>
    );
}

export default FunctionForm;
