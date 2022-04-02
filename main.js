var canvas = new fabric.Canvas('myCanvas');
player_x=10;
player_y=10;
block_width=30;
block_height=30;
var player_me="";
var block_nonliving="";
function playerupdate(){

    fabric.Image.fromURL("player.png",function(Img){
        player_me=Img;
    player_me.scaleToWidth(150);
    player_me.scaleToHeight(140);
    player_me.set({top:player_y,left:player_x});
    canvas.add(player_me);
    });
    
}

function new_image(get_image){

    fabric.Image.fromURL(get_image,function(Img){
        block_nonliving=Img;
        block_nonliving.scaleToWidth(block_width);
        block_nonliving.scaleToHeight(block_height);
        block_nonliving.set({top:player_y,left:player_x});
    canvas.add(block_nonliving);
    });
    

}

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
keyPressed=e.keyCode;
console.log(keyPressed);
if(e.shiftKey==true && keyPressed =='80')
{
    block_width=block_width+10;
    block_height=block_height+10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;
}
if(e.shiftKey==true && keyPressed =='77')
{
    block_width=block_width-10;
    block_height=block_height-10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;
}
if(keyPressed=='38'){
    up();
    console.log("up");

}
if(keyPressed=='40'){
    down();
    console.log("down");
    
}
if(keyPressed=='37'){
    left();
    console.log("left");
    
}
if(keyPressed=='39'){
    right();
    console.log("right");
    
}
if(keyPressed=='87'){
    new_image('wall.jpg');
    console.log('w');
    
}
if(keyPressed=='71'){
    new_image('ground.png');
    console.log('g');
    
}
if(keyPressed=='76'){
    new_image('light_green.png');
    console.log('l');
    
}
if(keyPressed=='84'){
    new_image('trunk.jpg');
    console.log('t');
    
}
if(keyPressed=='82'){
    new_image('roof.jpg');
    console.log('r');
}

if(keyPressed=='89'){
    new_image('yellow_wall.png');
    console.log('y');
    
}

if(keyPressed=='68'){
    new_image('dark_green.png');
    console.log('d');
    
}

if(keyPressed=='85'){
    new_image('unique.png');
    console.log('u');
    
}

if(keyPressed=='67'){
    new_image('cloud.jpg');
    console.log('c');
    
}
}
function up()
{
    if(player_y>=0)
    {
        player_y = player_y - block_height;
        console.log("block image height = " + block_height);
        console.log("when up arrow key is pressed, x = " + player_x + ", Y = "+player_y) ;
        canvas.remove(player_me);
        playerupdate();
    }
}
function down()
{
    if(player_y<=500)
    {
        player_y = player_y + block_height;
        console.log("block image height = " + block_height);
        console.log("when down arrow key is pressed, x = " + player_x + ", Y = "+player_y) ;
        canvas.remove(player_me);
        playerupdate();
    }
}
function right()
{
    if(player_x<=850)
    {
        player_x = player_x + block_width;
        console.log("block image width = " + block_width);
        console.log("when right key is pressed, x = " + player_x + ", Y = "+player_y) ;
        canvas.remove(player_me);
        playerupdate();
    }
}
function left()
{
    if(player_x>=0)
    {
        player_x = player_x - block_width;
        console.log("block image width = " + block_width);
        console.log("when left key is pressed, x = " + player_x + ", Y = "+player_y) ;
        canvas.remove(player_me);
        playerupdate();
    }
}