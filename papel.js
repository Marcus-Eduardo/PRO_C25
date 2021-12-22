class Papel{
    constructor(x,y,raio){
      var options = {
        isStatic:false,
        restitution:0.3,
        friction:0,
        density:1.2
      } 
        this.x = x;  
        this.y = y;
        this.largura = raio;
        this.altura = raio;
        this.body = Bodies.circle(x,y,raio,options)
        this.image = loadImage("papel.png");
        World.add(world,this.body)
    }
    display()
    {
     ellipseMode(RADIUS)
     ellipse(this.body.position.x,this.body.position.y,this.largura,this.altura,this.image)
    }
}