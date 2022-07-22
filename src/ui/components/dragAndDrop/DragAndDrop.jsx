import React from 'react';
import './main.css'
export const DragAndDrop = () => {
    return <div class="drop-area">
        <h2>ARRASTRA Y SUELTA IMAGENES </h2>
        <span>O</span>
        <button>Selecciona un archivo </button>
    <   input type="file" name="" id="input-file" hidden multiple  /> 
        <div id="preview"></div>
        <script src="Events.js"></script>
    </div>
}