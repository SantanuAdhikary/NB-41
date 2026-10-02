let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolve 1");
    }, 10000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolve 2");
    }, 2000);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolve 3");
    }, 1000);
});

let p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("reject 4");
    }, 1500);
});


Promise.race([p1, p2, p3, p4])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
