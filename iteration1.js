// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click

function logOnClick(event) {
    console.log(event);
    console.log(event.target.innerHTML);
};

document.getElementById("btnToClick").addEventListener("click", logOnClick);

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

function logOnFocus(event) {
    console.log(event);
    console.log(event.target.innerHTML);
};

document.body.addEventListener("focusin", logOnFocus);


// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

function logOnInput(event) {
    console.log(event);
    console.log(event.target.innerHTML);
};

document.body.addEventListener("input", logOnInput);