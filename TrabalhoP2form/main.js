function verificarEmail(){
    if(document.getElementById('email1').value != document.getElementById('email2').value){
        alert("REPITA O EMAIL CORRETAMENTE");
    }
}
function verificarSenha(){
    if(document.getElementById('senha1').value != document.getElementById('senha2').value){
        alert("REPITA ASENHA CORRETAMENTE");
    }
}

function verificarCheckBox() {
    var check = document.getElementsByName("resp2"); 
    var x = 0;
    for (var i=0;i<check.length;i++){ 
        if (check[i].checked == true){ 
            x++;
        }
    }
    if(x == 0){
        alert("Você não deseja aprender nada");
    }
}
