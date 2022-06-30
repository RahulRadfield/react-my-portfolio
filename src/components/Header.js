import React, { useState } from "react";

function Header() {
    const [classname, setClassName] = useState("");

    function handleClick() {
        setClassName(prevState => {
            return prevState === "show" ? "" : "show"
        })
    }

    return (
        <header className="header">
            <nav className="header--nav">
                <h2 className="nav--logo">RaHul</h2>
                <h2 onClick={handleClick} className="nav-menu-icon ">
                    <span className={classname !== `show` ? `` : `active`}></span>
                    <span className={classname !== `show` ? `` : `active`}></span>
                    <span className={classname !== `show` ? `` : `active`}></span>
                </h2>
            </nav>
            <ul className={`nav--list ${classname}`}>
                <li className="nav--list-item"><a href="#intro" onClick={handleClick} className="nav--list-link">About Me</a></li>
                <li className="nav--list-item"><a href="#projects" onClick={handleClick} className="nav--list-link">Projects</a></li>
                <li className="nav--list-item"><a href="#skills" onClick={handleClick} className="nav--list-link">Skills</a></li>
                <li className="nav--list-item"><a href="#education" onClick={handleClick} className="nav--list-link">Education</a></li>
                <li className="nav--list-item"><a href="#contact" onClick={handleClick} className="nav--list-link">Contact Me</a></li>
            </ul>
        </header >
    )
}

export default Header
