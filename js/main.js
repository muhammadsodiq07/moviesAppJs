let ulList = document.querySelector('.featured__list');
let ulListDrama = document.querySelector('.drama__list');
let ulListExclusive = document.querySelector('.exclusive__list');
let elModalBnt = document.querySelectorAll(".featured__btn");
const Wishlist = document.getElementById('wishlist');
let restInfo = document.querySelector(".rest-info");
let restInfoBack = document.querySelector(".rest-back");
const Form = document.getElementById('Form');
const Search = document.getElementById('SearchInput');
const elSearchBox = document.querySelector('#searchbox');
const elSearch = document.querySelector('#id-search');
const elIsearch = document.querySelector('#id-Isearch');
const elSearchBtn = document.querySelector('#id-searchBtn');
const elSearchMain = document.querySelector('#search-main');
const Title = document.getElementById('MovieTitle');
const secondTitle = document.getElementById('secondTitle');
const Hero = document.getElementById('hero');

for (let i = 25; i <= 200; i++) {

  let li = document.createElement("li");
  li.className = 'swiper-slide featured__item caruserlOne';
  li.innerHTML = `
  <div class="swiper-slide featured__box box222 d-flex flex-column justify-content-center align-items-start">
<div class="featured__boximg">
  <button onclick = "Addwatch('${movies[i].imdbId}')" class="btn featured__btn">
    <i  onclick = "featured__heartIcon()" class='bx bxs-heart featured__heartIcon'></i>
  </button>
  <img class="featured__img" src=${movies[i].youtubePoster} alt="">
</div>
<span class="featured__span d-block mb-2 text-black-50">USA, 2016 - Current</span> 
<p class="featured__p mb-2"><b>${movies[i].title}</b></p> 
<div class="retings d-flex align-items-center mb-2">
  <div class="d-flex align-items-center me-4">
    <img class="hero__imgImbd me-2" src="images/imbd.svg" alt="">
  <span class="hero__price reting text-black-50">86.0 / 100</span>
  </div>
  <div class="d-flex align-items-center">
    <i class='bx bxs-star hero__icon me-2' ></i>
      <span class="hero__stats reting text-black-50">${movies[i].imdbRating}</span>
  </div>
</div>
<span class="featured__text text-black-50">${movies[i].categories} </span>
  <button onclick="moreInfo('${movies[i].imdbId}')" class="btn btn__summarry mt-3">Summary</button>
</div>
  `

ulList.appendChild(li); 
}


for (let i = 250; i <= 281; i++) {

  let li = document.createElement("li");
  li.className = 'featured__item';
  li.innerHTML = `
  <div class="featured__box d-flex flex-column justify-content-center align-items-start">
<div class="featured__boximg">
  <button class="btn featured__btn" onclick = "Addwatch('${movies[i].imdbId}')">
    <i onclick = "featured__heartIcon()" class='bx bxs-heart featured__heartIcon'></i>
  </button>
  <img class="featured__img" src=${movies[i].youtubePoster} alt="">
</div>
<span class="featured__span d-block mb-2 text-black-50">USA, 2016 - Current</span> 
<p class="featured__p mb-2"><b>${movies[i].title}</b></p> 
<div class="retings d-flex align-items-center mb-2">
  <div class="d-flex align-items-center me-4">
    <img class="hero__imgImbd me-2" src="images/imbd.svg" alt="">
  <span class="hero__price reting text-black-50">86.0 / 100</span>
  </div>
  <div class="d-flex align-items-center">
    <i class='bx bxs-star hero__icon me-2' ></i>
      <span class="hero__stats reting text-black-50">${movies[i].imdbRating}</span>
  </div>
</div>
<span class="featured__text text-black-50">${movies[i].categories} </span>
<button onclick="moreInfo('${movies[i].imdbId}')" class="btn btn__summarry mt-3 mb-3">Summary</button>
</div>
  `

ulListDrama.appendChild(li); 
}




// ?Adding Modal Window
function moreInfo(imId) {
  restInfo.classList.add("rest-info-show");
  restInfoBack.classList.add("rest-back-show");

  let newMoviesArr = movies.filter((movie) => {
    return imId === movie.imdbId;
  });

  newMoviesArr.forEach((newMovie) => {
    restInfo.innerHTML = `
  <div class="rest-in-div">
    <div class="left-rest">
      <h2 class="left-title">${newMovie.title}</h2>
      <img class="rest-img" src=${newMovie.youtubePoster} alt="">
    </div>

    <div class="right-rest">
      <div class="rest-rate">
        <div class="rest-start me-3 text-dark"><i class="fa fa-star me-2"></i>${newMovie.imdbRating}</div>
        <div class="rest-year me-3 text-dark">year: ${newMovie.year}</div>
        <div class="text-dark d-flex align-items-center"><i class='bx bx-time-five laegns'></i>:${newMovie.runtime} min</div>
      </div>

      <div class="rest-janr text-black-50">
        ${newMovie.categories}
      </div>
      <p class="rest-desc text-dark">${newMovie.summary}</p>

      <div class="rest-btns">
        <button class="rest-show-btn text-dark"><a href=${newMovie.imdbPage}>Show on IMDb</a></button>
        <button class="rest-bookmark">Bookmark</button>
      </div>
    </div>
  </div>
  `;
  });
}

// ?Removing modal window
function backFunc() {
  restInfo.classList.remove("rest-info-show");
  restInfoBack.classList.remove("rest-back-show");
  restInfo.innerHTML = "";
}



// WISHLIST PART --------

