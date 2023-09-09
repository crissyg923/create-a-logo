const Shape=require('./shapes.js');


class Circle extends Shape {
    constructor(children) {
        super(children);
    }
    render() {
        return `<circle cx="150" cy="10" r="80" `
    }

    
}
module.exports=Circle;