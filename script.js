const buy = document.getElementById('buy')

function purchase(){
    setTimeout(function() {
        buy.innerHTML = '4.00'
    }, 4000)
}

// owl-Carousel

$(function () {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 4,
        margin: 10,
        loop: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            900: {
                items: 4
            }
        }
    });
});