function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: `smooth`
    })
}
var button = document.querySelector(`.btn-home`);
var hero = document.querySelector(`#home-hero`);

button.addEventListener(`click`, () => {
    scrollTo(hero);
})