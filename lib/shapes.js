class Shape {
    constructor(shape) {
        this.shape = shape;
    }

    setColor(color) {
        this.color = color;
   
    }
    render() {
        throw new Error ('Must use render on Triangle, Square, or Circle class.');
    }

}

class Circle extends Shape {
    constructor(shape, color){
        super(shape);
        this.setColor(color);

    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">`
    } 
   
}
class Square extends Shape {
    constructor(shape, color){
        super(shape);
        this.setColor(color);

    }
    render() {
        return `<rect x="50" y="50" width="200" height="200" fill="${this.color}"/>
        <text x="150" y="147" font-size="60" text-anchor="middle" fill="white">`
    } 
   
}
class Triangle extends Shape {
    constructor(shape, color){
        super(shape);
        this.setColor(color);
    }
    render() {
        return `<polygon points="250,60 120,350 350,350" fill="${this.color}"/>
        <text x="245" y="190" font-size="45" text-anchor="middle" fill="white">`
    } 
   
}

// const mycircle= new Circle('circle', 'blue');
// console.log (mycircle.render());

const mycircle= new Circle();
mycircle.setColor('red');
console.log (mycircle.render());



module.exports={Shape, Circle, Square, Triangle};