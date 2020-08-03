// Callbacks

// const fetchData = (userId, callback) => {
//     setTimeout(() => {
//         let userInfo = {
//             id: userId,
//             name: "Gheorghe",
//         }
//         callback(userInfo);
//     }, 5000)
// }

// const cb = (data) => {
//     console.log(data);
// }

// fetchData(5, cb);



// Promises

// const fetchData = (userId) => {
//     return new Promise(function(resolve, reject){
        

//         resolve({name: "Ghorghe", id: userId})
//     });
// };
// const fetchData2 = (userId) => {
//     return new Promise(function(resolve, reject){
//         if(Math.random() < 0.9){
//             reject("Unable to fetch user data.")
//         }

//         resolve({name: "Ianis", id: userId})
//     });
// };

// Promise.all([fetchData(45), fetchData2(8)]).then(function(data){
//     data.map((entry) => {
//         console.table(entry);
//     })
// }).catch((err) => {
//     console.error(err);
// })


// Async/Await
// const myPromise = (userId) => {
//     return new Promise((resolve, reject) => {
//         if(Math.random() < 0.9){
//             reject("Couldn't fetch data...");
//         }
//         let data = { name: "Gheorghe", id: userId};
//         resolve(data);
//     })
// }
// const myPromise2 = async (userId) => {
//     return {name: 'test', id: userId}
// }

// async function myPromise3(userId) {
//     return {name: 'test', id: userId}
// }

// async function fetchData(userId) {
//         const data = await myPromise(userId);
//         console.log(data);
// }

// fetchData(2)