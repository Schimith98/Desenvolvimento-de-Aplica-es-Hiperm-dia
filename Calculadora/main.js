function criarEquacao(x){
    if(document.getElementById('calc-output').innerText == 0){
        document.getElementById('calc-output').innerText = x;
    }
    else{
        document.getElementById('calc-output').innerText += x;
    }
}
function limpar(){
    document.getElementById('calc-output').innerText = 0;
}
function calcular(){
    document.getElementById("calc-output").innerText = eval(document.getElementById("calc-output").innerText);
}