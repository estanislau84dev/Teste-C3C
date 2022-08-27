function calculaNota(){
    var aluno = document.querySelector('#aluno').value;
    var nota = document.querySelector('#nota').value;

    var inteiroNota;    
    
    inteiroNota = Math.floor(nota/5);
    
    var arredondaNota = (inteiroNota + 1) * 5;
    
    if(arredondaNota - nota < 3){
        nota = arredondaNota;
    }
    
    if(nota >= 40){
        document.querySelector('#resultado').innerHTML = "O aluno " + aluno + " está aprovado e sua nota foi: " + nota;
    }
    else{
        document.querySelector('#resultado').innerHTML = "O aluno " + aluno + " está reprovado e sua nota foi: " + nota;
    }
}