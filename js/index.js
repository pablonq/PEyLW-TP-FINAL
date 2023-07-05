/******MENU FIJO*********/

window.addEventListener('scroll', function() {
    var menuContainer = document.getElementById('menu-container');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      menuContainer.classList.add('fixed-menu');
    } else {
      menuContainer.classList.remove('fixed-menu');
    }
  });
  /************CARRITO************/
 
  function multiplicacionfilas() {
    var tabla = document.getElementById('tablaProductos');
var filas = tabla.getElementsByTagName('tr');
var total=0;
for (var i = 1; i < filas.length; i++) {
  var fila = filas[i];
  var cantidadInput = fila.cells[2].querySelector('input');
  var cantidad = parseFloat(cantidadInput.value);
  var precio = parseFloat(fila.cells[3].textContent);
  
  var subtotal = cantidad * precio;
  var textarea = fila.cells[4].querySelector('textarea');
  textarea.value = subtotal;
total+=subtotal;

}
salida=document.getElementById("salidatotal");
  
	salida.value+=total;
  }
  /****************VALIDACION CONSULTA***************** */
  function validar() {
    

if(nombre()){
   document.getElementById("nombre").style.borderColor = "";
}

if( apellido()){
   document.getElementById("apellido").style.borderColor = "";
}
if( mail()){
   document.getElementById("email").style.borderColor = "";
}


if(nombre()&&apellido()&&mail()){    alert('GRACIAS POR SU CONSULTA!!');
}
   
}  
  
  
    function nombre(){
           if (document.getElementById("nombre").value == "") {
               document.getElementById("nombre").style.borderColor = "red";
               return false;
             }else{
               return true;
             }
         }
    function apellido(){
           if (document.getElementById("apellido").value == "") {
               document.getElementById("apellido").style.borderColor = "red";
               return false;
             }else{
               return true;
             }
         }
    function mail(){
           if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value) || document.getElementById("email").value == "" ) {
               document.getElementById("email").style.borderColor = "red";
               return false;
               } else {
                   return true;
               }
         }
   
/*******MODO NOCTURNO************/
var botonModoNocturno = document.getElementById('modoNocturno');
var body = document.body;

botonModoNocturno.addEventListener('click', function() {
  body.classList.toggle('modo-nocturno');
});
