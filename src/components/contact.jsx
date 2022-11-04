import React from "react";

function Contact(){
    return(
        <div>
            <h1>Contact Me</h1>
            <p>Hi there, contact me to ask about anything</p>
            <form action="">
                <div className="form-section">
                    <div className="name-container">
                        <div className="firstname_container">
                            <label for="fname">First name</label><br />
                            <input id="firstname" type="text" placeholder="enter your first name"/>
                        </div>
                        <div className="lastname_container">
                            <label for="lname">Last name</label><br />
                            <input id="lastname" type="text" placeholder="enter your last name"/>
                        </div>
                    </div>
                    <div className="email_container">
                        <label for="email">Email</label><br />
                        <input id="email"type="text" placeholder="yourname@email.com" />
                    </div>
                    <div className="message_container">
                        <label for="message">Message</label><br />
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="send me a message and i will reply your as soon as posible"></textarea>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Contact;