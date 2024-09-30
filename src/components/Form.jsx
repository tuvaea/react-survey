import { useState } from "react";
import PropTypes from 'prop-types';


const initialFormData = {
    colour: "",
    timeSpent: [],
    review: "",
    username: "",
    email: "",
  };

export function Form({ onSubmit }) {
    const [formData, setFormData] = useState(initialFormData);

    const handleSubmit = (event) => {
        event.preventDefault();
    
        // Call the onSubmit prop passed from Survey to submit the form data
        onSubmit(formData);
    
        // Reset form data after submission
        setFormData(initialFormData);
      };

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        if (name === "colour") {
            setFormData({ ...formData, colour: value})
        }

        if (name === 'timeSpent') {
            // If the checkbox is checked.
            if (checked) {
            setFormData((previousFormData) => ({
                ...previousFormData, 
                /*
                    Adds the value to the array.
                    [name] is a variant of "computed property names".
                    If name is a variable holding the string 'Herman',
                    then writing {[name]: value} is the same as {'Herman': value} 
                    https://ui.dev/computed-property-names 
                */
                [name]: [...previousFormData[name], value],
                }));
            } else {
                setFormData((previousFormData) => ({
                    ...previousFormData,
                    // Create a new array without the unchecked value.
                    [name]: previousFormData[name].filter((item) => item !== value),
                }));
            }
        }

        if (name === "review") {
            setFormData({ ...formData, review: value})
        }

        if (name === "username") {
            setFormData({ ...formData, username: value})
        }

        if (name === "email") {
            setFormData({ ...formData, email: value})
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>
                Tell us what you think about your rubber duck!
            </h2>
            <div className="form__group radio">
                <h3>How do you rate your rubber duck colour?</h3>
                <ul>
                    <li>
                        <input 
                        id="color-one" 
                        type="radio" 
                        name="colour" 
                        value="1"
                        checked={formData.colour === "1"} 
                        onChange={handleChange}/>
                        <label htmlFor="color-one">1</label>
                    </li>
                    <li>
                        <input 
                        id="color-two" 
                        type="radio" 
                        name="colour" 
                        value="2" 
                        checked={formData.colour === "2"}
                        onChange={handleChange}/>
                        <label htmlFor="color-two">2</label>
                    </li>
                    <li>
                        <input 
                        id="color-three" 
                        type="radio" 
                        name="colour" 
                        value="3" 
                        checked={formData.colour === "3"}
                        onChange={handleChange}/>
                        <label htmlFor="color-three">3</label>
                    </li>
                    <li>
                        <input 
                        id="color-four" 
                        type="radio" 
                        name="colour" 
                        value="4" 
                        checked={formData.colour === "4"}
                        onChange={handleChange}/>
                        <label htmlFor="color-four">4</label>
                    </li>
                </ul>
            </div>
            <div className="form__group" >
                <h3>How do you like to spend time with your rubber duck</h3>
                <ul>
                    <li>
                        <label>
                            <input
                            name="timeSpent"
                            type="checkbox"
                            value="swimming" 
                            checked={formData.timeSpent.includes("swimming")}
                            onChange={handleChange}
                            />Swimming
                        </label>
                    </li>
                    <li>
                        <label>
                            <input 
                            name="timeSpent" 
                            type="checkbox" 
                            value="bathing" 
                            checked={formData.timeSpent.includes("bathing")}
                            onChange={handleChange} 
                            />Bathing
                        </label>
                    </li>
                    <li>
                        <label>
                            <input
                            name="timeSpent"
                            type="checkbox"
                            value="chatting" 
                            checked={formData.timeSpent.includes("chatting")}
                            onChange={handleChange}
                            />Chatting
                        </label>
                    </li>
                    <li>
                        <label>
                            <input 
                            name="timeSpent" 
                            type="checkbox" 
                            value="noTime" 
                            checked={formData.timeSpent.includes("noTime")}
                            onChange={handleChange}
                            />I dont like to spend time with it
                            </label>
                    </li>
                    </ul>
            </div>
            <label>
                What else have you got to say about your rubber duck?
                <textarea
                name="review"
                cols="30"
                rows="10"
                value={formData.review}
                onChange={handleChange}
                ></textarea>
            </label>
            <label>
                Put your name here (if you feel like it):
                <input
                type="text"
                name="username"
                value={formData.username} 
                onChange={handleChange}
                />
            </label>
            <label>
                Leave us your email pretty please??
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange} />
            </label>
            <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>
    );  
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired, // onSubmit is required and should be a function
  };