const Shape=require('./shapes.js');

class Square extends Shape {
    constructor(children) {
        super(children);
    }
    render () {
        return `rect x="50" y="20" width="150" height="150"`
    }
}

module.exports=Square;