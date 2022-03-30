// const page__one = document.querySelector("#page__one");
// const page__two = document.querySelector("#page__two");
// const page__three = document.querySelector("#page__three");
// const page__four = document.querySelector("#page__four");
// const page__five = document.querySelector("#page__five");
// const page__hunder = document.querySelector("#page__hundered");
// const pageList = document.querySelector(".pag__list");
// const pageList2 = document.querySelector(".pag2__list");
// const pagination__div = document.querySelector(".pagination__div");

// page__one.addEventListener("click", () => {
//   for (let i = 300; i <= 330; i++) {
      
//   let li = document.createElement("li");
//   li.className = 'swiper-slide featured__item caruserlOne';
//   li.innerHTML = `
//   <div class="swiper-slide featured__box box222 d-flex flex-column justify-content-center align-items-start mb-3">
// <div class="featured__boximg">
//   <button onclick = "Addwatch('${movies[i].imdbId}')" class="btn featured__btn">
//     <i  onclick = "featured__heartIcon()" class='bx bxs-heart featured__heartIcon'></i>
//   </button>
//   <img class="featured__img" src=${movies[i].youtubePoster} alt="">
// </div>
// <span class="featured__span d-block mb-2 text-black-50">USA, 2016 - Current</span> 
// <p class="featured__p mb-2"><b>${movies[i].title}</b></p> 
// <div class="retings d-flex align-items-center mb-2">
//   <div class="d-flex align-items-center me-4">
//     <img class="hero__imgImbd me-2" src="images/imbd.svg" alt="">
//   <span class="hero__price reting text-black-50">86.0 / 100</span>
//   </div>
//   <div class="d-flex align-items-center">
//     <i class='bx bxs-star hero__icon me-2' ></i>
//       <span class="hero__stats reting text-black-50">${movies[i].imdbRating}</span>
//   </div>
// </div>
// <span class="featured__text text-black-50">${movies[i].categories} </span>
//   <button onclick="moreInfo('${movies[i].imdbId}')" class="btn btn__summarry mt-3">Summary</button>
// </div>
//   `
  
//   pageList.appendChild(li);
//   }
// });




// page__two.addEventListener("click", () => {
//   for (let i = 331; i <= 361; i++) {
      
//   let li = document.createElement("li");
//   li.className = 'swiper-slide featured__item caruserlOne';
//   li.innerHTML = `
//   <div class="swiper-slide featured__box box222 d-flex flex-column justify-content-center align-items-start mb-3">
// <div class="featured__boximg">
//   <button onclick = "Addwatch('${movies[i].imdbId}')" class="btn featured__btn">
//     <i  onclick = "featured__heartIcon()" class='bx bxs-heart featured__heartIcon'></i>
//   </button>
//   <img class="featured__img" src=${movies[i].youtubePoster} alt="">
// </div>
// <span class="featured__span d-block mb-2 text-black-50">USA, 2016 - Current</span> 
// <p class="featured__p mb-2"><b>${movies[i].title}</b></p> 
// <div class="retings d-flex align-items-center mb-2">
//   <div class="d-flex align-items-center me-4">
//     <img class="hero__imgImbd me-2" src="images/imbd.svg" alt="">
//   <span class="hero__price reting text-black-50">86.0 / 100</span>
//   </div>
//   <div class="d-flex align-items-center">
//     <i class='bx bxs-star hero__icon me-2' ></i>
//       <span class="hero__stats reting text-black-50">${movies[i].imdbRating}</span>
//   </div>
// </div>
// <span class="featured__text text-black-50">${movies[i].categories} </span>
//   <button onclick="moreInfo('${movies[i].imdbId}')" class="btn btn__summarry mt-3">Summary</button>
// </div>
//   `
  
//   pageList.appendChild(li);
//   }
// });



// page__three.addEventListener("click", () => {
//   for (let i = 361; i <= 391; i++) {
      
//   let li = document.createElement("li");
//   li.className = 'swiper-slide featured__item caruserlOne';
//   li.innerHTML = `
//   <div class="swiper-slide featured__box box222 d-flex flex-column justify-content-center align-items-start mb-3">
// <div class="featured__boximg">
//   <button onclick = "Addwatch('${movies[i].imdbId}')" class="btn featured__btn">
//     <i  onclick = "featured__heartIcon()" class='bx bxs-heart featured__heartIcon'></i>
//   </button>
//   <img class="featured__img" src=${movies[i].youtubePoster} alt="">
// </div>
// <span class="featured__span d-block mb-2 text-black-50">USA, 2016 - Current</span> 
// <p class="featured__p mb-2"><b>${movies[i].title}</b></p> 
// <div class="retings d-flex align-items-center mb-2">
//   <div class="d-flex align-items-center me-4">
//     <img class="hero__imgImbd me-2" src="images/imbd.svg" alt="">
//   <span class="hero__price reting text-black-50">86.0 / 100</span>
//   </div>
//   <div class="d-flex align-items-center">
//     <i class='bx bxs-star hero__icon me-2' ></i>
//       <span class="hero__stats reting text-black-50">${movies[i].imdbRating}</span>
//   </div>
// </div>
// <span class="featured__text text-black-50">${movies[i].categories} </span>
//   <button onclick="moreInfo('${movies[i].imdbId}')" class="btn btn__summarry mt-3">Summary</button>
// </div>
//   `
  
