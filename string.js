function inverteString(str) {
    let novoStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      novoStr += str[i];
    }
    return novoStr;
  }

  console.log(inverteString("targetsistemas"));

  /** Aqui sera outro exemplo que podemos estar usando, com o split
    
   
    function inverteString(str) {
        let arrayChars = str.split("");
        let arrayCharsInvertidos = arrayChars.reverse();
        let novoStr = arrayCharsInvertidos.join("");

        return novoStr;
}


console.log(inverteString("targetsistemas"));

   */

  