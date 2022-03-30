let ulList = document.querySelector('.featured__list');
let ulListDrama = document.querySelector('.drama__list');
let ulListExclusive = document.querySelector('.exclusive__list');
let elModalBnt = document.querySelectorAll(".featured__btn");
const Wishlist = document.getElementById('wishlist');
let restInfo = document.querySelector(".rest-info");
let restInfoBack = document.querySelector(".rest-back");

const elSearchBox = document.querySelector('#searchbox');
const elSearch = document.querySelector('#id-search');
const elIsearch = document.querySelector('#id-Isearch');
const elSearchBtn = document.querySelector('#id-searchBtn');
const elSearchMain = document.querySelector('#search-main');
const Search = document.getElementById('SearchInput'); 
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



const featured__heartIcon = document.querySelectorAll(".featured__heartIcon");

featured__heartIcon.forEach(item => {
  item.addEventListener('click', () => {
    item.style.color = "red";
  });
});

const removeBtn = document.querySelectorAll('.remove-btn');

removeBtn.forEach(item => {
  item.addEventListener('click', () =>{
    item.parentNode.parentNode.remove();

    featured__heartIcon.forEach(item => {
        item.style.color = "white";
    });
    
  })
})
}

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


























// ?Pagination Buttons



const pageNumbers = (total, max, current) => {
  const half = Math.round(max / 2);
  let to = max;
  if (current + half >= total) {
    to = total;
  } else if (current > half) {
    to = current + half;
  }

  let from = to - max;

  return Array.from({ length: max }, (_, i) => i + 1 + from);
};

function PaginationButtons(totalPages, maxPageVisible = 10, currentPage = 1) {
  let pages = pageNumbers(totalPages, maxPageVisible, currentPage);
  let currentPageBtn = null;
  const buttons = new Map();
  const fragment = document.createDocumentFragment();
  const paginationButtonsContainer = document.createElement("div");
  paginationButtonsContainer.className = "pagination-buttons";

  const disabled = {
    start: () => pages[0] === 1,
    prev: () => currentPage === 1,
    end: () => pages.slice(-1)[0] === totalPages,
    next: () => currentPage === totalPages,
  }
let sum = 0
  const createAndSetupButton = (label = "", cls = "", disabled = false, handleClick = () => {}) => {
    const button = document.createElement("button");
    button.textContent = label;
    button.className = `page-btn${cls} one${sum++}`;
    button.disabled = disabled;
    button.addEventListener('click', event => {
      handleClick(event)
      this.update()
      paginationButtonsContainer.value = currentPage
      paginationButtonsContainer.dispatchEvent(new Event('change'))
    })

    return button;
  };

  const onPageButtonClick = e => currentPage = Number(e.currentTarget.textContent)

  const onPageButtonUpdate = index => btn => {
    btn.textContent = pages[index];

    if (pages[index] === currentPage) {
      currentPageBtn.classList.remove('active');
      btn.classList.add('active');
      currentPageBtn = btn;
      currentPageBtn.focus();
    }
  }

  buttons.set(createAndSetupButton("start", " start-page", disabled.start(), () => currentPage = 1),
    (btn) => btn.disabled = disabled.start()
  );

  buttons.set(createAndSetupButton("prev", " prev-page", disabled.prev(), () => currentPage = -1),
    (btn) => btn.disabled = disabled.prev()
  );

  pages.forEach((pageNumber, index) => {
    const isCurrentPage = pageNumber === currentPage;
    const button = createAndSetupButton(pageNumber, isCurrentPage ? " active" : "", false, onPageButtonClick);
    
    if (isCurrentPage) {
      currentPageBtn = button
    }

    buttons.set(button, onPageButtonUpdate(index));
  });

  buttons.set(createAndSetupButton("next", " next-page", disabled.next(), () => currentPage += 1),
    (btn) => btn.disabled = disabled.next()
  );

  buttons.set(createAndSetupButton("end", " end-page", disabled.end(), () => currentPage = totalPages),
    (btn) => btn.disabled = disabled.end()
  );

  buttons.forEach((_, btn) => fragment.appendChild(btn));

  this.render = (container = document.body) => {
    paginationButtonsContainer.appendChild(fragment)
    container.appendChild(paginationButtonsContainer);
  };

  this.update = (newPageNumber = currentPage) => {
    currentPage = newPageNumber;
    pages = pageNumbers(totalPages, maxPageVisible, currentPage);
    buttons.forEach((updateButton, button) => updateButton(button))
  }

  this.onChange = (handler) => {
    paginationButtonsContainer.addEventListener('change', handler)
  }
}

