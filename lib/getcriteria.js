// This file grabs user input to create the svg logo.
// Lines 3-7 include modules required for the getcriteria.js file to properly work.
const inquirer=require('inquirer');
const {createShape}=require('./createShape');
const { writeFile } =require('fs/promises');
const {join}=require('path');
const shapesModule=require('./shapes');

// This constructore creates the prompts that will grab user input and utitlize it for creating the logo.
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
        // Throws error if more than 3 characters are entered and writes to the SVG file.
        .then(({shape, color, logoletters}) => {
            if (logoletters.length>3) {
                throw new Error('Please enter no more than 3 characters for your logo.')
            };
                 writeFile (
                    join(__dirname, '..', 'Examples', 'logo.svg'),
                    createShape(shape, color, logoletters) 
                    );
                });

        
    }
}

module.exports= GetCriteria;