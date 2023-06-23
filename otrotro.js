var firebaseConfig = {
    apiKey: "AIzaSyA8Y1Q1AFxkW5bbb9fySVF9iraQqvLipMc",
    authDomain: "feisbuk-b1ea3.firebaseapp.com",
    databaseURL: "https://feisbuk-b1ea3-default-rtdb.firebaseio.com/",
    projectId: "feisbuk-b1ea3",
    storageBucket: "feisbuk-b1ea3.appspot.com",
    messagingSenderId: "1094764421639",
    appId: "1:1094764421639:web:f645d6ed56d7a7de4d40a2"
  };
  
firebase.initializeApp(firebaseConfig);
function bye() {
    window.location="otro.html"
    localStorage.removeItem("nombres_salas")
}

var guardar_mensaje
var recuperar_nombre_usuario=localStorage.getItem("nombre_usuario")
var recuperar_nombre_sala=localStorage.getItem("nombres_salas")

function enviar_texto(){
    guardar_mensaje=document.getElementById("texto").value
    firebase.database().ref(recuperar_nombre_sala).push({
        guardar_mensaje_faierbeis:guardar_mensaje,
        nombre_otra_persona:recuperar_nombre_usuario
    })
    document.getElementById("texto").value=""
}
function recuperar_mensajes() {
    firebase.database().ref("/"+recuperar_nombre_sala).on("value",function (guardar_cosas_sala){
        document.getElementById("mensajes").innerHTML=""
        guardar_cosas_sala.forEach(function (guardar_carpetita_mensajes){
            key_del_mensaje=guardar_carpetita_mensajes.key
            nombre_y_mensaje=guardar_carpetita_mensajes.val()
            if (key_del_mensaje!="purpose") {
                var guardar_codigo_del_mensaje=key_del_mensaje
                var carpetita_del_mensaje=nombre_y_mensaje

                var nombre=carpetita_del_mensaje["nombre_otra_persona"]
                var mensaje=carpetita_del_mensaje["guardar_mensaje_faierbeis"]
                var h2_nombre="<h2> "+nombre+" </h2>"
                var h3_mensaje="<h3>"+mensaje+"</h3>"
                document.getElementById("mensajes").innerHTML+=h2_nombre+h3_mensaje
            }
        })
    })
}
recuperar_mensajes()