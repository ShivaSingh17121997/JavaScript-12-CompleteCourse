




const CounterPromise = new Promise((res, rej) => {
    let count = 2;
    if (count > 0) {
        res("it is resolverd")
    } else {
        rej("it is rejected")
    }
})

CounterPromise
    .then(res => console.log(res))
    .catch(rej => console.log(rej))

    clg