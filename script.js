function saludar(NombreDeUsuario){
    alert("Bienvenido/a " + NombreDeUsuario + " !")
}
function principal() {
    let nombre = prompt("ingrese Usuario")
    saludar(nombre)
}
   
principal()

function menu() {
    let opcion
    let total
    do {
        opcion = Number(prompt("Ingrese opción:\n1 1000 COD POINTS MEX$200.00\n2 2000 COD POINTS MEX$400.00\n3 4000 COD POINTS MEX$800\n0 salir"))
        if(opcion === 1) {
           total = AgregarAlCarrito("COD POINTS", 200, total)
        }else if(opcion === 2){
            total = AgregarAlCarrito("COD POINTS", 400, total)
        }else if(opcion === 3){
            total = AgregarAlCarrito("COD POINTS", 800, total)
        }
    } while (opcion !==0)
    
    alert("El total de su compra es de " + total)
    return total
}

menu()
