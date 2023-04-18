
let numero = parseInt(prompt("Qual numero pertence a sequência de Fibonacci?"));

function fibonacci(num) {
  let a = 0;
  let b = 1;
  let temp;

  while (b < num) {
    temp = a;
    a = b;
    b = temp + b;
  }

  if (b === num) {
    return true;
  } else {
    return false;
  }
}

if (fibonacci(numero)) {
  alert(numero + " pertence à sequência de Fibonacci!");
} else {
  alert(numero + " não pertence à sequência de Fibonacci.");
}
