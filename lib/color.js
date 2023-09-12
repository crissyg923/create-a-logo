const Shape=require('./shapes');

class ColorSelection extends Shape {
    constructor(children, color){
        super(children);
        this.color=color;
    }
render() {
    if(color === 'undefined') {
        throw new Error('Please enter a valid color selection');
    }
    return `fill="${color}"`
}
}

module.exports = ColorSelection;