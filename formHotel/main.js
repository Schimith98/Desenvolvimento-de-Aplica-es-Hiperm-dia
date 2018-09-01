

function calcular(){
    var date1 = new Date(document.getElementById('dataChegada').value);
    var date2 = new Date(document.getElementById('dataSaida').value);
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
    alert((document.getElementById('quantidadeQuartos').value * 149 * diffDays) + (60 * document.getElementById('quantidadeHospedes').value));  
    
}

function verificarEmail(){
    if(document.getElementById('email1').value != document.getElementById('email2').value){
        alert("REPITA O EMAIL CORRETAMENTE");
    }
}
