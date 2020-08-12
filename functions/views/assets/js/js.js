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

var warray = ["wave.svg", "wave (1).svg", "wave (1).svg"];
var date = new Date();
waveElements = document.getElementsByClassName("wave");
waveElements[2].style.opacity = "0"
waveElements[1].style.opacity = "0";
waveElements[0].style.opacity = "0";
//waveElements[0].style.color="white";
console.log(Date());
var i = 0;

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



var xhr= new XMLHttpRequest();
//xhr.open('POST', '/submit', true)
//xhr.onload=function(){
    //flip card code goes here
//}
//xhr.send()