const paginationButtons = new PaginationButtons(100);

paginationButtons.render();
// paginationButtons.update(12);
paginationButtons.onChange(e => {
  console.log(e.target.value);
})

// First Page
let one1 = document.querySelector('.one2')

let firstArray = movies.filter((movie,index) => {
  return  index >= 250 && index < 282
})

one1.addEventListener('click', () => {
  console.log('qwerty');
  ulListDrama.innerHTML = ''
  firstArray.forEach(element => {
    console.log(movies);
    let li = document.createElement("li");
    // li.className = 'featured__item';
    li.classList.add("featured__item");
    li.innerHTML = `
    <div class="featured__box d-flex flex-column justify-content-center align-items-start">
  <div class="featured__boximg">
    <button class="btn featured__btn" onclick = "Addwatch('${element.imdbId}')">
      <i onclick = "featured__heartIcon()" class='bx bxs-heart featured__heartIcon'></i>
    </button>
    <img class="featured__img" src=${element.youtubePoster} alt="">
  </div>
  <span class="featured__span d-block mb-2 text-black-50">USA, 2016 - Current</span> 
  <p class="featured__p mb-2"><b>${element.title}</b></p> 
  <div class="retings d-flex align-items-center mb-2">
    <div class="d-flex align-items-center me-4">
      <img class="hero__imgImbd me-2" src="images/imbd.svg" alt="">
    <span class="hero__price reting text-black-50">86.0 / 100</span>
    </div>
    <div class="d-flex align-items-center">
      <i class='bx bxs-star hero__icon me-2' ></i>
        <span class="hero__stats reting text-black-50">${element.imdbRating}</span>
    </div>
  </div>
  <span class="featured__text text-black-50">${element.categories} </span>
  <button onclick="moreInfo('${element.imdbId}')" class="btn btn__summarry mt-3 mb-3">Summary</button>
  </div>
    `
  
  ulListDrama.appendChild(li); 
  })
})


// SecondPage
let one2 = document.querySelector('.one3')

let secondArray = movies.filter((movie,index) => {
  return index >= 300 && index < 330
})

one2.addEventListener('click', () => {
  ulListDrama.innerHTML = ''
  secondArray.forEach(element => {
    let li = document.createElement("li");
    // li.className = 'featured__item';
    li.classList.add("featured__item");
    li.innerHTML = `
    <div class="featured__box d-flex flex-column justify-content-center align-items-start">
  <div class="featured__boximg">
    <button class="btn featured__btn" onclick = "Addwatch('${element.imdbId}')">
      <i onclick = "featured__heartIcon()" class='bx bxs-heart featured__heartIcon'></i>
    </button>
    <img class="featured__img" src=${element.youtubePoster} alt="">
  </div>
  <span class="featured__span d-block mb-2 text-black-50">USA, 2016 - Current</span> 
  <p class="featured__p mb-2"><b>${element.title}</b></p> 
  <div class="retings d-flex align-items-center mb-2">
    <div class="d-flex align-items-center me-4">
      <img class="hero__imgImbd me-2" src="images/imbd.svg" alt="">
    <span class="hero__price reting text-black-50">86.0 / 100</span>
    </div>
    <div class="d-flex align-items-center">
      <i class='bx bxs-star hero__icon me-2' ></i>
        <span class="hero__stats reting text-black-50">${element.imdbRating}</span>
    </div>
  </div>
  <span class="featured__text text-black-50">${element.categories} </span>
  <button onclick="moreInfo('${element.imdbId}')" class="btn btn__summarry mt-3 mb-3">Summary</button>
  </div>
    `
  
  ulListDrama.appendChild(li); 
  })
})

