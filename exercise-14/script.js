$(function() {
  console.log( "ready!" );
  $('img[usemap]').maphilight();
});

const map = document.getElementById("games_map");
const areas = map.getElementsByTagName("area");

const modal = document.getElementById("area_03");
const closeBtn = document.getElementById("close");

function showModal(event) {
  console.log("clicked", event.target);
  event.preventDefault();

  let modalBackground = document.querySelector(".modal-background");
  modalBackground.style.display = "flex";
}

function closeModal() {
  let modalBackground = document.querySelector(".modal-background");
  modalBackground.style.display = "none";
}

map.addEventListener("click", showModal);
closeBtn.addEventListener("click", closeModal);