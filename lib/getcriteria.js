// This file grabs user input to create the svg logo.
const inquirer=require('inquirer');
const {createSVG}=require('./createShape');
const {fs} =require('fs/promises');
const {path}=require('path');

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
                message: 'Please select a shape for your logo.'
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
        .then(() => {
            return fs (
                path(__dirname, '..', 'output', 'logo.svg'),
                createSVG(this.color, this.logoletters, this.shape)
            );
        });

        
    }
}

module.exports= GetCriteria;