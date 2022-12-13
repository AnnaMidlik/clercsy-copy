const btn = document.querySelector('.toggle-collapse');
const navbar = document.querySelector('.navbar-nav')
const startBtn = document.querySelector('#start-btn')

btn.addEventListener('click', (e) => {
  e.stopPropagation()
  navbar.classList.toggle('active')
  startBtn.classList.remove('btn')

})

window.addEventListener('click', (e) => {
  if (!e.target.matches('.navbar-nav') && !e.target.matches('.icon')) {
    navbar.classList.remove('active')
  }
})