// Third Page
let one3 = document.querySelector('.one4')

let thirdArray = movies.filter((movie,index) => {
  return index >= 331 && index < 360
})

one3.addEventListener('click', () => {
  ulListDrama.innerHTML = ''
  thirdArray.forEach(element => {
    let li = document.createElement("li");
    // li.className = 'featured__item';
    li.classList.add("featured__item");
    li.innerHTML = `
    <div class="featured__box d-flex flex-column justify-content-center align-items-start">
  <div class="featured__boximg">
    <button class="btn featured__btn" onclick = "Addwatch('${element.imdbId}')">
      <i onclick = "featured__heartIcon()" class='bx bxs-heart featured__heartIcon'></i>
    </button>
    <img class="featured__img" src=${element.youtubePoster} alt="">
  </div>
  <span class="featured__span d-block mb-2 text-black-50">USA, 2016 - Current</span> 
  <p class="featured__p mb-2"><b>${element.title}</b></p> 
  <div class="retings d-flex align-items-center mb-2">
    <div class="d-flex align-items-center me-4">
      <img class="hero__imgImbd me-2" src="images/imbd.svg" alt="">
    <span class="hero__price reting text-black-50">86.0 / 100</span>
    </div>
    <div class="d-flex align-items-center">
      <i class='bx bxs-star hero__icon me-2' ></i>
        <span class="hero__stats reting text-black-50">${element.imdbRating}</span>
    </div>
  </div>
  <span class="featured__text text-black-50">${element.categories} </span>
  <button onclick="moreInfo('${element.imdbId}')" class="btn btn__summarry mt-3 mb-3">Summary</button>
  </div>
    `
  
  ulListDrama.appendChild(li); 
  })
})

// Four Page
let one4 = document.querySelector('.one5')

let fourthArray = movies.filter((movie,index) => {
  return index >= 361 && index < 390
})

one4.addEventListener('click', () => {
  ulListDrama.innerHTML = ''
  fourthArray.forEach(element => {
    let li = document.createElement("li");
    // li.className = 'featured__item';
    li.classList.add("featured__item");
    li.innerHTML = `
    <div class="featured__box d-flex flex-column justify-content-center align-items-start">
  <div class="featured__boximg">
    <button class="btn featured__btn" onclick = "Addwatch('${element.imdbId}')">
      <i onclick = "featured__heartIcon()" class='bx bxs-heart featured__heartIcon'></i>
    </button>
    <img class="featured__img" src=${element.youtubePoster} alt="">
  </div>
  <span class="featured__span d-block mb-2 text-black-50">USA, 2016 - Current</span> 
  <p class="featured__p mb-2"><b>${element.title}</b></p> 
  <div class="retings d-flex align-items-center mb-2">
    <div class="d-flex align-items-center me-4">
      <img class="hero__imgImbd me-2" src="images/imbd.svg" alt="">
    <span class="hero__price reting text-black-50">86.0 / 100</span>
    </div>
    <div class="d-flex align-items-center">
      <i class='bx bxs-star hero__icon me-2' ></i>
        <span class="hero__stats reting text-black-50">${element.imdbRating}</span>
    </div>
  </div>
  <span class="featured__text text-black-50">${element.categories} </span>
  <button onclick="moreInfo('${element.imdbId}')" class="btn btn__summarry mt-3 mb-3">Summary</button>
  </div>
    `
  
  ulListDrama.appendChild(li); 
  })
})

// Five Page
let one5 = document.querySelector('.one6')

let fifthArray = movies.filter((movie_,index) => {
  return index >= 390 && index < 430
})

