class launcher{
   constructor(bA, pB){
       var options = {
           bodyA: bA,
           pointB: pB,
           stiffness: 0.04,
           length: 10
       }
       this.launcher = Constraint.create(options);
       World.add(world, this.launcher);
   }

   display(){
       if(this.launcher.bodyA != null){
       var pointA = this.launcher.bodyA.position;
       var pointB = this.launcher.pointB;
       strokeWeight(4);
       line(pointA.x, pointA.y, pointB.x, pointB.y);
       }
   }
   fly(){
       this.launcher.bodyA = null
   }
   
}