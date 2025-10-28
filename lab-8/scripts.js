function calcularSuma() {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    const num3 = parseFloat(document.getElementById('num3').value) || 0;
    const suma = num1 + num2 + num3;
    document.getElementById('resultado1').textContent = `La suma de los valores ingresados es: ${suma}`;
}

function calcularCuadrado() {
    const numero = parseFloat(document.getElementById('numeroCuadrado').value);
    if (isNaN(numero)) {
        alert('Por favor, ingrese un número válido');
        return;
    }
    const cuadrado = numero * numero;
    document.getElementById('resultado2').textContent = `El cuadrado de ${numero} es: ${cuadrado}`;
}

function calcularPromedio() {
    const nombre = document.getElementById('nombreEstudiante').value.trim();
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    
    if (nombre === '') {
        alert('Por favor, ingrese el nombre del estudiante');
        return;
    }
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert('Por favor, ingrese todas las calificaciones válidas');
        return;
    }
    
    const promedio = ((nota1 + nota2 + nota3) / 3).toFixed(2);
    document.getElementById('resultado3').textContent = `El promedio de ${nombre} es: ${promedio} puntos`;
}

function convertirUnidades() {
    const metros = parseFloat(document.getElementById('metros').value);
    if (isNaN(metros)) {
        alert('Por favor, ingrese un valor válido en metros');
        return;
    }
    const centimetros = metros * 100;
    const kilometros = metros / 1000;
    document.getElementById('resultado4').textContent = `${metros} metros equivalen a ${centimetros} centímetros y ${kilometros} kilómetros.`;
}

function compararValores() {
    const valorA = parseFloat(document.getElementById('valorA').value);
    const valorB = parseFloat(document.getElementById('valorB').value);
    
    if (isNaN(valorA) || isNaN(valorB)) {
        alert('Por favor, ingrese ambos números válidos');
        return;
    }
    
    if (valorA > valorB) {
        document.getElementById('resultado5').textContent = `El número mayor es ${valorA}, el menor es ${valorB}, y su diferencia es ${valorA - valorB}.`;
    } else if (valorB > valorA) {
        document.getElementById('resultado5').textContent = `El número mayor es ${valorB}, el menor es ${valorA}, y su diferencia es ${valorB - valorA}.`;
    } else {
        document.getElementById('resultado5').textContent = `Ambos números son iguales: ${valorA}`;
    }
}