function Addwatch(id){
  movies.forEach((item,index) =>{
    let li = document.createElement('li');
    if (id == item.imdbId){
    li.className = 'featured__item';
    li.innerHTML = `
    <div class="featured__box d-flex flex-column justify-content-center align-items-start">
    <div class="featured__boximg">
      <img class="featured__img" src=${movies[index].youtubePoster} alt="">
    </div>
    <span class="featured__span d-block mb-2 text-black-50">USA, 2016 - Current</span> 
    <p class="featured__p mb-2"><b>${movies[index].title}</b></p> 
    <div class="retings d-flex align-items-center mb-2">
      <div class="d-flex align-items-center me-4">
        <img onclick="moreInfo('${movies[index].imdbId}')" class="hero__imgImbd me-2" src="images/imbd.svg" alt="">
      <span class="hero__price reting text-black-50">86.0 / 100</span>
      </div>
      <div class="d-flex align-items-center">
      <i class='bx bxs-star hero__icon me-2' ></i>
      <span class="hero__stats reting text-black-50">${movies[index].imdbRating}</span>
      </div>
      </div>
      <span class="featured__text text-black-50">${movies[index].categories} </span>
      <button type="button" class="btn remove-btn mt-2 mb-3">Remove</button>
      </div>
    `;
      Wishlist.appendChild(li);
    }
})

const removeBtn = document.querySelectorAll('.remove-btn');

removeBtn.forEach(item => {
  item.addEventListener('click', () =>{
    item.parentNode.parentNode.remove();
  })
})
}

const featured__heartIcon = document.querySelectorAll(".featured__heartIcon");

featured__heartIcon.forEach(item => {
  item.addEventListener('click', () => {
    item.style.color = "red";
  });
});



// FILTER PART ------



Search.addEventListener('keyup', filter);

function filter(e){
  let text = e.target.value.toLowerCase();
  let listItem = ulList.getElementsByTagName('li');
  let secondList = ulListDrama.getElementsByTagName('li');

  for (let i = 0; i < listItem.length; i++){
    let itemName = listItem[i].innerText;
    if (itemName.toLocaleLowerCase().indexOf(text) != -1){
      secondTitle.className = 'd-flex justify-content-between mb-5';
      listItem[i].style.display = 'block';
    }
    else{
      listItem[i].style.display = 'none';
      secondTitle.style.display = 'none';
    }
  }
  for (let i = 0; i < secondList.length; i++){
    let itemName = secondList[i].innerText;
    if (itemName.toLocaleLowerCase().indexOf(text) != -1){
      // Title.className = 'd-flex justify-content-between mb-5'; 
      secondList[i].style.display = 'block';
    }
    else{
      secondList[i].style.display = 'none';
      Title.style.display = 'none';
    }
  }
}


// global search


function funMain(e) {
  let a = e.path[1].id
  let b = e.path[0].id

  console.log(b)

  if(a == elSearchBox.id || b == elSearchBox.id) {
    elSearchBox.style.display = 'none !important';
    elIsearch.value = ""
    elSearch.innerHTML = ''
    elbody.style.overflow = 'auto'
  }
}

elIsearch.addEventListener("focusin", myFocusFunction);

function myFocusFunction() {
    elSearchBox.style.display = 'block';
    elbody.style.overflow = 'hidden'
}


let a = 0
elIsearch.addEventListener('keyup', (e)=> {
  elSearch.innerHTML = ''
  let values = e.target.value.toLowerCase()

  if(!elIsearch.value.trim()) {
    elSearch.innerHTML = null
    elIsearch.value = null
  } else {

  for(let i = 0; i < movies.length; i++) {
    if(movies[i].title.toLowerCase().indexOf(values) != -1) {

      let li = document.createElement("li");
      li.className = 'featured__item';
      li.innerHTML = `
      <div class="featured__box d-flex flex-column justify-content-center align-items-start">
    <div class="featured__boximg">
      <button class="btn featured__btn" onclick = "Addwatch('${movies[i].imdbId}')">
        <i onclick = "featured__heartIcon()" class='bx bxs-heart featured__heartIcon'></i>
      </button>
      <img class="featured__img" src=${movies[i].youtubePoster} alt="">
    </div>
    <span class="featured__span d-block mb-2 text-black-50">USA, 2016 - Current</span> 
    <p class="featured__p mb-2"><b>${movies[i].title}</b></p> 
    <div class="retings d-flex align-items-center mb-2">
      <div class="d-flex align-items-center me-4">
        <img class="hero__imgImbd me-2" src="images/imbd.svg" alt="">
      <span class="hero__price reting text-black-50">86.0 / 100</span>
      </div>
      <div class="d-flex align-items-center">
        <i class='bx bxs-star hero__icon me-2' ></i>
          <span class="hero__stats reting text-black-50">${movies[i].imdbRating}</span>
      </div>
    </div>
    <span class="featured__text text-black-50">${movies[i].categories} </span>
    <button onclick="moreInfo('${movies[i].imdbId}')" class="btn btn__summarry mt-3 mb-3">Summary</button>
    </div>
      `

      //liga qoshish
      elSearch.appendChild(li)
    }
  }
}
})






























// searching elements
// let searchInput = document.getElementById('search');
// let itemList = document.getElementsByTagName('li');

// searchInput.addEventListener('keyup', (e) => {
//     let text = e.target.value.toLowerCase()
//     Array.from(itemList).forEach(function (item) {
//         let listItem = item.firstElementChild.textContent;
//         if (listItem.toLowerCase().indexOf(text) != -1) {
//             item.style.display = 'block';
//         } else {
//             item.style.display = 'none'
//         }
//     })
// })
