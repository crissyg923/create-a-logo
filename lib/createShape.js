const {Shape, Circle, Triangle, Square}=require('./shapes.js');
const getCriteria= require('./getcriteria.js');


function createShape(shape, color, logoletters) {
    let renderedShape;
    if(shape==='circle'){
       const circle= new Circle(shape, color);
       circle.setColor(color);
       renderedShape= circle.render();
       
    }
    else if(shape==='triangle'){
        const triangle= new Triangle(shape, color);
        triangle.setColor(color);
        renderedShape=triangle.render();
    }
    else {
        const square= new Square();
        square.setColor(color);
        renderedShape=square.render();
    }

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${renderedShape}${logoletters}</text>
  
  </svg>`
}

module.exports= {createShape};