one5.addEventListener('click', () => {
  ulListDrama.innerHTML = ''
  fifthArray.forEach(element => {
    let li = document.createElement("li");
    // li.className = 'featured__item';
    li.classList.add("featured__item");
    li.innerHTML = `
    <div class="featured__box d-flex flex-column justify-content-center align-items-start">
  <div class="featured__boximg">
    <button class="btn featured__btn" onclick = "Addwatch('${element.imdbId}')">
      <i onclick = "featured__heartIcon()" class='bx bxs-heart featured__heartIcon'></i>
    </button>
    <img class="featured__img" src=${element.youtubePoster} alt="">
  </div>
  <span class="featured__span d-block mb-2 text-black-50">USA, 2016 - Current</span> 
  <p class="featured__p mb-2"><b>${element.title}</b></p> 
  <div class="retings d-flex align-items-center mb-2">
    <div class="d-flex align-items-center me-4">
      <img class="hero__imgImbd me-2" src="images/imbd.svg" alt="">
    <span class="hero__price reting text-black-50">86.0 / 100</span>
    </div>
    <div class="d-flex align-items-center">
      <i class='bx bxs-star hero__icon me-2' ></i>
        <span class="hero__stats reting text-black-50">${element.imdbRating}</span>
    </div>
  </div>
  <span class="featured__text text-black-50">${element.categories} </span>
  <button onclick="moreInfo('${element.imdbId}')" class="btn btn__summarry mt-3 mb-3">Summary</button>
  </div>
    `
  
  ulListDrama.appendChild(li); 
  })
})

// six Page
let one6 = document.querySelector('.one7')

let sixthArray = movies.filter((movie,index) => {
  return index >= 431 && index < 460
})

one6.addEventListener('click', () => {
  ulListDrama.innerHTML = ''
  sixthArray.forEach(element => {
    let li = document.createElement("li");
    // li.className = 'featured__item';
    li.classList.add("featured__item");
    li.innerHTML = `
    <div class="featured__box d-flex flex-column justify-content-center align-items-start">
  <div class="featured__boximg">
    <button class="btn featured__btn" onclick = "Addwatch('${element.imdbId}')">
      <i onclick = "featured__heartIcon()" class='bx bxs-heart featured__heartIcon'></i>
    </button>
    <img class="featured__img" src=${element.youtubePoster} alt="">
  </div>
  <span class="featured__span d-block mb-2 text-black-50">USA, 2016 - Current</span> 
  <p class="featured__p mb-2"><b>${element.title}</b></p> 
  <div class="retings d-flex align-items-center mb-2">
    <div class="d-flex align-items-center me-4">
      <img class="hero__imgImbd me-2" src="images/imbd.svg" alt="">
    <span class="hero__price reting text-black-50">86.0 / 100</span>
    </div>
    <div class="d-flex align-items-center">
      <i class='bx bxs-star hero__icon me-2' ></i>
        <span class="hero__stats reting text-black-50">${element.imdbRating}</span>
    </div>
  </div>
  <span class="featured__text text-black-50">${element.categories} </span>
  <button onclick="moreInfo('${element.imdbId}')" class="btn btn__summarry mt-3 mb-3">Summary</button>
  </div>
    `
  
  ulListDrama.appendChild(li); 
  })
})

// seven Page
let one7 = document.querySelector('.one8')

let seventhArray = movies.filter((movie,index) => {
  return movie >= 480 && index < 500
})

one7.addEventListener('click', () => {
  console.log('qwerty');
  ulListDrama.innerHTML = ''
  seventhArray.forEach(element => {
    let li = document.createElement("li");
    // li.className = 'featured__item';
    li.classList.add("featured__item");
    li.innerHTML = `
    <div class="featured__box d-flex flex-column justify-content-center align-items-start">
  <div class="featured__boximg">
    <button class="btn featured__btn" onclick = "Addwatch('${element.imdbId}')">
      <i onclick = "featured__heartIcon()" class='bx bxs-heart featured__heartIcon'></i>
    </button>
    <img class="featured__img" src=${element.youtubePoster} alt="">
  </div>
  <span class="featured__span d-block mb-2 text-black-50">USA, 2016 - Current</span> 
  <p class="featured__p mb-2"><b>${element.title}</b></p> 
  <div class="retings d-flex align-items-center mb-2">
    <div class="d-flex align-items-center me-4">
      <img class="hero__imgImbd me-2" src="images/imbd.svg" alt="">
    <span class="hero__price reting text-black-50">86.0 / 100</span>
    </div>
    <div class="d-flex align-items-center">
      <i class='bx bxs-star hero__icon me-2' ></i>
        <span class="hero__stats reting text-black-50">${element.imdbRating}</span>
    </div>
  </div>
  <span class="featured__text text-black-50">${element.categories} </span>
  <button onclick="moreInfo('${element.imdbId}')" class="btn btn__summarry mt-3 mb-3">Summary</button>
  </div>
    `
  ulListDrama.appendChild(li); 
  })
})

