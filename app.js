// const add = require('./utils.js')
// const sum = add(5, 9);
// console.log(sum);
// console.log(validator.isEmail('samuelexample.com'));
// console.log(validator.isURL('wwwleanrecom'));
//const message = chalk.bold.green.inverse('Dev need improvement and I love it. Thank you') + '. Yes, it does ' + chalk.bold.red.underline('Thanks for checking out chalk');
const notes = require('./note.js');
const validator = require('validator');
const myNote = notes();
const chalk = require('chalk');
const yargs = require('yargs');

const command = process.argv;

console.log(yargs.argv);

yargs.version('1.1.0')

//Create Add command
yargs.command({
    command: "add",
    describe: "add a new note",
    handler: function(){
        console.log('Addng a new note')
    }
    });

//Create remove command

yargs.command({
    command: "remove",
    describe: "remove note",
    handler: function(){
        console.log('Remove a new note')
    }
    
});

//Create List Command
yargs.command({
    command: "list",
    describe: "Note list",
    handler: function(){
        console.log('Listing all note')
    }
});

//Create Read Command
yargs.command({
    command: 'read',
    describe: "Read the note",
    handler: function(){
        console.log('Reading my notes')
    }
});

if (command === 'add') {
    console.log('This was added');
}else if (command ==="success") {
    console.log('success was written');
}

