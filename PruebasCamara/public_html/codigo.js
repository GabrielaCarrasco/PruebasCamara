$("#btnPrueba5").click(funcionBoton5);

    var video = document.querySelector('#video'), canvas = document.querySelector('#cam'),
    img=document.querySelector("#fotoDocumento");
function funcionBoton5(){
       $(":mobile-pagecontainer").pagecontainer("change", "#pbtn5");
       iniciarCamara();
      //window.addEventListener('load',iniciarCamara());
}
    $("#btnSacarFoto").click(sacarFoto);
function iniciarCamara(){
      var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    
    video= document.getElementById('video'),
   url = window.URL || 
            window.webkitURL || 
            window.mozURL || 
            window.msURL;
    
    navigator.getMedia = navigator.getUserMedia || navigator.mediaDevices.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia; 
    
    navigator.getMedia({
        video:true,
        audio:false
    }, function (stream){
        video.srcObject=stream;
        video.play();
    }, function (error){
        alert(error.code);
    });
}
 /*   var p = navigator.mediaDevices.getUserMedia({ audio: false, video: true });
p.then(function(mediaStream) {
  var video = document.querySelector('video');
  video.src = window.URL.createObjectURL(mediaStream);
  video.src=mediaStream;
  video.onloadedmetadata = function(e) {
alert ("aca");
  };
});

p.catch(function(err) { console.log(err.name); }); // always check for errors at the end.
    /*
    navigator.getUserMedia = (navigator.getUserMedia || navigator.mediaDevices.getUserMedia() || navigator.webkitGetUserMedia);
    if(navigator.getUserMedia){
        navigator.getUserMedia({video:true}, function(stream){
            //video.src= window.URL.createObjectURL(stream);
            video.src=stream;
            video.play();  
        },function(e){alert(e);})
    }else alert ("No anda ");   */
    
  //  video.addEventListener('loadedmetadata', function (){canvas.width= videoWidth; canvas.height=videoHeight;},false);
    

    

    
    
//}

    function sacarFoto(){
        alert("ACA");
          var canvas = document.getElementById('canvas');
        canvas.getContext('2d').drawImage(video,0,0);
        var imgData= canvas.toDataURL('image/png');
        img.setAttribute("src",imgData);
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
