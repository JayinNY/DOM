//Your script goes here
alert ("Am I make you annyoing!?");
confirm ("This election makes you nuts?");
prompt ("Tell me, are you going to vote for whom???");


var firstClick = document.getElementById('theClick');

firstClick.addEventListener("click",function(event){
    console.log(event);
    firstClick.style.fontSize="4em";
}); 

firstClick.addEventListener("mouseover",function(event){
    console.log(event);
    firstClick.style.color= "hotpink";
 }); 

firstClick.addEventListener("mouseleave",function(event){
    console.log(event);
    firstClick.style.color= "white";
 }); 

var backGround = document.getElementById('theSecondClick');

backGround.addEventListener("click",function(event){
    console.log(event);
   backGround.style.backgroundImage = 'url("http://i.myniceprofile.com/101/10186.gif")';
});

backGround.addEventListener("mouseover",function(event){
    console.log(event);
    backGround.style.color= "orange";
 }); 
backGround.addEventListener("mouseleave",function(event){
    console.log(event);
    backGround.style.color= "white";
 }); 

var youTube = document.getElementById('theThirdClick');

youTube.addEventListener("click",function(event){
    console.log(event);
   youTube.style.visibility="hidden";
});

youTube.addEventListener("mouseover",function(event){
    console.log(event);
   youTube.style.color="yellow";
});

youTube.addEventListener("mouseleave",function(event){
    console.log(event);
   youTube.style.color="white";
});

var thePop= document.getElementById('theFourthClick');

thePop.addEventListener("click",function(event){
    console.log(event);
 alert ("Hello GUYSSSSSS!");
});

thePop.addEventListener("click",function(event){
    console.log(event);
 alert ("WHAT UP!");
});
thePop.addEventListener("click",function(event){
    console.log(event);
 confirm ("Did you make your Annoying site!?");
});

thePop.addEventListener("mouseover",function(event){
    console.log(event);
 thePop.style.color="green";
});

thePop.addEventListener("mouseleave",function(event){
    console.log(event);
 thePop.style.color="white";
});




