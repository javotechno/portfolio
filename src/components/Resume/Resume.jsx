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
            <div className="proyectos">
                <div className="tit">Experiencia Academica</div>
                <br />
                <div className="pflex">
                    <div className="proy">
                        <b>Proyecto <br /> "lorem"</b>
                        <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolore eum modi ipsa, quis dicta velit porro aliquam nemo culpa ipsam aut esse consequuntur. Veniam exercitationem obcaecati temporibus dolore vitae!.
                        <br /> <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, officia nulla minus voluptatum maiores quia voluptas ex tempore sequi dolorem voluptate modi illum cum fuga omnis quas, eos nostrum. Inventore?.
                        <br /> <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex deleniti necessitatibus aspernatur commodi harum, cum adipisci ut quod repellat non sequi dolorem iste ducimus in deserunt quia quam, quidem quibusdam?
                        <br /> <br />
                        <a href="#projects">+</a>
                    </div>
                    <div className="proy">
                        <b>Proyecto <br /> "E-commerce"</b>
                        <br /> <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab perferendis reprehenderit ullam sint, expedita numquam et quis reiciendis voluptatibus eius doloribus magnam sed impedit, itaque asperiores velit saepe laboriosam autem.
                        <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates quibusdam atque a quos dolores recusandae expedita perspiciatis? Explicabo eos praesentium quaerat commodi ut perspiciatis unde laborum quis maxime architecto.
                        <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, temporibus praesentium vero dicta id quod. Aliquid aperiam molestias odit saepe aliquam, corrupti explicabo corporis velit, ad illum a laboriosam ipsam.
                        <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aliquam iure quo dolore ullam praesentium? Adipisci doloremque repellendus pariatur, tenetur sapiente quasi ipsum dolore id dolores et officiis optio eius?
                        <br /> <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio provident exercitationem, doloribus quam ratione porro magni laudantium, fugit, maiores aperiam quas voluptate voluptatem nisi quae ex odio. Rem, exercitationem ipsa.
                        <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laudantium dolorum soluta illum nobis distinctio, assumenda saepe, nemo, aliquam debitis repellendus molestias? Sed omnis hic illo dolor, esse consectetur commodi.
                        <br /> <br />
                        <a href="#projects">+</a>
                    </div>
                </div>
            </div>
            <div className="estudios">
                <div className="titt">Estudios</div><br />
                <div className="henry">
                    <b>Facultad TUDAI UNICEN</b>  <br />
                    <br /> Full Stack Developer <br />
                    <br /> Full Stack Developer <br />
                    <br /> Full Stack Developer <br />
                    

                </div>
                <div className="autodidacta">
                    <b>Educacion IT</b> 
                     <br />Qa Manual <br /> 
                     <br />Qa Manual <br />
                     <br />Qa Manual <br />
                </div>
                <div className="tzuzul">
                <b>CoderHouse</b>  <br />
                    <br /> Full Stack Developer <br />
                    <br /> Full Stack Developer <br />
                    <br /> Full Stack Developer <br />
                </div>
            </div>
            <a className="btncv" href={cv} download>
                <button>Ver currículum</button>
            </a>
        </div>
    )}