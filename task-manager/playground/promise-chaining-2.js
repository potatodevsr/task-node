require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findOneAndDelete('6517c46a73ac8967e1b594da')
//     .then((task) => {
//         console.log('Delete task by id:', task);
//         return Task.countDocuments({ completed: false });
//     })
//     .then((result) => {
//         console.log('Result:', result);
//     })
//     .catch((e) => {
//         console.log('Error:', e);
//     });

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndUpdate(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('6517c46a73ac8967e1b594da').then((count) => {
    console.log('count', count);
}).catch((e) => {
    console.log('Error deleteTaskAndCount = ', e);
})