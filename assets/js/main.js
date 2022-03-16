const btnMenu = document.querySelector("#control-menu");
const sidebar = document.querySelector("#aside");

btnMenu.addEventListener('click', function(){
  sidebar.classList.toggle('responsive')
})