// dashboard text 타이핑 효과
const content = "안녕하세요! Junior Backend Developer \n 이찬규 입니다.";
const text = document.querySelector(".text");
let i = 0;

function typing(){
    let txt = content[i++];
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
    }
}
setInterval(typing, 150)


// Top 버튼 효과
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 800) {
            $('#top_btn').fadeIn();
        } else {
            $('#top_btn').fadeOut();
        }
    });
    
    $("#top_btn").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });
});

// // aboutme fade-in1
// $(function() {
//     $(window).scroll(function() {
//         if ($(this).scrollTop() > 250) {
//             $('#fade-in1').fadeIn();
//         } else {
//             $('#fade-in1').fadeOut();
//         }
//     });
    
//     $("#fade-in1").click(function() {
//         $('html, body').animate({
//             scrollTop : 0
//         }, 400);
//         return false;
//     });
// });

// // aboutme2 fade-in2
// $(function() {
//     $(window).scroll(function() {
//         if ($(this).scrollTop() > 1000) {
//             $('#fade-in2').fadeIn();
//         } else {
//             $('#fade-in2').fadeOut();
//         }
//     });
    
//     $("#fade-in2").click(function() {
//         $('html, body').animate({
//             scrollTop : 0
//         }, 400);
//         return false;
//     });
// });

// // Projects fade-in3
// $(function() {
//     $(window).scroll(function() {
//         if ($(this).scrollTop() > 1300) {
//             $('#fade-in3').fadeIn();
//         } else {
//             $('#fade-in3').fadeOut();
//         }
//     });
    
//     $("#fade-in3").click(function() {
//         $('html, body').animate({
//             scrollTop : 0
//         }, 400);
//         return false;
//     });
// });

