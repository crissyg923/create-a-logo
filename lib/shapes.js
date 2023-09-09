class Shape {
    constructor(children=[]) {
        this.children=children;
    }
    render() {
        throw new Error('Render method must be implemented by child class!')
    }
    // renderSVG() {

    // }
}

module.exports=Shape;