/**
 * Project 1 - Interactive Image
 * Name: Darcy Noonan
 * Image: The duck is made of three ellipses, a rectangle, and a triangle. The beak is orange, eye is black, and the body is yellow. 
 * Interactions: Use the left and right arrow keys to make the duck move in the respective directions. 
 * If you put the mouse on the right side of the screen, the angle of the  duck becomes steeper. 
 * Completion Date: February 23
 * I refered to the book to double check where the brackets go and how to use the keycodes. 
 */

// Global Variables 
var a = .5 // rotation angle
var x = 0, y = 0// sprite position 

// Setup for Canvas, New X/Y
function setup() {
  // this function will run once
  createCanvas(600, 600); // create a 600x400 pixel drawing canvas
x = width/2; //sets a new value for X. 
y = height/2; // sets a new value for y.
}

//Drawing function. Background, image. 
function draw() {
  // this function runs again and again (60x per second)
  background(0, 130, 160); //light gray background
  
push (); 
rotate (a) // rotation angle. Moves diagonally upwards
  translate (x, y) //sets the translation 

  fill ("orange") // Bill color
  rect (0 - 161, 0 - 58, 50, 20)// beak
  fill ("yellow") // Duck color
  triangle (0 + 120, 0, 0 + 75, 0 + 30, 0 + 90, -10) // tail
  ellipse (0, 0, 190, 100)// duck body
  ellipse (0 - 78, 0 - 55, 120, 70)// duck head
  fill (0, 0, 0)// black for the eye
  ellipse (0 - 107, 0 - 58, 15) // eye

  pop (); // closes drawing layer
 
   if (keyIsPressed) {
    if (keyCode == LEFT_ARROW) { //Moves by left arrow key
      x--;
    } 
    else if (keyCode == RIGHT_ARROW) { //moves by right arrow key
      x++;
    }
  }
  if (mouseX > x) { // changes the rotation angle when the mouse is on the left side. 
    a = .4; //steeper angle
  } else {
    a = .3;} // defaults to less steep angle
  }
