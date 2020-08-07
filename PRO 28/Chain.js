class Chain{
    constructor(bodyA,pointB){
        var options = {
            bodyA : stone,
            pointB : boy,
            stiffness : 0.08,
            length : 8
        }
        this.pointB = pointB;
        this.chain = Constraint.create(options);
        World.add (world,this.chain);
    }

        fly() {
            this.chain.bodyA = null;
        }


    
    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}  
}