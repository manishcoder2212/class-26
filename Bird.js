class Bird{
constructor(m,a,n,i){
 var order1={
   restitution:1,
   density:1.5,
   friction:1.0
 }
  this.bird=Bodies.rectangle(m,a,n,i,order1)
 World.add(world,this.bird)
this.mybird=loadImage("imagees/download.png")

 this.width=n
 this.height=i
}
display(){
 
  this.bird.position.x=mouseX
 this.bird.position.y=mouseY
 push ();
 translate(this.bird.position.x,this.bird.position.y) 
 rotate (this.bird.angle)
  imageMode(CENTER)
 fill  ("red")  
    image(this.mybird,0,0,this.width,this.height)
    pop ();

}



}