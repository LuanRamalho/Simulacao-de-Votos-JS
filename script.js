let totalA = 0;
let totalB = 0;

function contabilizarVotos() {
    const votosA = parseInt(document.getElementById('votosA').value) || 0;
    const votosB = parseInt(document.getElementById('votosB').value) || 0;

    totalA += votosA;
    totalB += votosB;

    const totalGeral = totalA + totalB;

    const percentualA = totalGeral > 0 ? ((totalA / totalGeral) * 100).toFixed(2) : 0;
    const percentualB = totalGeral > 0 ? ((totalB / totalGeral) * 100).toFixed(2) : 0;

    document.getElementById('totalA').textContent = `Total de Votos do Candidato A: ${totalA}`;
    document.getElementById('totalB').textContent = `Total de Votos do Candidato B: ${totalB}`;
    document.getElementById('totalGeral').textContent = `Total de Votos Geral: ${totalGeral}`;
    document.getElementById('percentualA').textContent = `Percentual de Votos do Candidato A: ${percentualA}%`;
    document.getElementById('percentualB').textContent = `Percentual de Votos do Candidato B: ${percentualB}%`;

    document.getElementById('barraA').style.width = `${percentualA}%`;
    document.getElementById('barraB').style.width = `${percentualB}%`;

    document.getElementById('textoA').textContent = `${percentualA}%`;
    document.getElementById('textoB').textContent = `${percentualB}%`;

    document.getElementById('votosA').value = '';
    document.getElementById('votosB').value = '';
}
