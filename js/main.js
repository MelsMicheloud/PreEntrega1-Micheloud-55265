

let consulta = 1
let tratamiento1 = 0
let fecha = 0

while(consulta <= 4){
alert("Bienvenido a Ododent")
let nombre = prompt("ingresa tu nombre");
turnoDisponible()



function turnoDisponible(){
alert("Hola " + nombre)
let tratamiento = prompt("Necesitas TURNO para: ortodoncia | tratamiento | implantes | blanqueamiento")

if(tratamiento == "ortodoncia"){
    tratamiento1 = tratamiento
    alert("Turno disponible para el día Martes 25/07/2023 a las 17:30hs. precionar Enter para continuar")
    fecha = "Martes 25/07/2023 a las 17:30hs"
    let turno = prompt("¿Desea confirmar el turno?")
        if (turno == "si") {
            consola()
            consulta ++;
        }else{
            alert("turno rechazado")
            turnoDisponible()
        }
    }else if (tratamiento == "tratamiento"){
        tratamiento1 = tratamiento
        alert("Turno disponible para el día Jueves 27/07/2023 a las 15:00hs. precionar Enter para continuar")
        fecha = "Jueves 27/07/2023 a las 15:00hs."
        let turno = prompt("¿Desea confirmar el turno?")
            if (turno == "si" ) {
                alert("Turno confirmado su turno es nro " + consulta)
                consola()
                consulta ++;
            }else{
                alert("turno rechazado")
                turnoDisponible()
            }
    }else if (tratamiento == "implantes"){
        tratamiento1 = tratamiento
        alert("Turno disponible para el día Viernes 28/07/2023 a las 15:45hs. precionar Enter para continuar")
        fecha = "Viernes 28/07/2023 a las 15:45hs."
        let turno = prompt("¿Desea confirmar el turno?")
            if (turno == "si" ) {
                alert("Turno confirmado su turno es nro " + consulta)
                consola()
                consulta ++;
            }else{
                alert("turno rechazado")
                turnoDisponible()
            }
    }else if (tratamiento == "blanqueamiento"){
        tratamiento1 = tratamiento
        alert("Turno disponible para el día Martes 25/07/2023 a las 18:15hs. precionar Enter para continuar")
        fecha = "Martes 25/07/2023 a las 18:15hs."
        let turno = prompt("¿Desea confirmar el turno?")
            if (turno == "si" ) {
                alert("Turno confirmado su turno es nro " + consulta)
                consola()
                consulta ++;
            }else{
                alert("turno rechazado")
                turnoDisponible()
            }
        }
    }
}

function consola(){
    console.log("***********SU TURNO*************")
    console.log("Turno confirmado su turno es nro " + consulta)
    console.log("Su consulta es por " + tratamiento1)
    console.log("El día " + fecha)
    console.log(" ")
}


