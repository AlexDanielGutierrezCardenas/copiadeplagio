import React from "react";
import {Text} from "./Text"
import "./Styles.css"
export const WorkView = ({autor, description, pages, image}) => {
    return (
        <div className="container-workview">
            <div className="top">
                <div className="top-autor">
                    <Text text ={`Autor ${autor}`}></Text>
                </div>
                <div className="top-details">
                    <Text text = "Ver detalles"></Text>
                </div>
            </div>
            <div className="middle">
                <div className="middle-section">
                    <div className="middle-description">
                        <Text text = {description}></Text>
                    </div>
                    <div className="middle-number-page">
                        <Text text = {`${pages} Pag.`}></Text>
                    </div>
                </div>
                <div className="middle-image">
                    <img className="image" src={image}></img>
                </div>
            </div>
        </div>
    )
}