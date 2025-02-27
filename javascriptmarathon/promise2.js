function sum(a, b, Cb) {
    setTimeout(() => {
        Cb(a + b);
    }, 5000);
}

// Calling the sum function with numbers 2 and 3, and a callback that logs the result
sum(2, 3, (result) => {
    console.log(result); // This will log 5 after 5 seconds
});

// const f2=requir('fs/')