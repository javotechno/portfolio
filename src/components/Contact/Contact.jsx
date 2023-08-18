import './Contact.css'
import React, { useState } from "react";
import axios from "axios";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Toaster, toast} from "react-hot-toast";

window.addEventListener('scroll', function(){
  let animacion = document.getElementById('contacto')
  let posicionObj1 = animacion.getBoundingClientRect().top
  let tamañoPantalla = window.innerHeight

  if (posicionObj1 < tamañoPantalla){
      animacion.style.animation = 'fade-in 1.3s ease-out both'
  }
})

function Contact() {

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };

  // CORROBORAR A DONDE MANDARLO.

  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "", 
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, <p className='enviado'>Enviado con éxito! Te responderé pronto</p>, form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  return (
    <div id="contacto" >
      <div className="title"> <hr /></div>
      <div className="tit">CONTACTAME</div>
      <br />
      <div id='contact'>
        <div className="grid">
            <div id='lat' className="lateral">
                <div className="df3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#ddcfcf" className="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                    </svg>
                </div>
                <div className="df8">
                  <CopyToClipboard text='kimey.-@hotmail.com'>
                  <p onClick={() => toast.success("Copiado al portapapeles", {
                                      position: "top-center",
                                      style: {
                                        color: '#fff',
                                        background: '#000'
                                      }
                                    }) }>
                   nacho.rivarola@hotmail.com
                  </p> 
                  </CopyToClipboard>
                  <Toaster />
                </div>
            </div>
            <div id='big' className="big">
              <form onSubmit={handleOnSubmit} autoComplete="off">
                <div className="name">
                  <input id="Nombre" type="text" name="Nombre" placeholder="Nombre" required />
                </div>
                <div className="email">
                  <input id="Email" type="email" name="Email" placeholder="Email" required />
                </div>
                <div className="asunto">
                  <input id="Asunto" type="text" name="Asunto" placeholder="Asunto" required />
                </div>
                <div className="msje">
                  <textarea id="Mensaje" name="Mensaje" placeholder="Mensaje" cols="30" rows="8" required></textarea>
                </div>
                <button className="btn" type="submit" disabled={serverState.submitting}>
                  Enviar
                </button>
                {serverState.status && (
                  <p id='enviadoexito' className={!serverState.status.ok ? "errorMsg" : ""}>
                    {serverState.status.msg}
                  </p>
                )}
              </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
