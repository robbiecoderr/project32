const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
 getBackground = getBackgroundImg
}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

var response = await fetch ({"abbreviation":"IST","client_ip":"2601:cd:280:feb0:fd04:ac7a:d5e0:b4c0","datetime":"2021-06-25T05:22:28.128640+05:30","day_of_week":5,"day_of_year":176,"dst":false,"dst_from":null,"dst_offset":0,"dst_until":null,"raw_offset":19800,"timezone":"Asia/Kolkata","unixtime":1624578748,"utc_datetime":"2021-06-24T23:52:28.128640+00:00","utc_offset":"+05:30","week_number":25})
    //change the data in JSON format
var responseJSON = await response.json();
var datetime = responseJSON.datetime;
    // write code slice the datetime
hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
if (hour>=04 && hour<06){
    bg = "sunrise1.png";
}else if (hour>=06 && hour<=08){
    bg = "sunrise2.png"
}else if (hour>=23 && hour<=0){
    bg = "sunset10.png"
}else if (hour>=0 && hour<=03){
    bg = "sunset11.png"
}else{
    bg = "sunset11.png";
}
backgroundImg = loadImage(bg);{

}}
