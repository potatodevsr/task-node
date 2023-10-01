// shut down nodemon from task-manager and then start playground use --> cd ../playground
// And then use node with promises --> node promises.js

const add = (a, b,) => {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

// add(1, 2).then((sum) => {
//     console.log('sum a + b = ', sum)

//     add(sum, 5).then((sum2) => {
//         console.log('sum2 = ', sum2);
//     }).catch((e) => {
//         console.log('sum2 is error', e);
//     })
// }).catch((e) => {
//     console.log('error', e);
// })

add(1, 1).then((sum) => {
    console.log('sum = ', sum)
    return add(sum, 4)
}).then((sum2) => {
    console.log('sum2 = ', sum2)
}).catch((e) => {
    console.log('Error', e)
})