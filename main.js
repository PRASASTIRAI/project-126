
difference=0;
leftWristX=0;
rightWristX=0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(700, 420);
    canvas.position(590, 168);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background("#033009");

    document.getElementById("square_side").innerHTML = "width and hieght oof the text will be = " + difference +"px";

    textSize(difference);
    fill('#ffffff');
text('Rome Was Not Build In A Day',50,400);
}

function modelLoaded() {
    console.log("PoseNet is Initialised");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
 
        rightWristX= results[0].pose.rightWrist.x;
        leftWristX= results[0].pose.leftWrist.x;

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX );

        difference= floor(leftWristX - rightWristX);
        
        console.log("the width and height of the square is" + difference);
    }
}