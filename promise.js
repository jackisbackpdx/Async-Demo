const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Jackson',
            age: 22,
            height: 6 + 'ft ' + 4 + 'in'
        }); // pending => resolved, fulfilled
        // reject(new Error('This is bad')); // pending => rejected
    }, 2000);
});

p
    .then(result => console.log(`${result.name}'s height is ${result.height}`))
    .catch(err => console.log('Error', err.message));