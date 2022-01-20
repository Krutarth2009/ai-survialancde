mystatus =""
video = ""
objects = []

function preload(){
    //video = createVideo("https://drive.google.com/file/d/1VZBOIX3gQ2oZwghUTXU43p6bYJqhg9E7/view?usp=sharing ")
    video = createVideo('video.mp4')
}


function setup(){
  canvas =createCanvas(400,400)
  video.hide()
  
  }

function draw(){
    image(video,0 , 0, 400, 400);
    if (mystatus !=""){
    classifier.detect(video, gotResult);
    for (i = 0; i < objects.length; i++)
    document.getElementById("status").innerHTML = "status : Objects Detected"
    document.getElementById("objects").innerHTML = "the number of objects are : "+objects.length;

    fill("#FF0000");
    percent = floor(objects[i].confidence * 100);
    text(objects[i].label + " " + percent + "%" , objects[i].x + 15, objects[i].y + 15);
    noFill();
    stroke('FF0000');
    rect(objects[i].x ,objects[i].y , objects[i].width , objects[i].height);
    }
}

function start(){
    console.log("comsoel")
    document.getElementById("Status").innerHTML = "detecting objects";
    classifier = ml5.objectDetector("cocossd",modelloaded)
}

function gotResult(error, results){
    if (error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function modelloaded(){
console.log("modelloaded");
mystatus = true;
video.loop();
video.speed(1);
video.volume(0);

}