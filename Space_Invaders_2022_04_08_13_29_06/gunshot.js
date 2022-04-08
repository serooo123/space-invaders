//funksjonen skudd, posisjonene og størrelsen 

function Drop(x, y) {
  this.x = x;
  this.y = y;
  this.r = 8;
  this.toDelete = false;

  
//viser skuddene og fargen 
  
  this.show = function() {
    noStroke();
    fill('red');
    rect(this.x, this.y, this.r*2, this.r*2);
  }


//vis skuddene treffer sirklene så blir sirklene borte 

  this.evaporate = function() {
    this.toDelete = true;
  }

  this.hits = function(Sirkels) {
    var d = dist(this.x, this.y, Sirkels.x, Sirkels.y);
    if (d < this.r + Sirkels.r) {
      return true;
    } else {
      return false;
    }
  }
  
//hastigheten til skuddene 

  this.move = function() {
    this.y = this.y - 4;
  }

}
