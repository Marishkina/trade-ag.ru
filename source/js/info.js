const sliderInfo = document.querySelector(".slider-info");
const sliderInfoTitle = sliderInfo.querySelectorAll(".slider-info__title");
const sliderInfoTitleNew = sliderInfo.querySelector(".slider-info__title-new");
const sliderInfoTitleHits = sliderInfo.querySelector(".slider-info__title-hits");
const swiperContainerInfo = sliderInfo.querySelector(".swiper-container-info");
const swiperContainerInfoNew = sliderInfo.querySelector(".swiper-container-info__new");
const swiperContainerInfoHits = sliderInfo.querySelector(".swiper-container-info__hits");

sliderInfoTitleHits.classList.remove("slider-info__title--active");
swiperContainerInfoHits.classList.remove("swiper-container-info--active");

window.addEventListener("resize", function() {
  window.location.reload();
});

sliderInfoTitleNew.addEventListener("click", function() {
  sliderInfoTitleNew.classList.add("slider-info__title--active");
  sliderInfoTitleHits.classList.remove("slider-info__title--active");
  swiperContainerInfoNew.classList.add("swiper-container-info--active");
  swiperContainerInfoHits.classList.remove("swiper-container-info--active");
});

sliderInfoTitleHits.addEventListener("click", function() {
  sliderInfoTitleNew.classList.remove("slider-info__title--active");
  sliderInfoTitleHits.classList.add("slider-info__title--active");
  swiperContainerInfoNew.classList.remove("swiper-container-info--active");
  swiperContainerInfoHits.classList.add("swiper-container-info--active");
});
