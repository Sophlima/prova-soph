let mostraHTML = document.getElementById("mostraHTML");


function cadastro() {
 
    let nomeTime = prompt("Digite o nome do time").toUpperCase() 
   
   
    let jogador1 = prompt("Digite o nome do Jogador 1:");
    let idade1 = Number(window.prompt("Digite a idade do jogador 1:"));

    let jogador2 = prompt("Digite o nome do Jogador 2:");
    let idade2 = Number(window.prompt("Digite a idade do jogador 2:"));

    let jogador3 = prompt("Digite o nome do Jogador 3:");
    let idade3 = Number(window.prompt("Digite a idade do jogaodor 3:"));

    let media = (idade1 + idade2 + idade3) / 3;
    if (media >= 15) {
        alert("Incrição não válida!")
        return;
    }

    mostraHTML.innerHTML += `
          <h3>Time: ${nomeTime} Média de idade: ${media}</h3>
    <div class="time">
            <ul>
                <li><strong>${jogador1}, ${idade1}</strong> </li>
                <li><strong>${jogador2}, ${idade2}</strong> </li>
                <li><strong>${jogador3}, ${idade3}</strong> </li>
            </ul>
        </div> `;


}