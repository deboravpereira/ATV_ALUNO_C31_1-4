class Boat {
  constructor(x, y, width, height, boatPos) {
    var options = {
      
    };

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;

    
    
    World.add(world, this.body);
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
  
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    
    
    noTint();
    pop();
  }
}
