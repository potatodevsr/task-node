// start task-manager --> cd ../task-manager
// run node --> node playground/promise-chaining.js

require('../src/db/mongoose');
const User = require('../src/models/user');

User.findByIdAndUpdate('6515856603a04d1cf5bc8818', { age: 1 })
    .then((user) => {
        console.log('Update user by id:', user); // Log the updated user object
        return User.countDocuments({ age: 1 });
    })
    .then((result) => {
        console.log('Result =', result); // Log the count of documents
    })
    .catch((e) => {
        console.log('Error:', e); // Log any errors that occur
    });
