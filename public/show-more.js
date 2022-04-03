document.querySelector('.more').style.display = 'none'
function show_more() {
    more = document.querySelector('.more')
    
    more.style.display === "none" ? [
        more.style.display = 'inline',
    ]
    :
    [
        more.style.display = 'none',
    ]
}
const slide_right = document.querySelector('.slide-right')
const recommendation_container = document.querySelector('.recommendation-container')

slide_right.onclick = () => {
    recommendation_container.scrollLeft += recommendation_container.scrollWidth / 5;
}

function slide_left () {
    recommendation_container.scrollLeft -= recommendation_container.scrollWidth / 5;
}