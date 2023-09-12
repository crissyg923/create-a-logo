class Shape {
    constructor(shape) {
        this.shape = shape;
    }

    setColor(color) {
        this.color = color;
   
    }
    render() {
        return 'Cannot render shape';
    }

}

class Circle extends Shape {
    constructor(shape, color){
        super(shape);
        this.setColor(color);

    }
    render() {
        return `<circle cx="150" cy="10" r="80" fill="${this.color}"`
    } 
   
}
class Square extends Shape {
    constructor(shape, color){
        super(shape);
        this.setColor(color);

    }
    render() {
        return `rect x="50" y="20" width="150" height="150" fill="${setColor(color)}"`
    } 
   
}
class Triangle extends Shape {
    constructor(shape, color){
        super(shape);
        this.setColor(color);
    }
    render() {
        return `return <polygon points="250,60 120,350 350,350" fill="${setColor(color)}"`
    } 
   
}

// const mycircle= new Circle('circle', 'blue');
// console.log (mycircle.render());

const mycircle= new Circle();
mycircle.setColor('red');
console.log (mycircle.render());
module.exports=Shape, Circle, Square, Triangle;