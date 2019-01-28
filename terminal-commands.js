const fs = require('fs');

module.exports.ls = () => {
    fs.readdir('./', (err, files) => {
      const filesToString = files.reduce((acc,file) => {
          return `${acc} ${file}`;
      }, '');

      console.log(filesToString);
    });
};

module.exports.touch = () => {
    fs.('./', (err, files) => {
        const filesToString = files.reduce((acc,file) => {
            return `${acc} ${file}`;
        }, '');
  
        console.log(filesToString);
      });


};

module.exports.mkdir = () => {
    fs.mkdir('./', (err, ) => {
        const newFolder = files.((acc,file) => {
            return `${acc} ${file}`;
        }, '');
  
        console.log(newFolder + " has been created");
    });
};