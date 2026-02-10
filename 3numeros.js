let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
let num3 = parseFloat(prompt("Ingresa el tercer número:")); //Prompts

let numeros = [num1, num2, num3]; // Arreglo para guardar los numeros

if (num1 == num2 && num2 == num3) { // Numero uno es igual que el 2 y el 2 es igual que 3
    console.log("Los tres números son iguales."); //Se imprime en consola
    document.getElementById("resultado").innerHTML = "<p>Los tres números son iguales: " + num1 + "</p>"; //Se imprime en el DOM
} else {
    let mayorMenor = [...numeros].sort((a, b) => b - a);//sort reordena el arreglo de mayor a menor
    let menorMayor = [...numeros].sort((a, b) => a - b); //sort reordena el arreglo de menor a mayor

    let mayor = mayorMenor[0]; //Se utiliza el arreglo para obtener el mayor
    let medio = mayorMenor[1]; // El medio
    let menor = mayorMenor[2]; // El menor

    document.getElementById("resultado").innerHTML = `
        <p><strong>Mayor:</strong> ${mayor} ********* <strong>Medio:</strong> ${medio} ********* <strong>Menor:</strong> ${menor}</p>
        <p>Mayor a menor: ${mayorMenor.join(" > ")}</p>
        <p>Menor a mayor: ${menorMayor.join(" < ")}</p>
    `;
}
