let mostraHTML = document.getElementById("mostraHTML");

function cadastro() {
   let nomeTime = prompt("Digite o nome do time").toUpperCase() 
   mostraHTML.innerHTML += `<p>O time ${nomeTime} está cadastrado!</p>`
   
    let jogador1 = prompt("Digite o nome do Jogador 1:");
    let idade1 = prompt(`Digite a idade de ${jogador1}:`);

    let jogador2 = prompt("Digite o nome do Jogador 2:");
    let idade2 = prompt(`Digite a idade de ${jogador2}:`);

    let jogador3 = prompt("Digite o nome do Jogador 3:");
    let idade3 = prompt(`Digite a idade de ${jogador3}:`);

   
    mostraHTML.innerHTML += `
        <div class="time">
            <h3>${nomeTime}</h3>
            <ul>
                <li><strong>${jogador1}, ${idade1}</strong> </li>
                <li><strong>${jogador2}, ${idade2}</strong> </li>
                <li><strong>${jogador3}, ${idade3}</strong> </li>
            </ul>
        </div> `;


}