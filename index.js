var bluecar = document.getElementById("bluecar");
var redcar = document.getElementById("redcar");
var result = document.getElementById("GameOver")
 const score =document.getElementById("score")
 var game = document.getElementById("game");
 var counter = 0;
 var soundOne = document.getElementById("sound")



bluecar.addEventListener("animationiteration",function(){
    var random = ((Math.floor(Math.random()*3)) * 210)
    bluecar.style.left = random + "px";
    counter++
})
window.addEventListener("keydown",function(e){
    if(e.keyCode == "39"){var redcarleft = parseInt(window.getComputedStyle(redcar).getPropertyValue("left"))
    if(redcarleft < 260) {redcar.style.left = (redcarleft + 210) + "px"}
    soundOne.play()
};

    if(e.keyCode == "37"){
        var redcarleft = parseInt(window.getComputedStyle(redcar).getPropertyValue("left"))
        if(redcarleft > 0) {redcar.style.left = (redcarleft - 210) + "px"
        soundOne.play() 
    };
    
    }

})


setInterval(function GameOver(){
    var bluecarTop = parseInt(window.getComputedStyle(bluecar).getPropertyValue("top"))
    var bluecarLeft = parseInt(window.getComputedStyle(bluecar).getPropertyValue("left"));
    var redcarLeft = parseInt(window.getComputedStyle(redcar).getPropertyValue("left"))
    if((bluecarLeft === redcarLeft) && (bluecarTop > 216) && (bluecarTop < 418)){
        result.style.display = "block";
        game.style.display = "none";
        score.innerHTML = `score: ${counter} `;

        counter = 0;
        
    }
}, 10)
