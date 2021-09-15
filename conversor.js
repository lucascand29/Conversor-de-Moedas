function Converter() {
    var valorDolar = 5.25;
  
    //Peguei o valor do input
    var valorInserido = document.getElementById("valor");
    var valor = valorInserido.value;
  
    //transformei o valor da string para um float
    var valorAbsoluto = parseFloat(valor);
  
    //Mutiplicação do valor inserido com o valor do dolar
    var valorDolarParaReal = (valorAbsoluto * valorDolar).toFixed(2);
  
    var valorConvertidoDolar = document.getElementById("valorConvertidoD");
    var fraseD =
      "U$ " + valorAbsoluto + " equivale em reais R$ " + valorDolarParaReal;
    //mostrando o resultado na página
    valorConvertidoDolar.innerHTML = fraseD;
  }
  function ConverterBit() {
    var valorBitcoin = 243932.58;
  
    //Peguei somente o valor do input
    var valorInseridoBit = document.getElementById("valorBitcoin");
    var valorBit = valorInseridoBit.value;
  
    //transformei o valor da string para um float
    var valorAbsolutoBit = parseFloat(valorBit);
  
    //Mutiplicação do valor inserido com o valor do bitcoin
    var valorBitcoinParaReal = (valorAbsolutoBit * valorBitcoin).toFixed(2);
  
    var valorConvertidoBitcoin = document.getElementById("valorConvertidoB");
    var fraseB =
      +valorAbsolutoBit +
      " Bitcoins equivale em reais R$ " +
      valorBitcoinParaReal;
    //mostrando o resultado na página
    valorConvertidoBitcoin.innerHTML = fraseB;
  }
  function converterEuro() {
    var valorEuro = 6.19;
  
    var valorInseridoEuro = document.getElementById("valorEuro");
    var valorEur = valorInseridoEuro.value;
  
    var valorAbsolutoEuro = parseFloat(valorEur);
  
    var valorEuroParaReal = (valorAbsolutoEuro * valorEuro).toFixed(2);
  
    var valorConvertidoEuro = document.getElementById("valorConvertidoE");
    var fraseE = valorEur + " euros equivale em reais R$ " + valorEuroParaReal;
  
    valorConvertidoEuro.innerHTML = fraseE;
  }
  