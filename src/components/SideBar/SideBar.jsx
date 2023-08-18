import React from "react";
import './SideBar.css'

export default function SideBar() {
    return (
        <div className="sidebar">
            <div className="parent">
                <div className="p1">
                    <a className="kitxt" href="#home" style={{ textDecoration: 'none' }}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-house-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                            </svg>
                        </div>
                    </a>
                    <a className="ki" href="#home" style={{ textDecoration: 'none' }}>
                        <div>Inicio</div>
                    </a>
                </div>
                <div className="p2">
                    <a className="kitxt" href="#about" style={{ textDecoration: 'none' }}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
                        </div>
                    </a>
                    <a className="ki" href="#about" style={{ textDecoration: 'none' }}>
                        <div>Datos</div>
                    </a>
                </div>
                <div className="p3">
                    <a className="kitxt" href="#resume" style={{ textDecoration: 'none' }}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-file-earmark-fill" viewBox="0 0 16 16">
                                <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3z"/>
                            </svg>
                        </div>
                    </a>
                    <a className="ki" href="#resume" style={{ textDecoration: 'none' }}>
                        <div>Currículum</div>
                    </a>
                </div>
                <div className="p4">
                    <a className="kitxt" href="#projects" style={{ textDecoration: 'none' }}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-folder-fill" viewBox="0 0 16 16">
                                <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"/>
                            </svg>
                        </div>
                    </a>
                    <a className="ki" href="#projects" style={{ textDecoration: 'none' }}>
                        <div>Proyectos</div>
                    </a>
                </div>
                <div className="p5">
                    <a className="kitxt" href="#contact" style={{ textDecoration: 'none' }}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                            </svg>
                        </div>
                    </a>
                    <a className="ki" href="#contact" style={{ textDecoration: 'none' }}>
                        <div>Contacto</div>
                    </a>
                </div>
            </div>
        </div>
    )}