// const bar = document.getElementById('search_history');

// -----------------드롭다운
function show(){
    const bar = document.getElementById('search_history');
    bar.classList.toggle('hide_bar')
}

function show1(){
    const bar1 = document.getElementById('search_history1');
    bar1.classList.toggle('hide_bar1')
}

// bar.addEventListener('click', function () {
//     if (e.currentTarget == e.target) {
//         const hide_bar = document.getElementById('.hide_bar')
//         hide_bar.style.visibility = 'hidden';
//         // hide_bar.style.visibility = 'hidden';
//     }
// })
// --------------------라이크버튼
$(document).ready(function(){
    $('.content').click(function(){
        $('.content').toggleClass("heart-active")
        $('.tex').toggleClass("heart-active")
        $('.numb').toggleClass("heart-active")
        $('.heart').toggleClass("heart-active")
    });
});



$(document).ready(function(){
    $('.content1').click(function(){
        $('.content1').toggleClass("heart-active1")
        $('.tex1').toggleClass("heart-active1")
        $('.numb1').toggleClass("heart-active1")
        $('.heart1').toggleClass("heart-active1")
    });
});