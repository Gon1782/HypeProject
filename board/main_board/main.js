

// -----------------드롭다운
function show(){
    const bar = document.getElementById('search_history');
    bar.classList.toggle('hide_bar')
}

function show1(){
    const bar1 = document.getElementById('search_history1');
    bar1.classList.toggle('hide_bar1')
}


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

// =======================외부클릭시 지워짐
document.addEventListener('click', function handleClickOutsideBox(event) {
    // 👇️ the element the user clicked
    console.log('user clicked: ', event.target);

    const box = document.getElementById('search_history');
    const button = document.getElementById('search_input')

    if (!box.contains(event.target) && !button.contains(event.target) ) {
        box.classList.toggle('hide_bar');
    }
});

document.addEventListener('click', function handleClickOutsideBox(event) {
    // 👇️ the element the user clicked
    console.log('user clicked: ', event.target);

    const box1 = document.getElementById('search_history1');
    const button1 = document.getElementById('search_input1')

    if (!box1.contains(event.target) && !button1.contains(event.target) ) {
        box1.classList.toggle('hide_bar1');
    }
});


//   && << 둘다 true일때 실행되라
//    ||  << 둘중하나가 true라면 실행해라

// const goboard = 

// function next(event){
//     event.preventDefault()
//     handleLocation
// }