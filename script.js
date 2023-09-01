const navMenu = document.querySelector('.menu')
const navBotao = document.querySelector('.navBotão')


navBotao.addEventListener('click', (e) => {
    navBotao.classList.toggle("ativo")
    navMenu.classList.toggle("ativo")
})