// eight Page
let one8 = document.querySelector('.one9')

let eighthArray = movies.filter((movie,index) => {
  return index >= 491 && index < 530
})

one8.addEventListener('click', () => {
  ulListDrama.innerHTML = ''
  eighthArray.forEach(element => {
    let li = document.createElement("li");
    // li.className = 'featured__item';
    li.classList.add("featured__item");
    li.innerHTML = `
    <div class="featured__box d-flex flex-column justify-content-center align-items-start">
  <div class="featured__boximg">
    <button class="btn featured__btn" onclick = "Addwatch('${element.imdbId}')">
      <i onclick = "featured__heartIcon()" class='bx bxs-heart featured__heartIcon'></i>
    </button>
    <img class="featured__img" src=${element.youtubePoster} alt="">
  </div>
  <span class="featured__span d-block mb-2 text-black-50">USA, 2016 - Current</span> 
  <p class="featured__p mb-2"><b>${element.title}</b></p> 
  <div class="retings d-flex align-items-center mb-2">
    <div class="d-flex align-items-center me-4">
      <img class="hero__imgImbd me-2" src="images/imbd.svg" alt="">
    <span class="hero__price reting text-black-50">86.0 / 100</span>
    </div>
    <div class="d-flex align-items-center">
      <i class='bx bxs-star hero__icon me-2' ></i>
        <span class="hero__stats reting text-black-50">${element.imdbRating}</span>
    </div>
  </div>
  <span class="featured__text text-black-50">${element.categories} </span>
  <button onclick="moreInfo('${element.imdbId}')" class="btn btn__summarry mt-3 mb-3">Summary</button>
  </div>
    `
  
  ulListDrama.appendChild(li); 
  })
})

// nine Page
let one9 = document.querySelector('.one10')

let ninethArray = movies.filter((movie,index) => {
  return index >= 531 && index < 560
})

one9.addEventListener('click', () => {
  ulListDrama.innerHTML = ''
  ninethArray.forEach(element => {
    let li = document.createElement("li");
    // li.className = 'featured__item';
    li.classList.add("featured__item");
    li.innerHTML = `
    <div class="featured__box d-flex flex-column justify-content-center align-items-start">
  <div class="featured__boximg">
    <button class="btn featured__btn" onclick = "Addwatch('${element.imdbId}')">
      <i onclick = "featured__heartIcon()" class='bx bxs-heart featured__heartIcon'></i>
    </button>
    <img class="featured__img" src=${element.youtubePoster} alt="">
  </div>
  <span class="featured__span d-block mb-2 text-black-50">USA, 2016 - Current</span> 
  <p class="featured__p mb-2"><b>${element.title}</b></p> 
  <div class="retings d-flex align-items-center mb-2">
    <div class="d-flex align-items-center me-4">
      <img class="hero__imgImbd me-2" src="images/imbd.svg" alt="">
    <span class="hero__price reting text-black-50">86.0 / 100</span>
    </div>
    <div class="d-flex align-items-center">
      <i class='bx bxs-star hero__icon me-2' ></i>
        <span class="hero__stats reting text-black-50">${element.imdbRating}</span>
    </div>
  </div>
  <span class="featured__text text-black-50">${element.categories} </span>
  <button onclick="moreInfo('${element.imdbId}')" class="btn btn__summarry mt-3 mb-3">Summary</button>
  </div>
    `
  
  ulListDrama.appendChild(li); 
  })
})

// nine Page
let ten = document.querySelector('.one11')

let tenthArray = movies.filter((movie,index) => {
  return index >= 561 && index < 590
})

