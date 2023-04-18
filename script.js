const faturamentoMensal = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
  };
  
  const totalFaturamento = Object.values(faturamentoMensal).reduce((total, valor) => total + valor);

  const representacaoEstados = {};
  for (let estado in faturamentoMensal) {
    representacaoEstados[estado] = ((faturamentoMensal[estado] / totalFaturamento) * 100).toFixed(2) + "%";
  }
  
  // Imprime os resultados
  console.log("Faturamento mensal total: R$", totalFaturamento.toFixed(2));
  console.log("Percentual de representação por estado:");
  console.log(representacaoEstados);

  /** Segue outro modelo de conseguir gerar o mesmo resultado, de forma mais rapida, porém pouco intuitiva.
   
   
    valorTotal = 67836.43 + 36678.66 + 29229.88 + 27165.48 + 19849.53
    valorTotal = 180760.98

        percentualSP = (67836.43 / 180760.98) * 100
        percentualRJ = (36678.66 / 180760.98) * 100
        percentualMG = (29229.88 / 180760.98) * 100
        percentualES = (27165.48 / 180760.98) * 100
        percentualOutros = (19849.53 / 180760.98) * 100

        console.log(`Percentual de representação de SP: ${percentualSP.toFixed(2)}%`)
        console.log(`Percentual de representação de RJ: ${percentualRJ.toFixed(2)}%`)
        console.log(`Percentual de representação de MG: ${percentualMG.toFixed(2)}%`)
        console.log(`Percentual de representação de ES: ${percentualES.toFixed(2)}%`)
        console.log(`Percentual de representação de Outros: ${percentualOutros.toFixed(2)}%`)

    

   */