// let dataListSearch =  document.querySelector('.datalistsearch')
// let filmcategoryop = document.querySelector('.filmcategory')
// function render ( movies ){
//   list.innerHTML = ""
//   for (let i of movies) {
//     let newLi = document.createElement('li')
//     newLi.className = 'featured__item';
//     newLi.innerHTML = `
//     <div class="featured__box d-flex flex-column justify-content-center align-items-start">
//     <div class="featured__boximg">
//       <button class="btn featured__btn" onclick = "Addwatch('${i.imdbId}')">
//         <i onclick = "featured__heartIcon()" class='bx bxs-heart featured__heartIcon'></i>
//       </button>
//       <img class="featured__img" src=${i.youtubePoster} alt="">
//     </div>
//     <span class="featured__span d-block mb-2 text-black-50">USA, 2016 - Current</span> 
//     <p class="featured__p mb-2"><b>${i.title}</b></p> 
//     <div class="retings d-flex align-items-center mb-2">
//       <div class="d-flex align-items-center me-4">
//         <img class="hero__imgImbd me-2" src="images/imbd.svg" alt="">
//       <span class="hero__price reting text-black-50">86.0 / 100</span>
//       </div>
//       <div class="d-flex align-items-center">
//         <i class='bx bxs-star hero__icon me-2' ></i>
//           <span class="hero__stats reting text-black-50">${i.imdbRating}</span>
//       </div>
//     </div>
//     <span class="featured__text text-black-50">${i.categories} </span>
//     <button onclick="moreInfo('${i.imdbId}')" class="btn btn__summarry mt-3 mb-3">Summary</button>
//     </div>
//       `
//       dataListSearch.appendChild(newLi)
//   }
// }

// function options (){
//   let categoris =  movies.map((film)=>film.categories)
//   let arr = []
//   for (let c of categoris){
//     arr.push(...c)
//   };
//   let newarr = []
//   for (let nc of arr){
//      if (!newarr.includes(nc)){
//        newarr.push(nc)
//      }
//   }
//   for (let o of newarr){
//     let opt = document.createElement("option")
//     opt.value = o
//     opt.text = o
//     filmcategoryop.add(opt)
//   }
//  }
//  options()
 
 
//  let movieImg = document.querySelector('.movi__img')
//  let modalBody = document.querySelector('.movie__desc')
//  let search = document.querySelector('.site__input')
//  function buttons (){
//    let test2 = document.querySelectorAll('.bookmark')
//    for(let i=0; i< test2.length; i++){
//      test2[i].addEventListener('click', (e)=>{
//        let id = e.target.id
//        let modalid  =  movie.filter(e => e.imdbId == id)
//        modalBody.textContent = modalid[0].summary
//        movieImg.src= movie[i].youtubePoster
//      })
//    }
//  }
//  buttons()
 
//  submit.onclick = (even)=>{
//    even.preventDefault()
//    if( !film__name.value || !movedata.value || !movedatasince.value ) return
//    let newlist = movie.filter((film)=>
//      film.title.includes(film__name.value) && film.categories.includes(filmcategory.value)  &&film.year > movedata.value && film.year < movedatasince.value
 
//    )
//    render(newlist)
//    buttons()
//  }
 
//  search.onkeyup = (event)=>{
//    event.preventDefault()
//    if (event.keyCode == 13){
//      carouselExampleControlsNoTouching.style = "display:none;"
//      console.log(search.value);
//      let main = movie.filter( ( film )=> 
//        film.title.includes(search.value)
//      )
//      render(main)
//      buttons()
//      search.value = ""
//    }
//  }
