class Log{
    constructor(m,a,n){
     this.log=Bodies.rectangle(m,a,n,20)
     World.add(world,this.log)
    
     this.width=n
    
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    display(){
        fill  ("yellow")  
        rect(this.log.position.x,this.log.position.y,this.width,20)
    
    }
    
    
    
    }