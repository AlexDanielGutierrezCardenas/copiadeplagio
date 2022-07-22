const dropArea = document.querySelector(".drop-area");
const dragText = dropArea.querySelector("h2");
const button = dropArea.querySelector("button"); 
const input = dropArea.querySelector("#input-file");
let files;


button.addEventListener("click", e =>{
    input.click();
});
input.addEventListener("change",(e) => {
    files =this.files;
    dropArea.classList.add("active");
    showFiles(files);
    dropArea.classList.remove("active");
});
dropArea.addEventListener("dragover",(e) => {
    e.preventDefault();
    dropArea.classList.add("active");
    dragText.textContent = "s­uelta para subir los archivos";
});

dropArea.addEventListener("dragleave",(e) => {
    e.preventDefault();
    dropArea.classList.remove("active");
    dragText.textContent ="arrastra y suelta imagenes";
});

dropArea.addEventListener("drop",(e) => {
    e.preventDefault();
    files = e.dataTransfer.files;
    showFiles(files);
    dropArea.classList.remove("active");
    dragText.textContent ="arrastra y suelta imagenes";
});

function showFiles(files){
    if (files.length = undefined){
        processFile(files);
    } else {
        
        for(const file of files){
            processFile(file);
        }
    }
    
}

