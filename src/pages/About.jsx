import { useState } from 'react';
import './About.css'

function About() {
    //contactVisible
const [contactVisible, setContactVisible] = useState(false);
    function showData() {
        setContactVisible(!contactVisible);
    }
    return (
        <div className="about page">
            <h3>Andrew Reyna</h3>
            {contactVisible ? <div className="box">
                <p>
                    contact me by email:<b>1711ajreyna@gmail.com</b>
                </p>
            </div> :null }
            <button onClick={showData} className="btn btn-outline-dark">view contact info
            </button>
        </div>
    );
}

export default About;