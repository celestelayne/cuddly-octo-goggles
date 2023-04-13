console.log('this works')

let listItems = document.querySelectorAll('li');

const turnRed = (e) => {
  e.target.style.color = 'red' 
  e.target.style.transform = 'scale(1.5)' 
}

const turnWhite = (e) => {
  e.target.style.color = '#F4F4F4' 
  e.target.style.transform = 'scale(1)' 
}

for(let i = 0; i < listItems.length; i++){
  listItems[i].addEventListener('mouseover', turnRed)
  listItems[i].addEventListener('mouseout', turnWhite)
}