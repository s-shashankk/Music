//detecting button press    
var noofdrumbuttons=document.querySelectorAll(".drum").length; 
for(var i=0; i<document.querySelectorAll(".drum").length;i++){      //i<document.querySelectorAll(".drum").length this gives number of drums
document.querySelectorAll("button")[i].addEventListener("click",handleclick);     //click and handleclick are the parameters, event handler will accept 2 parameters -Type and listeners--handleclick() is connecting function and listener
function handleclick(){
var buttoninnerHtml=this.innerHTML;

makesound(buttoninnerHtml);  // down i have created function for makesound parameter is buttoninnerHTML
buttonAnimation(buttoninnerHtml);
};
}
//detecing key board press
document.addEventListener("keypress",function(Event){  // Event is an keyword similar to innerhtml for keyboard
makesound(Event.key);// Event.key will give the keyboard key
//Event.key will give which key was pressed in keyboard
buttonAnimation(Event.key);
});


function makesound(key){
    switch (key) {
        case "d":
            var tom_1=new Audio("sounds/tom-1.mp3");
            tom_1.play();
        
            break;
        case "a":
            var tom_2=new Audio("sounds/tom-2.mp3");
            tom_2.play();
        break;
        case "s":
            var tom_3=new Audio("sounds/tom-3.mp3");
            tom_3.play();
        break;
        case "w":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
        break;
        case "j":
            var kick_bass=new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
        break;
        case "k":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
        break;
        case "l":
            var tom_4=new Audio("sounds/tom-4.mp3");
            tom_4.play();
        break;
    
        default:console.log(buttoninnerHtml);
            break;
    }
    
}
//Animation
function buttonAnimation(currentkey){
    var activeButton=document.querySelector("."+currentkey);  //class name is specified with  ".w/d/a/s..."
    activeButton.classList.add("pressed");  // classlist allows to add ,remove,toggle,check wheather the specified CSS class is present or not
setTimeout(function() {        // two parameters have been passed one is function other time 
    activeButton.classList.remove("pressed");
},100);
}





// var audio=new Audio("sounds/tom-1.mp3");
//audio.play();
