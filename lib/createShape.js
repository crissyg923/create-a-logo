const Shape=require('./shapes.js');
const getCriteria= require('./getcriteria.js');


function createShape(shape, color, logoletters) {
    // let newshape= new Shape();
    if(shape==='circle'){
        shape=new 
    }
    else if(newshape==='triangle'){
        Triangle.render();
    }
    else {
        Square.render();
    }

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <${shape} ${color} />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${logoletters}</text>
  
  </svg>`
}

module.exports= {createShape};