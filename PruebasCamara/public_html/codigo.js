$("#btnPrueba5").click(funcionBoton5);

var video = document.querySelector('#video'), canvas = document.querySelector('#cam'),
        img = document.querySelector("#fotoDocumento");


function funcionBoton5() {
    $(":mobile-pagecontainer").pagecontainer("change", "#pbtn5");
    iniciarCamara();
}

function iniciarCamara() {
    
    var canvas = document.getElementById('canvas'),
            context = canvas.getContext('2d'),
            video = document.getElementById('video');
    
    navigator.getMedia = navigator.getUserMedia || 
                                        navigator.mediaDevices.getUserMedia || 
                                        navigator.webkitGetUserMedia ||
                                        navigator.mozGetUserMedia || navigator.msGetUserMedia;

    navigator.getMedia({
        video: true,
        audio: false
    }, function (stream) {
        video.srcObject = stream;
        video.play();
    }, function (error) {
        alert("Codigo" + error.code);
        alert("Mensaje"+ error.message);
    });
}

$("#btnSacarFoto").click(sacarFoto);
function sacarFoto() {
    var canvas = document.getElementById('canvas');
    canvas.getContext('2d').drawImage(video, 0, 0);
    var imgData = canvas.toDataURL('image/png');
    img.setAttribute("src", imgData);
}












function OCR() {
    Tesseract.recognize(archivo)
            .progress(function (p) {
                console.log('progress', p)
            })
            .catch(err => console.error(err))
            .then(function (result) {
                obtenerNumeroCI(result.text);
            });
}
;

function obtenerNumeroCI(texto) {
    $("#resPage1").empty();
    $("#resPage1").append(texto);
}