//   pageList.appendChild(li);
//   }
// });



// page__four.addEventListener("click", () => {
//   for (let i = 392; i <= 422; i++) {
      
//   let li = document.createElement("li");
//   li.className = 'swiper-slide featured__item caruserlOne';
//   li.innerHTML = `
//   <div class="swiper-slide featured__box box222 d-flex flex-column justify-content-center align-items-start mb-3">
// <div class="featured__boximg">
//   <button onclick = "Addwatch('${movies[i].imdbId}')" class="btn featured__btn">
//     <i  onclick = "featured__heartIcon()" class='bx bxs-heart featured__heartIcon'></i>
//   </button>
//   <img class="featured__img" src=${movies[i].youtubePoster} alt="">
// </div>
// <span class="featured__span d-block mb-2 text-black-50">USA, 2016 - Current</span> 
// <p class="featured__p mb-2"><b>${movies[i].title}</b></p> 
// <div class="retings d-flex align-items-center mb-2">
//   <div class="d-flex align-items-center me-4">
//     <img class="hero__imgImbd me-2" src="images/imbd.svg" alt="">
//   <span class="hero__price reting text-black-50">86.0 / 100</span>
//   </div>
//   <div class="d-flex align-items-center">
//     <i class='bx bxs-star hero__icon me-2' ></i>
//       <span class="hero__stats reting text-black-50">${movies[i].imdbRating}</span>
//   </div>
// </div>
// <span class="featured__text text-black-50">${movies[i].categories} </span>
//   <button onclick="moreInfo('${movies[i].imdbId}')" class="btn btn__summarry mt-3">Summary</button>
// </div>
//   `
  
//   pageList.appendChild(li);
//   }
// });



// page__five.addEventListener("click", () => {
//   for (let i = 423; i <= 444; i++) {
      
//   let li = document.createElement("li");
//   li.className = 'swiper-slide featured__item caruserlOne';
//   li.innerHTML = `
//   <div class="swiper-slide featured__box box222 d-flex flex-column justify-content-center align-items-start mb-3">
// <div class="featured__boximg">
//   <button onclick = "Addwatch('${movies[i].imdbId}')" class="btn featured__btn">
//     <i  onclick = "featured__heartIcon()" class='bx bxs-heart featured__heartIcon'></i>
//   </button>
//   <img class="featured__img" src=${movies[i].youtubePoster} alt="">
// </div>
// <span class="featured__span d-block mb-2 text-black-50">USA, 2016 - Current</span> 
// <p class="featured__p mb-2"><b>${movies[i].title}</b></p> 
// <div class="retings d-flex align-items-center mb-2">
//   <div class="d-flex align-items-center me-4">
//     <img class="hero__imgImbd me-2" src="images/imbd.svg" alt="">
//   <span class="hero__price reting text-black-50">86.0 / 100</span>
//   </div>
//   <div class="d-flex align-items-center">
//     <i class='bx bxs-star hero__icon me-2' ></i>
//       <span class="hero__stats reting text-black-50">${movies[i].imdbRating}</span>
//   </div>
// </div>
// <span class="featured__text text-black-50">${movies[i].categories} </span>
//   <button onclick="moreInfo('${movies[i].imdbId}')" class="btn btn__summarry mt-3">Summary</button>
// </div>
//   `
  
//   pageList.appendChild(li);
//   }
// });



// page__hunder.addEventListener("click", () => {
//   for (let i = 445; i <= 3000; i++) {
      
//   let li = document.createElement("li");
//   li.className = 'swiper-slide featured__item caruserlOne';
//   li.innerHTML = `
//   <div class="swiper-slide featured__box box222 d-flex flex-column justify-content-center align-items-start mb-3">
// <div class="featured__boximg">
//   <button onclick = "Addwatch('${movies[i].imdbId}')" class="btn featured__btn">
//     <i  onclick = "featured__heartIcon()" class='bx bxs-heart featured__heartIcon'></i>
//   </button>
//   <img class="featured__img" src=${movies[i].youtubePoster} alt="">
// </div>
// <span class="featured__span d-block mb-2 text-black-50">USA, 2016 - Current</span> 
// <p class="featured__p mb-2"><b>${movies[i].title}</b></p> 
// <div class="retings d-flex align-items-center mb-2">
//   <div class="d-flex align-items-center me-4">
//     <img class="hero__imgImbd me-2" src="images/imbd.svg" alt="">
//   <span class="hero__price reting text-black-50">86.0 / 100</span>
//   </div>
//   <div class="d-flex align-items-center">
//     <i class='bx bxs-star hero__icon me-2' ></i>
//       <span class="hero__stats reting text-black-50">${movies[i].imdbRating}</span>
//   </div>
// </div>
// <span class="featured__text text-black-50">${movies[i].categories} </span>
//   <button onclick="moreInfo('${movies[i].imdbId}')" class="btn btn__summarry mt-3">Summary</button>
// </div>
//   `
  
//   pageList.appendChild(li);
//   }
// });







// ?Pagination Buttons

// let ulListDrama = document.querySelector('.drama__list');


