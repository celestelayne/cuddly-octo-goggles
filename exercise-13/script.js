const flowers = [
  {
    name: "Tulip",
    color: "yellow",
    image:
      "https://cdn.britannica.com/37/227037-050-CA792866/Broken-tulip-flower.jpg"
  },
  {
    name: "Daffodil",
    
    color: "yellow",
    image: "https://h2.commercev3.net/cdn.brecks.com/images/800/67248A.jpg"
  },
  {
    name: "Sunflower",
    color: "yellow",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sunflower_sky_backdrop.jpg/800px-Sunflower_sky_backdrop.jpg"
  },
  {
    name: "Bluebell",
    color: "blue",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a8/Hyacinthoides_non-scripta_%28Common_Bluebell%29.jpg"
  },
  {
    name: "Rose",
    color: "red",
    image: "https://www.jacksonandperkins.com/images/xxl/v1780.jpg"
  }
];


const ul = document.querySelector("ul");

//---------- RENDER NAMES TO PAGE

function renderFlowersToPage(flowers) {
  for (let i = 0; i < flowers.length; i++) {
    let list_item = document.createElement("li");
    list_item.classList.add(flowers[i].color, "card");
    // add flower name
    let title = document.createElement("h3");
    title.textContent = flowers[i].name;
    // add flower color
    let color = document.createElement("p");
    color.classList.add(flowers[i].color);
    color.textContent = flowers[i].color;

    let image = document.createElement("img");
    image.setAttribute("src", flowers[i].image);
    // append created elements to page
    ul.appendChild(list_item);
    list_item.appendChild(title);
    list_item.appendChild(color);
    list_item.appendChild(image);
  }
}
renderFlowersToPage(flowers);

const filterBtns = document.querySelector(".filters");

function sortingFn(event){
  // console.log(event.target);
  if(event.target.classList.contains("filter-btn")){
    
    // do something
    const filterValue = event.target.getAttribute("data-filter");

    if(filterValue === "ascending"){
      // write sort logic
      flowers.sort(function(a, b){
        if(a.name < b.name){
          return -1
        }
        if(a.name > b.name){
          return 1;
        }
        return 0;
      });
      console.log('sorted', flowers);
      ul.innerHTML = ""
      renderFlowersToPage(flowers)
    } else if (filterValue === "descending") {
      // write reverse logic
      flowers.reverse();
      console.log('reversed', flowers)
      // clear the page of unsorted flowers
      ul.innerHTML = "";
      renderFlowersToPage(flowers)
    }
  }
}

filterBtns.addEventListener('click', sortingFn)