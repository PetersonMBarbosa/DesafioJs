class Desafio {  

  //QUESTÃO 01
  calcularTriangulo(lado1, lado2, lado3) {
    let tipo;
    if(lado1 == lado2 == lado3) {
      tipo = 'Equilátero';
    } else if ((lado1 == lado2 && lado2 != lado3) || (lado1 != lado2 && lado2 == lado3) || (lado1 == lado3 && lado2 != lado1)) {
      tipo = 'Isósceles';
    } else {
      tipo = 'Escaleno';
    }
    
    return tipo;
  }

  //QUESTÃO 02
  calcularBhaskara(a, b, c){

    let delta = (b*b) - 4*a*c;

    if (delta>0){
      let raiz1 = (-b + Math.sqrt(delta) )/(2*a);
      let raiz2 = (-b - Math.sqrt(delta) )/(2*a);

      return [raiz1, raiz2];
    }else if (delta==0){
        let raiz = (-b + Math.sqrt(delta) )/(2*a);
        return [raiz, raiz];
    }else{
      return "Delta é negativo";
    }
  }

  //QUESTÃO 03
  calcularNotas(nota) {
    let resultado;
    let notaArredondada;
    
    if(nota < 38) {
      resultado = 'Reprovado. Nota: ' + nota;
    } else {
      let proximoMultiploCinco = Math.ceil(nota / 5) * 5;
      let diferenca = proximoMultiploCinco - nota;
      if(diferenca < 3) {
        notaArredondada = proximoMultiploCinco;
      } else {
        notaArredondada = nota;
      }
      resultado = 'Aprovado. Nota: ' + notaArredondada;
    }
    
    return resultado;
  }


  //QUESTÃO 04
  calcularLuidyMoura(valor) {
    let retorno = [];
    
    for(let i = 1; i <= valor; i++) {
      if(i % 5 === 0 && i % 9 === 0){
        retorno.push('LuidyMoura');
      } else if(i % 5 === 0) {
        retorno.push('Luidy');
      } else if (i % 9 === 0){
        retorno.push('Moura');
      } else {
        retorno.push(i);
      }
    }
    
    return retorno;
  }

}