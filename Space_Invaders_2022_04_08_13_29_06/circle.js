
//funskjon sirkel og posiisjonene 

function Sirkels(x, y) {
  this.x = x;
  this.y = y;
  this.r = 30;

// hvor fort sirklene går
  this.xdir = 6;

  
//denne funskjonen gjør sånn at sirkler blir borte 
//lager en lyd når skuddene traffer sirklene 
  
  this.grow = function() {
    this.r = this.r.splice;
    diesound.play() 
  }


//shift down gjør sånn at sirklene gå nedover 
  
  this.shiftDown = function() {
    this.xdir *= -1;
    this.y += this.r;
  }


  this.move = function() {
    this.x = this.x + this.xdir;
  }
  

//denne viser sirklene, fargen og posisjonen 
  
  this.show = function() {
    noStroke();
    fill(255,255,255);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

}
