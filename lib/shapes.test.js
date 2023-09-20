// Testing suite for all of the shape classes and methods.
const {Shape, Triangle, Circle, Square} = require('./shapes');

describe('Error', () => {
describe('Shape', () =>{
    it('should throw new Error', () => {
        const shape = new Shape();
        const err = new Error('Must use render on Triangle, Square, or Circle class.')
        expect(shape.render).toThrow(err)
    })
   
})
});


describe('Triangle', () => {
    it('should create a new instance of Triangle', () => {
        const triangle = new Triangle();
        expect(triangle).toBeInstanceOf(Triangle);
    })
});

describe ('Square', () => {
    it('should create a new instance of Square', () => {
        const square= new Square();
        expect(square).toBeInstanceOf(Square);
    })
});

describe('Circle', () => {
    it('should create new instance of Circle', () => {
        const circle= new Circle();
        expect(circle).toBeInstanceOf(Circle);
    })
});
describe('Set Color', () => {
    it('should set the color of the shape', () => {
        const newCircle= new Circle();
        newCircle.setColor('blue');
        expect(newCircle.color).toBe('blue');
    })
});

describe('Square Render Method', () => {
    it('should render an svg string', () => {
        const renderedSquare= new Square();
        renderedSquare.setColor('blue')
        expect(renderedSquare.render()).toBe(`<rect x="50" y="50" width="200" height="200" fill="blue"/>
        <text x="150" y="147" font-size="60" text-anchor="middle" fill="white">`);
    })
});

describe ('Circle Render Method', () => {
    it('should render an svg string', () => {
        const renderedCircle= new Circle();
        renderedCircle.setColor('yellow');
        expect(renderedCircle.render()).toBe(`<circle cx="150" cy="100" r="80" fill="yellow" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">`)
    })
});
