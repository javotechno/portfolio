import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import Resume from "../Resume/Resume";

export default function Index() {
    return (
        <div>
            <Home />
            <About />
            <Resume />
            <Projects />
            <Contact />
        </div>
    )}