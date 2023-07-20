// SWIPER JS SPONSOR 
const sponsorSwiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 90,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
  });


  // OVERLAY MENU START 

const barIconu = document.querySelector('.fa-bars')
const xMark = document.querySelector('.fa-xmark')

barIconu.onclick = function(){
  document.querySelector('.overlay').style.width = '100%'
}

xMark.onclick = function(){
  document.querySelector('.overlay').style.width ='0'
}

  // OVERLAY MENU END 


  // CARD SECTION

window.addEventListener('load',getMelumatlariGetir)


const cardsEl = document.querySelector('.cards')




async function getMelumatlariGetir(){
  
  const cardsAPI = 'cardsapi.json'
  
  try{
    const istek = await fetch(cardsAPI)
    const gelenCavab = await istek.json()

    for(i=0;i<gelenCavab.length;i++){
    cardsEl.innerHTML +=`
    <div class="swiper-slide card">
      <div class="card__logo"><img src="${gelenCavab[i].photo}" alt=""></div>
      <h4>${gelenCavab[i].title}</h4>
      <p>${gelenCavab[i].body}</p>
      </div>
    </div>`
    }



  }

  catch(xeta){
    console.log(xeta);
  }
}


  const cardSwiper = new Swiper(".cards-swiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-duyme",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },

    
  });