ten.addEventListener('click', () => {
  ulListDrama.innerHTML = ''
  tenthArray.forEach(element => {
    let li = document.createElement("li");
    // li.className = 'featured__item';
    li.classList.add("featured__item");
    li.innerHTML = `
    <div class="featured__box d-flex flex-column justify-content-center align-items-start">
  <div class="featured__boximg">
    <button class="btn featured__btn" onclick = "Addwatch('${element.imdbId}')">
      <i onclick = "featured__heartIcon()" class='bx bxs-heart featured__heartIcon'></i>
    </button>
    <img class="featured__img" src=${element.youtubePoster} alt="">
  </div>
  <span class="featured__span d-block mb-2 text-black-50">USA, 2016 - Current</span> 
  <p class="featured__p mb-2"><b>${element.title}</b></p> 
  <div class="retings d-flex align-items-center mb-2">
    <div class="d-flex align-items-center me-4">
      <img class="hero__imgImbd me-2" src="images/imbd.svg" alt="">
    <span class="hero__price reting text-black-50">86.0 / 100</span>
    </div>
    <div class="d-flex align-items-center">
      <i class='bx bxs-star hero__icon me-2' ></i>
        <span class="hero__stats reting text-black-50">${element.imdbRating}</span>
    </div>
  </div>
  <span class="featured__text text-black-50">${element.categories} </span>
  <button onclick="moreInfo('${element.imdbId}')" class="btn btn__summarry mt-3 mb-3">Summary</button>
  </div>
    `
  
  ulListDrama.appendChild(li); 
  })
})


// nine Page
let eleven = document.querySelector('.one12')

let elevenArray = movies.filter((movie,index) => {
  return index >= 600 && index < 630
})

ten.addEventListener('click', () => {
  ulListDrama.innerHTML = ''
  elevenArray.forEach(element => {
    let li = document.createElement("li");
    // li.className = 'featured__item';
    li.classList.add("featured__item");
    li.innerHTML = `
    <div class="featured__box d-flex flex-column justify-content-center align-items-start">
  <div class="featured__boximg">
    <button class="btn featured__btn" onclick = "Addwatch('${element.imdbId}')">
      <i onclick = "featured__heartIcon()" class='bx bxs-heart featured__heartIcon'></i>
    </button>
    <img class="featured__img" src=${element.youtubePoster} alt="">
  </div>
  <span class="featured__span d-block mb-2 text-black-50">USA, 2016 - Current</span> 
  <p class="featured__p mb-2"><b>${element.title}</b></p> 
  <div class="retings d-flex align-items-center mb-2">
    <div class="d-flex align-items-center me-4">
      <img class="hero__imgImbd me-2" src="images/imbd.svg" alt="">
    <span class="hero__price reting text-black-50">86.0 / 100</span>
    </div>
    <div class="d-flex align-items-center">
      <i class='bx bxs-star hero__icon me-2' ></i>
        <span class="hero__stats reting text-black-50">${element.imdbRating}</span>
    </div>
  </div>
  <span class="featured__text text-black-50">${element.categories} </span>
  <button onclick="moreInfo('${element.imdbId}')" class="btn btn__summarry mt-3 mb-3">Summary</button>
  </div>
    `
  
  ulListDrama.appendChild(li); 
  })
})





let twelev = document.querySelector('.one13')

let twelevArray = movies.filter((movie,index) => {
  return index >= 640 && index < 660
})

ten.addEventListener('click', () => {
  ulListDrama.innerHTML = ''
  twelevArray.forEach(element => {
    let li = document.createElement("li");
    // li.className = 'featured__item';
    li.classList.add("featured__item");
    li.innerHTML = `
    <div class="featured__box d-flex flex-column justify-content-center align-items-start">
  <div class="featured__boximg">
    <button class="btn featured__btn" onclick = "Addwatch('${element.imdbId}')">
      <i onclick = "featured__heartIcon()" class='bx bxs-heart featured__heartIcon'></i>
    </button>
    <img class="featured__img" src=${element.youtubePoster} alt="">
  </div>
  <span class="featured__span d-block mb-2 text-black-50">USA, 2016 - Current</span> 
  <p class="featured__p mb-2"><b>${element.title}</b></p> 
  <div class="retings d-flex align-items-center mb-2">
    <div class="d-flex align-items-center me-4">
      <img class="hero__imgImbd me-2" src="images/imbd.svg" alt="">
    <span class="hero__price reting text-black-50">86.0 / 100</span>
    </div>
    <div class="d-flex align-items-center">
      <i class='bx bxs-star hero__icon me-2' ></i>
        <span class="hero__stats reting text-black-50">${element.imdbRating}</span>
    </div>
  </div>
  <span class="featured__text text-black-50">${element.categories} </span>
  <button onclick="moreInfo('${element.imdbId}')" class="btn btn__summarry mt-3 mb-3">Summary</button>
  </div>
    `
  
  ulListDrama.appendChild(li); 
  })
})


