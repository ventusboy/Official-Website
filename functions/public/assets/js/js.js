var link = [];

for (i = 0; i < 4; i++) {
    let x = 600 * i;
    let y = i + 1;
    link[i] = document.getElementById("link" + i);
    link[i].addEventListener("click", function () {
        let pageindex = "apage" + y.toString();
        let page = document.getElementById(pageindex);
        //let contain=document.getElementById("#holder");
        let contain = document.getElementById("apage1");
        console.log(y);
        page.scrollIntoView({
            block: 'start',
            behavior: 'smooth'
        });
        //setTimeout(() => {
        //    window.scrollBy(0,-100);
        //}, 500);
        //contain.scrollTop+=10;
        //window.scrollTo(0,x);
        /*$('html, body').animate({
         scrollTop: $('#page'+i).offset().top
        }, 500);*/
    })
};

console.log(link[1].innerHTML)


//waveElements[0].style.color="white";
console.log(Date());
var i = 0;

$(document).ready(() => {
    $("#contactForm #name").on('change', function () {
        $('#insertName').html($('#name').val());
        console.log('help');
    });

    $("#contactForm button").on("click", function(){
        if($(".flip-card-inner").hasClass('clickclass')){
            $(".flip-card-inner").addClass('clickclass')
        } else{
            $(".flip-card-inner").addClass('clickclass')
        }

        setTimeout(()=>{
            $(".flip-card-inner").removeClass('clickclass');
            $('#insertName').html('')
        },4100);
        //$(".flip-card-inner").removeClass('clickclass');

    });
   // $("#contactForm #name").val('yikes');

    //document.getElementById("name");
})

/*
waveElements[0].style.animation = "wavefadein 4s ease-in alternate infinite"
//i++;

setTimeout(function () {

    waveElements[1].style.animation = "wavefadein 4s ease-in alternate infinite"
    i++;
}, 6000);

setTimeout(function () {

    waveElements[2].style.animation = "wavefadein 4s ease-in alternate infinite"
    i++;
}, 900);*/




//var xhr= new XMLHttpRequest();
//xhr.open('POST', '/submit', true)
//xhr.onload=function(){
    //flip card code goes here
//}
//xhr.send()
