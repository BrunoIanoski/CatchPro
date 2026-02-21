const btnAbrirModal = document.querySelector('.botao-download');
const modal = document.getElementById('modalDownload');
const btnFechar = document.querySelector('.botao-fechar');

btnAbrirModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
});

btnFechar.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

document.getElementById('downloadPC').addEventListener('click', () => {
    window.open('https://drive.google.com/file/d/1_H0A-vwpACxRv7VV9azrzVThswyzcxfB/view', '_blank');
});
