import React from "react";
import UofM from './assets/UofM.png'
import Cli from './assets/Cli.png'
import htmlCert from './assets/htmlCert.png'
import javaScript from './assets/javaScript.png'
import responsiveCSS from './assets/responsiveCSS.png'
import ReactCert from './assets/ReactCert.png'
import PhaserJS from './assets/phaserJS.png'
import './Certificates.css'

export default function Certificates() {
    return (
        <div>
            <div className="container">
                <div className="img-container">
                    <img src={UofM} alt="uofm"></img>
                </div>
                <div className="img-container">
                    <img src={PhaserJS} alt="PhaserJS"></img>
                </div>
                <div className="img-container">
                    <img src={javaScript} alt="javaScript"></img>
                </div>
                <div className="img-container">
                    <img src={ReactCert} alt="ReactCert"></img>
                </div>
                <div className="img-container">
                    <img src={htmlCert} alt="htmlCert"></img>
                </div>
                <div className="img-container">
                    <img src={Cli} alt="Cli"></img>
                </div>
                <div className="img-container">
                    <img src={responsiveCSS} alt="responsiveCSS"></img>
                </div>
            </div>
        </div>
    );
}