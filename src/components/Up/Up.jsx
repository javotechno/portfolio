import React from "react";
import './Up.css'

export default function Up() {
    return (
        <div className="btnup">
            <button>
                <a href="#home" style={{ textDecoration: 'none', color:"#000" }} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
                    </svg>
                </a>
            </button>
        </div>
    )}