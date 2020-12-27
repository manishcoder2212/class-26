class Box{
constructor(m,a){
   var order1 ={
       restitution:1,
    friction:3
    }
    this.box=Bodies.rectangle(m,a,100,100,order1);
    World.add(world,this.box);
    
}




display(){
                   rectMode(CENTER)
                   fill  ("blue")  
                   rect(this.box.position.x,this.box.position.y,100,100);
}





}
