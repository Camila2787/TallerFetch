
/* Implementar un código donde emplee callback,
recibir un numero y si el numero es mayor a 10
calcular e imprimir en otr función la suma de los números
del 1 al 100*/
function recibirNum(num) {
    
  }
  
  function procesarSuma(callback) {
    var num = parseInt(prompt("Ingrese un número"));
    if (num > 10) {
        var suma = 0;
        for (let i = 1; i <= 100; i++) {
          suma += i;
        }
        alert("La suma es: " + suma);
      }
    callback(num);
  }
  
  procesarSuma(recibirNum);