const Shape=require('./shapes.js');

class Triangle extends Shape{
    constructor(children) {
        super(children);
    }
    render () {
        return `<polygon points="250,60 120,350 350,350"`
    }
}

module.exports= Triangle;