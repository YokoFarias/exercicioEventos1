const botao = document.getElementById('myButton');
const paragrafo = document.getElementById('paragrafo');
botao.addEventListener('click', function(){
    paragrafo.texContent = 'Texto alterado!'
    paragrafo.style.color = 'red'

}) 

