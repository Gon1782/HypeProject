

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

    const box = document.getElementById('search_history');
    const button = document.getElementById('search_input');
    const isBoxShowing = !box.classList.contains('hide_bar');
    const isButtonClicked = button.contains(event.target);
    

    //if 문에서 false가 나오면 return으로 아무것도 반환하지않는다
    if(isBoxShowing && !isButtonClicked ){
        box.classList.add('hide_bar');
    }  
    return
});

    document.addEventListener('click', function handleClickOutsideBox(event) {
        // 👇️ the element the user clicked
    
        const box1 = document.getElementById('search_history1');
        const button1 = document.getElementById('search_input1');
        const isBoxShowing1 = !box1.classList.contains('hide_bar1');
        const isButtonClicked1 = button1.contains(event.target);
        
    
        //if 문에서 false가 나오면 return으로 아무것도 반환하지않는다
        if(isBoxShowing1 && !isButtonClicked1 ){
            box1.classList.add('hide_bar1');
        }  
        return
    

});

// ===========================modify

const comment_modify = document.getElementById('comment_modify')
function comment_modifyed(){

    const comment_text = document.querySelector('#comment_text')
    const comment_text_value = comment_text.innerHTML

    console.log(comment_text)

    const comment_input_container = document.querySelector('.comment_input_container')
    comment_input_container.style.display = 'block'
    
    comment_text.style.display = 'none'
    
    const comment_input = document.getElementById('comment_input');

    comment_input.value = comment_text_value
    
}

function comment_save(){
    const comment_box = document.getElementById('comment_text');
    const comment_input = document.getElementById('comment_input');
    const comment_input_container = document.querySelector('.comment_input_container')
    const comment_text_value = comment_input.value

    console.log(comment_text_value)
    comment_box.innerHTML = comment_text_value
    comment_input_container.style.display = 'none'
    comment_box.style.display = 'block'

}   

