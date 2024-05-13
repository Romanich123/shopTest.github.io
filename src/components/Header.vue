<template>
  <header>
    <div class="container--header">
      <div class="nav">
        <div class="nav__item">
          <div class="nav__button nav__button--back">
            <a href="#" class="c-btn c-btn__nav c-btn__nav--back color--white typography__font--bold typography__size--subtitle-1 text-uppercase"><img src="../assets/back.svg" alt=""><span>Back</span></a>
          </div>
        </div>
        <div class="nav__item">
          <div class="nav__info">
            <img src="../assets/coins.png" alt="coins">
            <div class="nav__info">
              <div class="nav__header">
                <div class="nav__descr">
                  <p class="typography typography__font--leksaBold color--white typography__size--subtitle-1">100,5k</p>
                  <p class="typography__font--medium typography__size--caption color--sky">Coins</p>
                </div>
                <div class="nav__btn">
                  <a href="#" class="c-btn c-btn__add">
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_d_1_1522)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.18372H7V6.18372H2V9.18372H7V14.1837H10V9.18372H15V6.18372H10V1.18372Z" fill="url(#paint0_linear_1_1522)"/>
                      </g>
                      <defs>
                        <filter id="filter0_d_1_1522" x="0" y="0.183716" width="17" height="17" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                          <feOffset dy="1"/>
                          <feGaussianBlur stdDeviation="1"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1522"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1522" result="shape"/>
                        </filter>
                        <linearGradient id="paint0_linear_1_1522" x1="8.5" y1="1.18372" x2="8.5" y2="14.1837" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#B1FFAF"/>
                          <stop offset="1" stop-color="white"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </a>
                </div>

              </div>
            </div>
          </div>
          <div class="nav__info">
            <img src="../assets/crystals.png" alt="crystals">
            <div class="nav__header">
              <div class="nav__descr">
                <p class="typography typography__font--leksaBold color--white typography__size--subtitle-1">1 254</p>
                <p class="typography__font--medium typography__size--caption color--sky">Crystals</p>
              </div>
              <div class="nav__btn">
                <a href="#" class="c-btn c-btn__add">
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_1_1522)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1.18372H7V6.18372H2V9.18372H7V14.1837H10V9.18372H15V6.18372H10V1.18372Z" fill="url(#paint0_linear_1_1522)"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_1_1522" x="0" y="0.183716" width="17" height="17" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="1"/>
                        <feGaussianBlur stdDeviation="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1522"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1522" result="shape"/>
                      </filter>
                      <linearGradient id="paint0_linear_1_1522" x1="8.5" y1="1.18372" x2="8.5" y2="14.1837" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#B1FFAF"/>
                        <stop offset="1" stop-color="white"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="nav__item nav__item--home">
          <div class="nav__button nav__button--home">
            <a href="#" class="c-btn c-btn__nav c-btn__nav--home color--white typography__font--bold typography__size--subtitle-1 text-uppercase"><img src="../assets/home.svg" alt=""><span>Home</span></a>
          </div>
        </div>
      </div>
    </div>
  </header>

</template>
<script>
export default {
  name: 'Header',
  data() {
    return{

    }
  }
}

</script>
<style>

</style>