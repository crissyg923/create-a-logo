// This file grabs user input to create the svg logo.
const inquirer=require('inquirer');
const {createShape}=require('./createShape');
const { writeFile } =require('fs/promises');
const {join}=require('path');
const shapesModule=require('./shapes');

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
                name: 'color',
                message: 'Please enter a color name '
            },
            {
                type: 'input',
                name: 'logoletters',
                message: 'Please enter 3 letters to use for your logo.'
            }
            
        ])
        .then(({shape, color, logoletters}) => {
            // this.shape=shape;
            // this.logoletters=logoletters;
            // this.color=color;
                 writeFile (
                    join(__dirname, '..', 'output', 'logo.svg'),
                    createShape(shape, color, logoletters) 
                    );
                // console.log(shape,logoletters, color);
                });

        
    }
}

module.exports= GetCriteria;