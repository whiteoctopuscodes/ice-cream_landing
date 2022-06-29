$(document).ready(function () {
    let position = 0;
    const slidesToShow = 1;
    const slidesToScroll = 1;
    const container = $(`customer-reviews__container `);
    const area = $(`customer-reviews__area `);
    const item = $(`customer-reviews__comment-zone`);
    const btnPrev = $(`btn-previous`);
    const btnNext = $(`btn-next`);
    const itemWidth = container.width() / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    item.each(function (index, item) {
        $(item).css({
            minWidth: itemWidth,
        });
    });
    btnPrev.click(function () {
        console.log(`btn-previous`);
        area.css({
            transform: `translateX(${movePosition}px)`
        });
    });
    btnNext.click(function () {
        console.log(`btn-next`);
    });
});

