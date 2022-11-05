import React from "react";

function Contact(){
    return(
        <div>
            <div className="contact_container">
                <h1 className="heading">Contact Me</h1>
                <p className="sub_heading">Hi there, contact me to ask about anything</p>
                <form action="">
                    <div className="form-section">
                        <div className="name-container">
                            <div className="firstname_container">
                                <label className="label_text" for="fname">First name</label><br />
                                <input id="first_name" type="text" placeholder="Enter your first name"/>
                            </div>
                            <div className="lastname_container">
                                <label className="label_text" for="lname">Last name</label><br />
                                <input id="last_name" type="text" placeholder="Enter your last name"/>
                            </div>
                        </div>
                        <div className="email_container">
                            <label className="label_text" for="email">Email</label><br />
                            <input id="email"type="text" placeholder="yourname@email.com" />
                        </div>
                        <div className="message_container">
                        <label className="label_text" for="message">Message</label><br />
                            <textarea name="message" id="message" cols="30" rows="8" placeholder="Send me a message and i will reply your as soon as posible" required></textarea>
                        </div>
                        <div className="checkbox_container">
                            <input className="checkbox" type="checkbox" />
                            <p className="checkbox_text">You agree to providing your data to kris who may contact you.</p>
                        </div>
                        <div className="submit_container">
                            <div id="btn_submit">Send message</div>
                        </div>
                        
                    </div>
                </form>
            </div>
                <div className="footerContainer">
                    <div><a href="https://internship.zuri.team/"><img src="https://internship.zuri.team/static/media/logo.36d2d48a.svg" alt="" /></a></div>
                    <p className="hng">HNG Internship 9 Frontend Task</p>
                    <div><a href="https://internship.zuri.team/"><img className="ingresive" src="https://i0.wp.com/ingressive.org/wp-content/uploads/2020/05/I4G-Logo-Color-Cropped.png?fit=2225%2C539&ssl=1" alt="ingressive good" /></a></div>
                </div>
        </div>
    );
}

export default Contact;