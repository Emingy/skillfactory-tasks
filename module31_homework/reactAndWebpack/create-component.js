const yargs = require('yargs');
const fs = require('fs/promises');
const path = require('path');

const argv = yargs
    .command(['create <filename> [type] [path]','c'], 'Creates a new file and write a passed content to it', (yargs) => {
        yargs
          .positional('type', {
            default: 'stateless'
          })
          .positional('path', {
              default: './src/components/'
          })
      }, (argv)=>{
    console.log(argv.type)
    const filepath = path.resolve(argv.path + argv.filename+'.js');
    const defaultContent = `import React from 'react';` + ((argv.type == 'stateless') ? `

export const ${ucFirst(argv.filename)} = (props) => {
    return (
        <div>${ucFirst(argv.filename)} works</div>
    );
}`:
    (argv.type == 'simple') ? `
    
class ${ucFirst(argv.filename)} extends React.Component {
    render() {
        return (
        <div>${ucFirst(argv.filename)} works</div>
        );
    }
}`:
    (argv.type == 'statefull') ? `
    
class ${ucFirst(argv.filename)} extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
        <div>${ucFirst(argv.filename)} works</div>
        );
    }
}`:
    'none');
    fs.writeFile(filepath, defaultContent)
        .then(()=> console.log('Create component is successfull'))
        .catch(e=> console.error('An error has occured:', e));
})
.argv

function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}
