nose_x = 0
nose_y = 0

function preload(){
   img_nose = loadImage("nose.png")
}

function setup(){
   canvas = createCanvas(350,350);
   canvas.center();
   
   video=createCapture(VIDEO)
   video.hide()
  
   poseNet = ml5.poseNet(video,modelLoaded)
   poseNet.on("pose",gotPoses)
}

function draw(){
image(video,0,0,350,350)
image(img_nose,nose_x,nose_y,50,50) 
}

function take_snapshot(){
   save("captured_image.png")
}

function modelLoaded(){
   console.log("Model Loaded")
}

function gotPoses(error,result){
   if(error){
      console.log(error)
   }
   else{
      console.log(result)
      nose_x = result[0].pose.nose.x;
      nose_y = result[0].pose.nose.y;
   }


}