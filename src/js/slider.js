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

    item.each(function (index, item) {
        $(item).css({
            minWidth: itemWidth,
        });
    });
});