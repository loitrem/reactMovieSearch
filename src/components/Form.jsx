import React, { useState, useEffect } from 'react'

function Form(props) {

    //create a formData state to pass to the api function
const [formData, setFormData] = useState({searchTerm: ""});

    //when input value has changed
    const handleChange = (event) => {
        //sets form data to name: value for each key and value in the json that is returned
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    //when submit is clicked
    const handleSubmit = (event) => {
        //prevent page from refreshing on form submission
        event.preventDefault();
        //pass the search term to moviesearch prop, which is apps getMovie function
        props.moviesearch(formData.searchTerm);
    }

    return (
        <div>
            {/* run handle submit on submit and handle change on input change */}
            <form onSubmit={handleSubmit}>
                <input className='inputText' type="text" name="searchTerm" onChange={handleChange} value={formData.searchTerm}/>
                <input className='submitButton' type="submit" value="submit"/>
            </form>


        </div>
    )
}

export default Form