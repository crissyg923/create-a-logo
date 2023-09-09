const Shape=require('./shapes');

class ColorSelection extends Shape {
    constructor(children, color){
        super(children);
        color=this.color;
    }
render() {
    if(color === 'undefined') {
        throw new Error('Please enter a valid color selection');
    }
    return `fill="${color}"`
}
}