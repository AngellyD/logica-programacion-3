function calcular(){
    const numIngreso = document.querySelector("#ingresoNum");
    const numero = Number(numIngreso.value);
    let result = 1;

    if (Number.isFinite(numero)){
        for (let i = 2; i <= Math.abs(Math.trunc(numero)); i++) {
            result *= i;
        }

        console.log(Math.abs(Math.trunc(numero)) + "! = " + result);
        numIngreso.value = "";

    } else{
        alert("¡ERROR!\nEl dato ingresado no es válido.\nIntentalo de nuevo.");
        numIngreso.value = "";
        return;
    }
}