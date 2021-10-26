class Pin{
    
        constructor(x, y, width, height) {
          var options = {
              'restitution':0.8,
              'friction':0.3,
              'density':1.0
          }
          this.body = Bodies.rectangle(x, y, width, height, options);
          this.width = width;
          this.height = height;
          this.image = loadImage("bowlingpin1.png")
          this.Visiblity = 225;
          World.add(world, this.body);
        }
        display(){
          
          if(this.body.speed<4){
            var pos =this.body.position;
          var angle = this.body.angle;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          imageMode(CENTER);
          fill(225);
          stroke("green");
          strokeWeight(3);
          image(this.image,0, 0, this.width, this.height);
          pop();
          }
          else{
            World.remove(world,this.body);
            push()
            this.Visiblity = this.Visiblity -5;
            tint(255,this.Visiblity);
            image(this.image,this.body.position.x,this.body.position.y,50,50);
            pop();
          }
          
        
        }
      
        score(){
          if (this.Visiblity < 0 && this.Visiblity > -1005){
            score++;
          }
        
        }
}