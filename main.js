mustachex=0;
mustachey=0;
image1=""
function preload()
{
    image1=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);

}
function draw()
{
image(video,0,0,300,300);
image(image1,mustachex,mustachey,30,30);
}
function take_snapshot()
{
save('picture.png');
}
function modelloaded()
{
    console.log("posenet is initialized");
}
function gotposes(result)
{
    if(result.length>0)
    {
        console.log(result);
        console.log("mustache x="+result[0].pose.mustache.x);
        console.log("mustache y="+result[0].pose.mustache.y);
        mustachex=result[0].pose.mustache.x-20;
        mustachey=result[0].pose.mustache.y-20;
    }
}
