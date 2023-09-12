const Shape=require('./shapes.js');
const ColorSelection=require('./color.js');

const newColor = new ColorSelection;

class Circle extends Shape {
    constructor(color) {
        super(color);
    }
    render() {
        return `<circle cx="150" cy="10" r="80" ${newColor.render()}`
    } 
}
module.exports=Circle;