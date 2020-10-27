
let botao = document.querySelector('.botao');

botao.addEventListener("click", function(event) {
    event.preventDefault();
    let data_inicio = document.querySelector('.data_inicio').value;
    let data_fim = document.querySelector('.data_fim').value;
    let cidade = document.querySelector('.cidade').value;
    let pessoa = document.querySelector('.pessoa').value;

    let mes1 = data_inicio.substr(-7, 2);
    let ano1 = data_inicio.substr(3,7);
    let mes2 = data_fim.substr(-7, 2);
    let ano2 = data_fim.substr(3,7);

 
    const url = "https://cors-anywhere.herokuapp.com/http://www.portaltransparencia.gov.br/api-de-dados/despesas/recursos-recebidos?mesAnoInicio="+mes1+"%2F"+ano1+"&mesAnoFim="+mes2+"%2F"+ano2+"&codigoIBGE="+cidade+"&nomeFavorecido="+pessoa+"&&pagina=1";

    fetch(url,{
        method:"GET",
        headers: {
            "chave-api-dados":"f0784338970da7cde9134af0ad116738",
            "Accept": "*/*",
            "Access-Control-Allow-Origin": "*"
        } 
    }).then(result => result.json())
    //.then(result => console.log(result));
    .then(result => {
        if (result[0]==null) {
            document.querySelector(".resultado").innerHTML = "Não há resultados para a pesquisa, favor verifique os dados informados e tente novamente!";
        }else{
            document.querySelector(".resultado").innerHTML ="";
            console.log(result);
            for (let i = 0; i < result.length; i++) {
                let mes = result[i].anoMes.toString();
                document.querySelector(".resultado").innerHTML += "Nome Completo: "+result[i].nomePessoa+"           -         Valor Recebido: R$"+result[i].valor+",00           -         Mês: "+result[i].anoMes.toString().substr(-2)+"/"+result[i].anoMes.toString().substr(0,4)+"<br>";
                
            }
        }
    });
    

    


    

});

