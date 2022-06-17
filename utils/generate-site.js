const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            //if there's an error, reject the Promise and send the error to the Promise's .catch() method
            if (err){
                reject(err);
                return;
            }

            //if everything went well, resolve the Promise and send the successful data to the .then() method
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err =>{
            if (err){
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'Style sheet copied successfully'
            });
        });
    });
};

module.exports = {writeFile,copyFile};