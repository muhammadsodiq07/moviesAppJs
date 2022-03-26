let ulList = document.querySelector('.featured__list');
let ulListDrama = document.querySelector('.drama__list');
let ulListExclusive = document.querySelector('.exclusive__list');
let elModalBnt = document.querySelectorAll(".featured__btn");
const Wishlist = document.getElementById('wishlist');
const Form = document.getElementById('Form');
const Search = document.getElementById('SearchInput');

for (let i = 25; i <= 1150; i++) {

  let li = document.createElement("li");
  li.className = 'swiper-slide featured__item caruserlOne';
  li.innerHTML = `
  <div class="swiper-slide featured__box box222 d-flex flex-column justify-content-center align-items-start">
<div class="featured__boximg">
  <button onclick = "Heart('${movies[i].imdbId}')" class="btn featured__btn">
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


for (let i = 2000; i <= 2031; i++) {

  let li = document.createElement("li");
  li.className = 'featured__item';
  li.innerHTML = `
  <div class="featured__box d-flex flex-column justify-content-center align-items-start">
<div class="featured__boximg">
  <button class="btn featured__btn" onclick = "Heart('${movies[i].imdbId}')">
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


// for (let i = 344; i <= 346; i++) {

//   let li = document.createElement("li");
//   li.className = 'featured__item';
//   li.innerHTML = `
//   <div class="featured__box  me-5">
//   <div class="exclusive__boximg">
//   <button class="btn featured__btn">
//   <i class='bx bxs-heart featured__heartIcon'></i>
//   </button>
//   <div class="play">
//   <i class='bx bx-play-circle playIcon' ></i>
//   </div>
//   <a href = "https://youtu.be/SZhncuQSnaI">
//   <img class="exclusive__img" src=${movies[i].youtubePoster} alt="">
//   </a>
// </div>
// <p class="featured__p mb-2 mt-2"><b>${movies[i].title}</b></p> 
// </div>
// </div>
//   `

// ulListExclusive.appendChild(li); 
// }




let restInfo = document.querySelector(".rest-info");
let restInfoBack = document.querySelector(".rest-back");

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
        <div class="rest-start me-3"><i class="fa fa-star me-2"></i>${newMovie.imdbRating}</div>
        <div class="rest-year me-3"><i class="fa fa-clock me-2"></i>${newMovie.year}</div>
        <div class="rest-length">length: ${newMovie.runtime} min</div>
      </div>

      <div class="rest-janr">
        ${newMovie.categories}
      </div>
      <p class="rest-desc">${newMovie.summary}</p>

      <div class="rest-btns">
        <button class="rest-show-btn"><a href=${newMovie.imdbPage}>Show on IMDb</a></button>
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

function Heart(id){
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

const Title = document.getElementById('MovieTitle');
const secondTitle = document.getElementById('secondTitle');
const Hero = document.getElementById('hero');

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




const elTopMovies = document.querySelector("#pag__list");
let tops = [];

movies.forEach((item, index) => {
  let elRating = 8.8;
  if (item.imdbRating >= elRating) {
    tops.push(item);
  }
});
tops.forEach((item, index) => {
  let li = document.createElement("li");
    li.className = 'movie__main col-3';
    li.innerHTML = `
        <div class="movie__item item">
        <div class="item__imgbox">
          <img class="item__img" src="${item.youtubePoster}" alt="movie__img">
          <div class="movie__btns d-flex align-items-center justify-content-between">
            <p class="movie__tv text-uppercase mb-0">tv series</p>
            <button class="movie__btn"><i class='bx bxs-heart' ></i></button>
          </div>
        </div>
        <div class="d-flex align-items-center justify-content-between mb-3">
          <span class="item__years">USA, ${item.year}</span>
          <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
            More
          </button>
          <!-- Modal -->
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">About Movie</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  ${item.summary}
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h4 class="item__title">${item.title}</h4>
        <div class="item__box d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <img class="movie__imdb" src="imgs/imdb.png" alt="imdb">
          <span class="item__range">${item.runtime}</span>
          </div>
          <div class="d-flex align-items-center">
            <i class='bx bxs-star' style='color:#d8e818'></i>
            <span class="item__percent">${item.imdbRating}</span>
          </div>
        </div>
        <div>
          <span class="item__category text-capitalize">${item.categories}</span>
        </div>
      </div>
  `;
    elTopMovies.appendChild(li);
});











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
// });