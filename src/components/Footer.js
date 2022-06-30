import React from "react";

function Footer() {
    return (
        <footer className="footer--contact" id="contact">
            <div className="contact-box">
                <div>
                    <h1 className="contact--title">Contacts</h1>
                    <form action="mailto:rahulradfield@gmail.com">
                        <label className="contact-mail">Mail me :
                            <input className="contact-input" type="email" placeholder="Enter your email" mailto="mail"></input>
                        </label>
                    </form>
                </div>
                <div className="contact--links">
                    <a className="contact-link">Github</a>
                    <a className="contact-link">Linked In</a>
                    <a className="contact-link">Instagram</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer