const fs = require('fs');

 
  fs.readFile('Demo.txt', (err, data) => {
    
      console.log(data.toString()); 
  });

  console.error('File not found: Demo.txt');
