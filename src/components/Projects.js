import React from "react";

import Project from "./Project";

function Projects() {
    return (
        <section className="section--projects" id="projects">
            <h1 className="projects--title">My Projects</h1>
            <div className="projects-box">
                <Project />
                <Project />
                <Project />
            </div>
        </section>
    )
}

export default Projects