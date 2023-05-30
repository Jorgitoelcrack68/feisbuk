function clickinisiarsesion() {
    var usuario_kiere_inisiar_sesion=document.getElementById("names").value
    localStorage.setItem("nombre_usuario",usuario_kiere_inisiar_sesion)
    window.location="otro.html"
}