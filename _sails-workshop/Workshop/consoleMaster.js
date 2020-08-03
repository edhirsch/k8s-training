// // Master the console log... master JS.
// let userOne = {name: "Gica", age: 55, skills: ['strength', 'passes']};
// let userTwo = {name: "Ianis", age: 21, skills: ['speed', 'control', 'humbleness']};
// // let users = [...userOne, ...userTwo];

// // let userThree = {...userOne};
// let array = [1,2,3,4,5];



// // console.log('BASIC CONSOLE LOG: This is my basic console log');

// // console.log('OBJECT CONSOLE LOG:', userOne);

// // console.log('IMPROVED DETAILS CONSOLE LOG:', { userTwo, userOne });

// // console.table('TABLE CONSOLE LOG', users)

// let userThree = Object.assign({}, userOne);
// console.log(userThree)
// userThree.name = "GIGIGIGIG";
// console.log(userOne, userThree)

// let userFour = {...userOne};


var spawn = require('child_process').spawn;
var total_file_liness = 0;
total_file_lines = spawn('wc',['-l', '<', '/tmp/ii.txt']);

const myPromise = new Promise((resolve, reject) => {
    total_file_lines.stdout.on("data", function (data) {
        total_file_liness += parseInt(data.toString().trim());
    })

    resolve(total_file_liness.stdio.on('end', () => {
        console.log("ENDED");
    }));
})

myPromise.then((lines) => {
    console.log('lines', lines);
}).catch(err => console.error(err));


