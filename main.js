var right_wrist_x = 0;
var left_wrist_x = 0;
var difference = 0;
function preload() {

}
    function setup() {
video = createCapture(VIDEO);
video.size(500,500);
canvas = createCanvas(500,500);
canvas.position(550,170);
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotResults);
}
    function draw() {
    background('#5ffae5');
    textSize(10);
       textSize(difference);
    fill('#ff6e94');
    text('Arkan', 50, 400);
    }

    function modelLoaded() {
    console.log("Hiiiiii!");
    }
    function gotResults(results) {
        if(results.length>0) {
            console.log(results);
            right_wrist_x = results[0].pose.rightWrist.x;
            left_wrist_x = results[0].pose.leftWrist.x;
            difference = floor(left_wrist_x-right_wrist_x);
        }
    }
 