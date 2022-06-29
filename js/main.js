
var elModalOpenButton = document.querySelector(".drink-create-btn");
var elModal = document.querySelector(".modal");

elModalOpenButton.addEventListener("click", function(){
  elModal.classList.add("modal-show");
})


var elModalCloseButton = document.querySelector(".js-close-modal");

elModalCloseButton.addEventListener("click" , function (){
  elModal.classList.remove("modal-show");
})


