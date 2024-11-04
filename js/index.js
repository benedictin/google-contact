// Selects all elements
const burgerMenu = document.querySelector("#burger-menu");
const sideBarMenu = document.querySelector("#side-bar");
const mainSection = document.querySelectorAll(".main-section");

// Callback functions
const handleAddStyle = (element, style) => {
  element.classList.add(style);
};

const handleRemoveStyle = (element, style) => {
  element.classList.remove(style);
};

// Add events

burgerMenu.addEventListener("click", (event) => {
  if (sideBarMenu.classList.contains("display-none")) {
    handleRemoveStyle(sideBarMenu, "display-none");
    handleRemoveStyle(mainSection[0], "w-100");
    handleRemoveStyle(mainSection[1], "w-100");
  } else {
    handleAddStyle(sideBarMenu, "display-none");
    handleAddStyle(mainSection[0], "w-100");
    handleRemoveStyle(mainSection[1], "w-100");
  }
});

/* New code added */

 
const libelle = document.getElementById('lib')
const label = libelle.nextElementSibling
libelle.addEventListener('focus', ()=>{ 
  label.style.top="-8px"
  label.style.left="12px"
  label.style.fontSize="12px"
  label.style.color="#0b57d0"
})
libelle.addEventListener('blur', ()=>{ 
  label.style.top="12px"
  label.style.left="16px"
  label.style.fontSize="16px"
  label.style.color="#5f6368"
})



const fen = document.querySelectorAll('.libelle,.libelle2,.delete')
for (let i = 0; i < fen.length; i++) {

  fen[i].addEventListener('click', ()=>{
  fen[i].style.display='none'
})
document.querySelectorAll('.card')[i].addEventListener('click',(e)=>{
  e.stopPropagation();
})
}
