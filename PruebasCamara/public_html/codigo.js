$("#btnPrueba1").click(funcionBoton1);
$("#btnPrueba2").click(funcionBoton2);

var _visible1=false;
var _visible2=false;

function funcionBoton1(){
    if(!_visible1){
        $("#altaFoto1").show();
    }else{
        $("#altaFoto1").hide();
    }
    
    _visible1=!_visible1;
}

function funcionBoton2(){
     $(":mobile-pagecontainer").pagecontainer("change", "#pbtn2");
}



$("#btnPrueba3").click(funcionBoton3);
$("#btnPrueba4").click(funcionBoton4);


function funcionBoton3(){
    if(!_visible2){
        $("#altaFoto2").show();
    }else{
        $("#altaFoto2").hide();
    }
    
    _visible2=!_visible2;
}

function funcionBoton4(){
      $(":mobile-pagecontainer").pagecontainer("change", "#pbtn4");
}

$("#btnGuardar1").click(funcionGuardar1);
function funcionGuardar1(){
    if( document.getElementById("contenidoCam1")){
    archivo=document.getElementById("contenidoCam1").files[0];
   OCR(archivo);
    }
}

$("#btnGuardar2").click(funcionGuardar2);
function funcionGuardar2(){
  if( document.getElementById("contenidoCam2")){
    archivo=document.getElementById("contenidoCam2").files[0];
    prueba();
    }
}


$("#btnGuardar3").click(funcionGuardar3);
function funcionGuardar3(){
    if( document.getElementById("contenidoCam3")){
    archivo=document.getElementById("contenidoCam3").files[0];
   OCR(archivo);
    }
}

$("#btnGuardar4").click(funcionGuardar4);
function funcionGuardar4(){
      if( document.getElementById("contenidoCam4")){
    archivo=document.getElementById("contenidoCam4").files[0];
   prueba();
    }
}



function OCR(){
Tesseract.recognize(archivo)
  .progress(function  (p) { console.log('progress', p)  })
  .catch(err => console.error(err))
  .then(function (result) {
   obtenerNumeroCI(result.text);
  });
  };
  
function obtenerNumeroCI(texto){
    $("#resPage1").empty(); 
    $("#resPage1").append(texto);
}

function prueba(){
    alert ("Anda alert");
}

