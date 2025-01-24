const slider = document.querySelector('.carousel');
const items = slider.querySelectorAll('.card');
const sliderVisibleWidth = slider.offsetWidth;

function getTotalItemsWidth(items) {
    let totalWidth = 0;
    items.forEach(item => {
        totalWidth += item.offsetWidth;
    });
    return totalWidth;
}

const totalItemsWidth = getTotalItemsWidth(items);
const minXOffset = - (totalItemsWidth - sliderVisibleWidth);

function renderCSS(slider, value) {
    slider.style.transform = `translateX(${value}px)`;
}

function handleScroll() {
    renderCSS(slider, slider.scrollLeft);
}

slider.addEventListener('scroll', handleScroll);