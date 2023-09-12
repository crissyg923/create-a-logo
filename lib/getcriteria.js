// This file grabs user input to create the svg logo.
const inquirer=require('inquirer');
const {createShape}=require('./createShape');
const { writeFile } =require('fs/promises');
const {join}=require('path');
const Square = require('../lib/square');

class GetCriteria {
    constructor() {
        this.color='';
        this.letters='';
        this. shape='';
    }
    create(){
        return inquirer
        .prompt ([
            {
                type: 'list',
                name: 'shape',
                message: 'Please select a shape for your logo.',
                choices: ['circle', 'triangle', 'square']
            },
            {
                type: 'input',
                name: 'logoletters',
                message: 'Please enter 3 letters to use for your logo.'
            },
            {
                type: 'input',
                name: 'color',
                message: 'Please enter a color name '
            }
        ])
        .then((x) => {
            if(x.shape === "square") {
                const square = new Square();
                 writeFile (
                    join(__dirname, '..', 'output', 'logo.svg'),
                    square.render()
                    // createShape(x., x., x.shape) 
                    );
                }
                });

        
    }
}

module.exports= GetCriteria;