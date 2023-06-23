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
var nombre_usuario=localStorage.getItem("nombre_usuario")
function sala_nueva() {
  var nombre_sala=  document.getElementById("crear_sala").value
  firebase.database().ref("/").child(nombre_sala).update({
    purpose: "agregar sala"
  })
  localStorage.setItem("nombres_salas",nombre_sala)
  consultar_nombres_salas()
}
function bye() {
    window.location="index.html"
    localStorage.removeItem("nombre_usuario")
    localStorage.removeItem("nombres_salas")
}
function consultar_nombres_salas() {
  document.getElementById("salas").innerHTML=" "
    firebase.database().ref("/").on("value",function(salas) {
        salas.forEach(function(sales) {
            nombre_cada_una_de_las_salas=sales.key
            console.log(nombre_cada_una_de_las_salas)
            html_guardar_sala="<div onclick='redirigir_sala(this.id)' id="+nombre_cada_una_de_las_salas+">"+nombre_cada_una_de_las_salas+"</div>"
            document.getElementById("salas").innerHTML+=html_guardar_sala
        })
    })
}
consultar_nombres_salas()

function redirigir_sala(el_nombre_de_la_sala) {
  window.location="otrotro.html"
  localStorage.setItem("nombres_salas",el_nombre_de_la_sala)
}