let pesoEle = 0;

const textoEle = document.getElementById('statusElevador');
const displayContador = document.getElementById('contador');
const btnEntrada = document.getElementById('btnEntrar');
const btnReiniciar = document.getElementById('btnReiniciar');
const portaEle = document.getElementById('porta');

btnEntrada.addEventListener('click', () => {
 
if (pesoEle >= 400 ) {
    textoEle.innerText = "O peso do elevador já está no limite!";
    portaEle.style.backgroundColor = "#58594B";
    btnEntrada.setAttribute('disabled', '');
    displayContador.setAttribute('disabled', '');
    alert("SOBRECARGA!");
} else {
    pesoEle = pesoEle + 100;
    displayContador.innerText = pesoEle;
}
});

btnReiniciar.addEventListener('click', () => {
    pesoEle = 0;
    displayContador.innerText = pesoEle;
    portaEle.style.backgroundColor = "#ffebcd";
    textoEle.innerText = "Elevador pronto para entrada!";
    btnEntrada.removeAttribute('disabled', '');
    displayContador.removeAttribute('disabled', '');
});