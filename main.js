canvas= document.getElementById("myCanvas");

ctx=canvas.getContext("2d");
var roverw=100;
var roverh=100;
var roverx=45;
var rovery=50;

var rover="rover.png";

nassa_mars_images_array=["marte1.jpeg", "marte2.jpeg", "marte3.jpeg", "marte4.jpeg"];
random_number=Math.floor(Math.random()*4);
console.log(random_number);
background_image=nassa_mars_images_array[random_number];
function add() {
     background_imgTag = new Image(); 
     //define una variable con la imagen nuevae
     background_imgTag.onload = uploadBackground;
     // establece la función para cargar esta variable
      background_imgTag.src = background; 
     // carga la imagen 
     rover_imgTag = new Image(); 
     //define una variable para la imagen nueva 
     rover_imgTag.onload = uploadrover; 
     // establece la función para cargar esta variable
      rover_imgTag.src = rover; 
     // carga la imagen
     }
     function uploadBackground()
     {
        ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
     }
     function uploadrover()
     {
        ctx.drawImage(rover_imgTag, roverx, rovery, roverw, roverh);
     }
     window.addEventListener("keydown", my_keydown);
     function my_keydown(e){
      keyPressed=e.keyCode;
      console.log(keyPressed);

      if(keyPressed =="38"){

         up();
         console.log("up");

      }

      if(keyPressed =="40"){

         down();
         console.log("down");

      }

      if(keyPressed =="37"){

         left();
         console.log("left");

      }

      if(keyPressed =="39"){

         right();
         console.log("right");

      }
     }
     function up(){
      if(rovery >=0){
         rovery=rovery-10;
         console.log("Cuando se presione la flecha hacia arriba, x = " + roverx + " | y = " +rovery);
         uploadBackground();
         uploadrover();
      }
     }

     function down(){
      if(rovery <=500){
         rovery=rovery+10;
         console.log("Cuando se presione la flecha hacia abajo, x = " + roverx + " | y = " +rovery);
         uploadBackground();
         uploadrover();
      }
     }

     function left(){
      if(roverx >=0){
         roverx=roverx-10;
         console.log("Cuando se presione la flecha hacia la izquierda, x = " + roverx + " | y = " +rovery);
         uploadBackground();
         uploadrover();
      }
     }

     function right(){
      if(roverx <=700){
         roverx=roverx+10;
         console.log("Cuando se presione la flecha hacia la derecha, x = " + roverx + " | y = " +rovery);
         uploadBackground();
         uploadrover();
      }
     }