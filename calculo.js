const faturamentoDiario = [22174.1664, 24537.6698, 26139.6134, 0.0, 0.0, 26742.6612, 0.0, 42889.2258, 46251.174, 11191.4722, 0.0, 0.0, 3847.4823, 373.7838, 2659.7563, 48924.2448, 18419.2614, 0.0, 0.0, 35240.1826, 43829.1667, 18235.6852, 4355.0662, 13327.1025, 0.0, 0.0, 25681.8318, 1718.1221, 13220.495, 8414.61];

const menorFaturamento = Math.min(...faturamentoDiario);
const maiorFaturamento = Math.max(...faturamentoDiario);

const mediaMensal = faturamentoDiario.reduce((acc, cur) => acc + cur, 0) / faturamentoDiario.length;

const diasAcimaDaMedia = faturamentoDiario.filter(faturamento => faturamento > mediaMensal).length;

console.log(`Menor faturamento diário: ${menorFaturamento}`);
console.log(`Maior faturamento diário: ${maiorFaturamento}`);
console.log(`Número de dias com faturamento acima da média mensal: ${diasAcimaDaMedia}`);
