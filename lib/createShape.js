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
        shape= new Triangle().render();
        shape.setColor(color);
    }
    else {
        shape= new Square();
        shape.setColor(color);
    }

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <${renderedShape}/>
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${logoletters}</text>
  
  </svg>`
}

module.exports= {createShape};