let thitheen = document.querySelector('.one14')

let thitheenArray = movies.filter((movie,index) => {
  return index >= 640 && index < 660
})

ten.addEventListener('click', () => {
  ulListDrama.innerHTML = ''
  thitheenArray.forEach(element => {
    let li = document.createElement("li");
    // li.className = 'featured__item';
    li.classList.add("featured__item");
    li.innerHTML = `
    <div class="featured__box d-flex flex-column justify-content-center align-items-start">
  <div class="featured__boximg">
    <button class="btn featured__btn" onclick = "Addwatch('${element.imdbId}')">
      <i onclick = "featured__heartIcon()" class='bx bxs-heart featured__heartIcon'></i>
    </button>
    <img class="featured__img" src=${element.youtubePoster} alt="">
  </div>
  <span class="featured__span d-block mb-2 text-black-50">USA, 2016 - Current</span> 
  <p class="featured__p mb-2"><b>${element.title}</b></p> 
  <div class="retings d-flex align-items-center mb-2">
    <div class="d-flex align-items-center me-4">
      <img class="hero__imgImbd me-2" src="images/imbd.svg" alt="">
    <span class="hero__price reting text-black-50">86.0 / 100</span>
    </div>
    <div class="d-flex align-items-center">
      <i class='bx bxs-star hero__icon me-2' ></i>
        <span class="hero__stats reting text-black-50">${element.imdbRating}</span>
    </div>
  </div>
  <span class="featured__text text-black-50">${element.categories} </span>
  <button onclick="moreInfo('${element.imdbId}')" class="btn btn__summarry mt-3 mb-3">Summary</button>
  </div>
    `
  
  ulListDrama.appendChild(li); 
  })
})





let foutheen = document.querySelector('.one15')

let foutheenArray = movies.filter((movie,index) => {
  return index >= 640 && index < 660
})

ten.addEventListener('click', () => {
  ulListDrama.innerHTML = ''
  foutheenArray.forEach(element => {
    let li = document.createElement("li");
    // li.className = 'featured__item';
    li.classList.add("featured__item");
    li.innerHTML = `
    <div class="featured__box d-flex flex-column justify-content-center align-items-start">
  <div class="featured__boximg">
    <button class="btn featured__btn" onclick = "Addwatch('${element.imdbId}')">
      <i onclick = "featured__heartIcon()" class='bx bxs-heart featured__heartIcon'></i>
    </button>
    <img class="featured__img" src=${element.youtubePoster} alt="">
  </div>
  <span class="featured__span d-block mb-2 text-black-50">USA, 2016 - Current</span> 
  <p class="featured__p mb-2"><b>${element.title}</b></p> 
  <div class="retings d-flex align-items-center mb-2">
    <div class="d-flex align-items-center me-4">
      <img class="hero__imgImbd me-2" src="images/imbd.svg" alt="">
    <span class="hero__price reting text-black-50">86.0 / 100</span>
    </div>
    <div class="d-flex align-items-center">
      <i class='bx bxs-star hero__icon me-2' ></i>
        <span class="hero__stats reting text-black-50">${element.imdbRating}</span>
    </div>
  </div>
  <span class="featured__text text-black-50">${element.categories} </span>
  <button onclick="moreInfo('${element.imdbId}')" class="btn btn__summarry mt-3 mb-3">Summary</button>
  </div>
    `
  
  ulListDrama.appendChild(li); 
  })
})




