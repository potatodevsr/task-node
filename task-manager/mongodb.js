// รันโฟลเดอร์ cd task-manager
// do CRUD 

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID, ObjectId } = require('mongodb')


const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID()
console.log(id.id.length)
console.log(id.toHexString().length)
// console.log(id.getTimestamp())


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to database!');
    }

    console.log('Connected correctly!');
    const db = client.db(databaseName); // Define the database object

    // db.collection('users').findOne({ _id: new ObjectId("65152e5d3a7e23f038ff3404") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch');
    //     }
    //     console.log(user);
    // })

    // ค้นหา .fine
    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     console.log(users)
    // })
    // db.collection('users').find({ age: 27 }).count((error, count) => {
    //     console.log(count)
    // })

    // db.collection('users').insertOne({ name: 'Chada', age: 25
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user');
    //     }
    //     console.log(result.ops);
    // });

    // db.collection('users').insertMany([
    //     {
    //         name: 'Potato',
    //         age: 26
    //     }, {
    //         name: 'Tomato',
    //         age: 27
    //     },
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert document');
    //     }
    //     console.log(result.ops)
    // })
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },
    //     {
    //         description: 'Renew inspection',
    //         completed: false
    //     },
    //     {
    //         description: 'Pot plants',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks!');
    //     }
    //     console.log(result.ops)
    // })
    db.collection('tasks').findOne({ _id: new ObjectID("651540ec522aa2f5924206e6") }, (error, task) => {
        if (error) {
            return console.log('Unable to fetch task');
        }
        console.log(task);
    });
    db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
        if (error) {
            return console.log('Unable to fetch task');
        }
        console.log(tasks);
    })

})

