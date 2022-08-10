nose_X=0;
nose_Y=0;

function preload(){
clownNose=loadImage("https://i.postimg.cc/fy2sTnxT/devil-horn-clipart-cute-5.png");
}

function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function modelLoaded(){
    console.log("poseNet is intialized ")
}

function gotPoses(results){
    if (results.length>0) {
    console.log(results);
    console.log("nose x="+results[0].pose.nose.x);
    console.log("nose y="+results[0].pose.nose.y);
    nose_X=results[0].pose.rightEye.x-40;
    nose_Y=results[0].pose.rightEye.y-200;
    console.log("nose_X="+nose_X);
    console.log("nose_Y="+nose_Y);
    }
}

function draw(){
image(video,0,0,400,400);
image(clownNose,nose_X,nose_Y,150,150);
}

function TakeSnapshot(){
    save('image.png');
}