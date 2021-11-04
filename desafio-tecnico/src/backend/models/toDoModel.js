const connection = require('./connection');

const createTask = async ({ task }) => {
        const db = await connection();
        const post = await db.collection('to-do-list').insertOne({ task });
        await console.log({_id: post.insertedId, task})
        return { _id: post.insertedId, task };
    };

    const getTasks = async () => {
        const db = await connection();
        const data = await db.collection('to-do-list').find().toArray();
        return data;
      };

    module.exports = { createTask, getTasks }