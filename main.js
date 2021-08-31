img="";
status="";
objects=[];

function setup(){
canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="status: Detecting Object";
}

function modelLoaded(){
    console.log("model is not loaded");
    status=true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log("totally no error");
    }
    console.log(results);
    objects=results;
}

function draw(){
image(img,0,0,640,420);
if(status!=""){
    for(i=0;i<objects.length;i++){
        document.getElementById("status").innerHTML="status: Detecting Object"; 
        fill("#00BCFF"); 
        percent=floor(objects[i].confidence*100);
        text(objects[i].label+""+percent+"%",objects[i].x,objects[i].y);
        noFill();
        stroke("#FF0000");  
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
}
}

function preload(){
img=loadImage('dog_cat.jpg');
}