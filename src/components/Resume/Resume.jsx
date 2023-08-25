import React from "react";
import './Resume.css'
import cv from '../../img/JavierRivarola.dev.cv.pdf'



window.addEventListener('scroll', function(){
    let animacion = document.getElementById('resume')
    let posicionObj1 = animacion.getBoundingClientRect().top
    let tamañoPantalla = window.innerHeight

    if (posicionObj1 < tamañoPantalla){
        animacion.style.animation = 'fade-in 1.3s ease-out both'
    }
})

export default function Resume() {
    return (
        <div id='resume'>
            <div className="title"><hr /></div>
            <div className="division">
                <div className="tit">Academic Experience</div>
                <br />
                <div className="pflex">
                    <div className="proy">
                        <b>Project<br /> Argentina Regional</b>
                        <br /> <br /> Project created for the UNICEN university, geography department.
                        <br /> <br /> On the web we find some important and necessary information about all the regions and subregions of Argentina.
                        <br /> <br /> We worked with a team of 3 people, 2 frontend and 1 backend.
                        <br /> <br />
                        <a href="#projects">+</a>
                    </div>
                    <div className="proy">
                        <b>Project <br /> HonuTalent</b>
                        <br /> <br /> Project created for the company HonuTalent.
                        <br /> <br /> The same company is in charge of contacting clients from different countries, through the web and by mail.
                        <br /> <br /> I did this project with 2 other people.
                        <a href="#projects">+</a>
                    </div>
                </div>
            </div>
            <div className="studies">
                <div className="titt">Studies</div><br />
                <div className="tudai">
                    <b>Facultad TUDAI UNICEN</b>  <br />
                    <br />Computer Applications Development, 1st year (2022-2023). <br />
                    <br/>Contents: Sql, web development, testing, backend<br />
                </div>

                <div className="educacionIT">
                    <b>Educacion IT</b> <br />
                    <br />Qa Manual <br /> 
                    <br />Selenium<br />
                    <br />SQL Server<br />
                    <br />Base de datos<br />
                </div>

                <div className="coderhouse">
                <b>CoderHouse</b>  <br />
                <br /> Full Stack Developer <br />
                <br /> Qa Manual <br />
                </div>

            </div>
            <a className="btncv" href={cv} download>
                <button>View resume</button>
            </a>
        </div>
    )}