import React from "react";

function Skills() {
    return (
        <section className="section--skills" id="skills">
            <h1 className="skills--title">My Skills</h1>
            <div className="skills-box">
                <div className="skills-skill">
                    <div className="skill-logo">{`<HTML>`}</div>
                    <h2 className="skill-name">HTML</h2>
                </div>
                <div className="skills-skill">
                    <div className="skill-logo">{`<CSS>`}</div>
                    <h2 className="skill-name">CSS</h2>
                </div>
                <div className="skills-skill">
                    <div className="skill-logo">{`<JS>`}</div>
                    <h2 className="skill-name">JAVASCRIPT</h2>
                </div>
                <div className="skills-skill">
                    <div className="skill-logo">{`<REACT>`}</div>
                    <h2 className="skill-name">REACT JS</h2>
                </div>
            </div>
        </section>
    )
}

export default Skills