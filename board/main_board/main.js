

// -----------------드롭다운
function show(){
    const bar = document.getElementById('search_history');
    bar.classList.toggle('hide_bar')
}

// function show1(){
//     const bar1 = document.getElementById('search_history1');
//     bar1.classList.toggle('hide_bar1')
// }


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
    const button = document.getElementById('search_input');
    
    // 바깥클릭시 if문을 활용하고
    // box 클레스에 hide_bar 가있으면 add_hide_bar
    // bot 클레스에 hide_bar 있으면 do nothing

    if (!box.contains(event.target) && !button.contains(event.target) ) {
        box.classList.toggle('hide_bar');
    }
});


// ====================댓글메뉴hide




//   && << 둘다 true일때 실행되라
//    ||  << 둘중하나가 true라면 실행해라

// const goboard = 

function next(event){
    event.preventDefault()
    // handleLocation
}