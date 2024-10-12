// What would happen if the degree goes beyond 90?



class perfect_circle{
    constructor(){
        this.radius = null
        this.precision = null
        this.current_degree = 0
        this.opposite = null
        this.adjacent = null
    }

    setup(radius,precision=1){
        this.radius = radius
    }

    // adjacent
    generate_x(){
        let radians = this.current_degree * Math.PI / 180;
        return this.opposite/Math.sin(radians)
    }
    
    // opposite
    generate_y(){
        let radians = this.current_degree * Math.PI / 180;
        this.opposite = this.radius * Math.cos(radians)
        return this.opposite
    }

    raise_degree(){
        this.current_degree += 1
    }

    

}


const y = new perfect_circle()
y.setup(10)
for (let i = 0;i<180;i++){
    if(i == 90){
        console.log("HERE")
    }
    console.log(y.generate_x(),y.generate_y())
    y.raise_degree()
}

