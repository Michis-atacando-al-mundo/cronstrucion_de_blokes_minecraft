
var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object = "";
var block_image_object = "";

function player_update()
{
fabric.Image.fromURL("player.png", function(IMG){ 
player_object = IMG;

player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
top:player_y,
left:player_x
 } );
canvas.add(player_object);
 });
}

function new_image(get_image)
{
fabric.Image.fromURL(get_image, function(Img){ 
block_image_object = Img;

block_image_object.scaleToWidth(150);
block_image_object.scaleToHeight(140);
block_image_object.set({
top:player_y,
left:player_x
 } );
canvas.add(block_image_object);}

);}
window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{ 
    keyPressedt = e.keyCode;


   
    if(e.shiftKey == true && keyPressedt == "80")
    {
        block_image_width = block_image_width + 10;
          block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height
    }
    if(e.shiftKey == true && keyPressedt == "77")
    {
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height
    }



    if(keyPressedt == "119")
    {
        up();
    }
    if(keyPressedt == "115")
    {
        down();
    }
    if(keyPressedt == "97")
    {
        left();
    }
    if(keyPressedt == "100")
    {
        right();
    }
    if(keyPressedt == "107")
    {
        new_image("wall.jpg");
    }
    if(keyPressedt == "71")
    {
        new_image("ground.png");
    }
    if(keyPressedt == "76")
    {
        new_image("light_green.png");
    }
    if(keyPressedt == "84")
    {
        new_image("trunk.jpg");
    }
    if(keyPressedt == "82")
    {
        new_image("roof.jpg");
    }
    if(keyPressedt == "89")
    {
        new_image("yellow_wall.png");
    }
    if(keyPressedt == "90")
    {
        new_image("dark_green.png");
    }
    if(keyPressedt == "85")
    {
        new_image("unique.jpg");
    }
    if(keyPressedt == "67")
    {
        new_image("cloud.jpg");
    }
    if(keyPressedt == "38")
    {
        new_image("no den espoiles porfa 3.png");
    }
 }    
    
    
    
    
    
  function up()  
    {
if(player_y >=0)
{
player_y = player_y -block_image_height;

canvas.remove(player_object);
player_update();

}
    }
    
    
    
    



    function down()  
    {
if(player_y >=500)
{
player_y = player_y + block_image_height;

canvas.remove(player_object);
player_update();

}
    }

    function left()  
    {
if(player_x >0)
{
player_x = player_x -block_image_width;

canvas.remove(player_object);
player_update();

}
    }



    function right()  
    {
if(player_y <=850)
{
player_x =player_x + block_image_width;

canvas.remove(player_object);
player_update();

}
    }




