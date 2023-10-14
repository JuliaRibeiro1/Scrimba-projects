//ESSSA FUNÇÃO TEM O OBJETIVO DE VERIFICAR SE É UMA COR ESCURA OU NÃO, QUE SERÁ IMPORTANTE PARA DETERMINAR A COR DO TEXTO SOBRE A COR DE FUNDO RETORNADO PELO API
function lightOrDark(color) { //https://gist.github.com/krabs-github/ec56e4f1c12cddf86ae9c551aa9d9e04
    let r;
    let g;
    let b;
    let hsp;
  
       color = +("0x" + color.slice(1).replace( 
        color.length < 5 && /./g, '$&$&'
      )
               )
      r = color >> 16;
      g = color >> 8 & 255;
      b = color & 255;


    hsp = Math.sqrt(
      0.299 * (r * r) +
      0.587 * (g * g) +
      0.114 * (b * b)
    );
  

    if (hsp>127.5) {
  
      return true;
    } 
    else {
  
      return false;
    }
  }

function setRandomColor() { // IRÁ RETORNAR UMA COR ALEATÓRIA COM "#" NA FRENTE
    let colorCharacters = '0123456789ABCDEF'
    let color = "#"
    for (let i = 0; i < 6; i++) {
      color += colorCharacters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

export { setRandomColor,lightOrDark } 
  