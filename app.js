var clickTime = [];
var currentTime = Date.now();

setInterval(calculateClickSpeed, 3000);


function calculateClickSpeed(){
    var now = Date.now();
    clickTime.push(now);

    if(clickTime.length > 2){
        clickTime.shift();
    }

    if(clickTime.length > 1){
        var firstCLickTime = clickTime[0];
        var lastClickTime = clickTime[clickTime.length - 1];
        var clickSpeed = (lastClickTime - firstCLickTime);
        // var speedDisplay = document.getElementById('speedDisplay');
        // speedDisplay.innerHTML = 'Click Speed: ' + clickSpeed.toFixed(2); 
    }

    if(clickSpeed <= 200.00){
        document.getElementById('image').src = "./moreOrgasm.jpg";
    }
    else if(clickSpeed <= 2000.00){
        document.getElementById('image').src = "./orgasm.jpg";
    }
    else{
        document.getElementById('image').src = "./noOrgasm.jpg";
    }
}


var clickButton = document.getElementById('clickButton');
clickButton.addEventListener('click', calculateClickSpeed);


