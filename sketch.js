//This image is from Annie Albers.
//https://awarewomenartists.com/en/artiste/anni-albers/

let img;

function preload(){
  img = loadImage("albers.jpg");
}

function setup() {
  createCanvas(500, 400);
  rectMode(CENTER);

}

function draw() {
  //image(name, x, y, w, h);
  image(img, 0, 0, 500, 400);
  
  //get() function gets pixel data from the pixel array
  // Use get it with the mouse coordinates
  let col = get(mouseX, mouseY);
  //1) Print out the color value under the mouse
  fill(col);
  rect(mouseX, mouseY, 50,50);

  let p = createP('Mouse location: ('+mouseX+','+mouseY+')');
  p.style('background-color','yellow');

  p.position(20,600);


}

