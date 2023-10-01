require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findOneAndDelete('6517a220a84ecd312068455')
    .then((task) => {
        console.log('Delete task by id:', task);
        return Task.countDocuments({ completed: false });
    })
    .then((result) => {
        console.log('Result:', result);
    })
    .catch((e) => {
        console.log('Error:', e);
    });