let fiftheen = document.querySelector('.one16')

let fiftheenArray = movies.filter((movie,index) => {
  return index >= 640 && index < 660
})

ten.addEventListener('click', () => {
  ulListDrama.innerHTML = ''
  fiftheenfoutheenArray.forEach(element => {
    let li = document.createElement("li");
    // li.className = 'featured__item';
    li.classList.add("featured__item");
    li.innerHTML = `
    <div class="featured__box d-flex flex-column justify-content-center align-items-start">
  <div class="featured__boximg">
    <button class="btn featured__btn" onclick = "Addwatch('${element.imdbId}')">
      <i onclick = "featured__heartIcon()" class='bx bxs-heart featured__heartIcon'></i>
    </button>
    <img class="featured__img" src=${element.youtubePoster} alt="">
  </div>
  <span class="featured__span d-block mb-2 text-black-50">USA, 2016 - Current</span> 
  <p class="featured__p mb-2"><b>${element.title}</b></p> 
  <div class="retings d-flex align-items-center mb-2">
    <div class="d-flex align-items-center me-4">
      <img class="hero__imgImbd me-2" src="images/imbd.svg" alt="">
    <span class="hero__price reting text-black-50">86.0 / 100</span>
    </div>
    <div class="d-flex align-items-center">
      <i class='bx bxs-star hero__icon me-2' ></i>
        <span class="hero__stats reting text-black-50">${element.imdbRating}</span>
    </div>
  </div>
  <span class="featured__text text-black-50">${element.categories} </span>
  <button onclick="moreInfo('${element.imdbId}')" class="btn btn__summarry mt-3 mb-3">Summary</button>
  </div>
    `
  
  ulListDrama.appendChild(li); 
  })
})





const FilterForm = document.getElementById('filterForm');
let Search2 = document.getElementById("SearchInput");
const select = document.getElementById('selectCategory');
const YearFrom = document.getElementById('YearFrom');
const YearTo = document.getElementById('YearTo');
let Result = document.getElementById('FilterResult');


// FILTER PART ------


movies.forEach((item,index) =>{
  if (index < 10){
    let cat = item.categories;
    cat.forEach(el =>{
      let option = document.createElement('option');
      option.innerText = el;
      select.append(option);
    })
  }
})




FilterForm.addEventListener('submit', (e) =>{
 e.preventDefault();
 let value = Search2.value.toLowerCase();
 let from = YearFrom.value;
 let to = YearTo.value;
 
 Result.innerHTML = '';
 movies.forEach(el =>{
   let title = el.title.toLowerCase();
   if (title.indexOf(value) != -1 && el.year >= from && el.year <= to){
        let li = document.createElement('li');
        li.className = 'featured__item';
        li.innerHTML = `
        <div class="featured__box d-flex flex-column justify-content-center align-items-start">
  <div class="featured__boximg">
    <button class="btn featured__btn" onclick = "Addwatch('${el.imdbId}')">
      <i onclick = "featured__heartIcon()" class='bx bxs-heart featured__heartIcon'></i>
    </button>
    <img class="featured__img" src=${el.youtubePoster} alt="">
  </div>
  <span class="featured__span d-block mb-2 text-black-50">${el.year}</span> 
  <p class="featured__p mb-2"><b>${el.title}</b></p> 
  <div class="retings d-flex align-items-center mb-2">
    <div class="d-flex align-items-center me-4">
      <img class="hero__imgImbd me-2" src="images/imbd.svg" alt="">
    <span class="hero__price reting text-black-50">86.0 / 100</span>
    </div>
    <div class="d-flex align-items-center">
      <i class='bx bxs-star hero__icon me-2' ></i>
        <span class="hero__stats reting text-black-50">${el.imdbRating}</span>
    </div>
  </div>
  <span class="featured__text text-black-50">${el.categories} </span>
  <button onclick="moreInfo('${el.imdbId}')" class="btn btn__summarry mt-3 mb-3">Summary</button>
  </div>
        `;
      Result.appendChild(li);
    }
  })
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



