let jogadorAtual = "player1"
let jogador1 = '<img src="img/x.png" alt="" width="50px">'
let jogador2 = '<img src="img/o.png" alt="" width="50px">'
let vezJogador = document.querySelector('#tagimg');
let ganhador = '';


//detecta o click e executa as funçoes
clicou = (id) =>{
    posicao = id;  
    marcou(); 
    mostraVez();
    gameOver();
}

mostraVez = () =>{
    if(jogadorAtual === 'player1'){
        vezJogador.src = 'img/x.png';        
    }else{
        vezJogador.src = 'img/o.png'
    }
}

mostraVez();

marcou = () =>{
    if(jogadorAtual === 'player1'){
        let jogada = document.querySelector('#'+posicao);
        jogada.innerHTML = jogador1;
        jogadorAtual = 'player2'
    }else{
        
        let jogada = document.querySelector('#'+posicao);
        jogada.innerHTML = jogador2
        jogadorAtual = 'player1'
    }
}

verificar = (v1, v2, v3) => {
    if(document.querySelector('#'+v1).innerHTML === jogador1 && document.querySelector('#'+v2).innerHTML === jogador1 && document.querySelector('#'+v3).innerHTML === jogador1 ){
        ganhador = 'player1'
    }else if (document.querySelector('#'+v1).innerHTML === jogador2 && document.querySelector('#'+v2).innerHTML === jogador2 && document.querySelector('#'+v3).innerHTML === jogador2){
        ganhador = 'player2'
    }
}

gameOver= () => {
    //verifica ganhador na horizontal
    verificar('a1', 'a2', 'a3');
    verificar('b1', 'b2', 'b3');
    verificar('c1', 'c2', 'c3');

    //verifica ganhador na vertical
    verificar('a1', 'b1', 'c1');
    verificar('a2', 'b2', 'c2');
    verificar('a3', 'b3', 'c3');

    //verifica ganhador na diagontal
    verificar('a1', 'b2', 'c3');
    verificar('a3', 'b2', 'c1');
    
    if(ganhador === 'player1'){
        document.querySelector('#placar').style.visibility = "visible";
        document.querySelector('#texto').innerHTML ='Jogador '+jogador1+' venceu!!!'
    }else if(ganhador === 'player2'){
        document.querySelector('#placar').style.visibility = "visible";
        document.querySelector('#texto').innerHTML = 'Jogador '+jogador2+' venceu!!!'
    }
}

reiniciar = () =>{
    location.reload();    
}