class Particle {
  constructor(x,y,color) {
    this.x=x;
    this.y=y;
    this.color=color;
  }
  draw() {
    stroke(color)
    strokeWeight(10)
    point(this.x,this.y)
  }
}

let particles = new Array(100)

function setup() {
 // put setup code here
 createCanvas(window.width,window.height)
 for (var i = 0; i < particles.length; i++) {
  particles[i] = new Particle((i % 10) * width / 10 + width / 20, Math.floor(i/10) * height / 10 + height / 20)
 }
}

function draw() {
  // put drawing code here
  background(20)
  for (var i = 0; i < particles.length; i++) {
    particles[i].draw();
  }
}
