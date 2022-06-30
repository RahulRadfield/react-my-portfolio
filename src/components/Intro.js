import React from "react";

function Intro() {
    return (
        <section className="section--intro" id="intro">
            <div className="intro-box">

                <div className="intro-design">
                    <div className="before"></div>
                    <div className="intro--image"></div>
                    <div className="after"></div>
                </div>
                <div className="intro--text">
                    <h1 className="intro-title">I'm Rahul</h1>
                    <h2 className="intro-subtitle">Web Developer</h2>
                    <p className="intro-desc">I'm a passionate <strong>Web Developer</strong> who loves to create websites and learning new stuff.</p>
                </div>
            </div>
        </section>
    )
}

export default Intro