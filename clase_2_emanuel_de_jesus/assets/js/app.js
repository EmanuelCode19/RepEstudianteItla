const formulario = document.querySelector('#my-form')

function configuracion(e){
    e.preventDefault()
     
    const inputs = e.target.elements;
    
    const color = inputs["colorFondo"].value;
    const font = inputs["font"].value;
    const height = inputs["height"].value;
    const width = inputs["width"].value;
    const message = inputs["mensaje"].value;

    const caja = document.querySelector('#caja')

    caja.style.backgroundColor = color;
    caja.style.fontSize = font + 'px';
    caja.style.height = height + 'px';
    caja.style.width = width + 'px';
    caja.textContent = message;

}

formulario.addEventListener('submit',configuracion)

