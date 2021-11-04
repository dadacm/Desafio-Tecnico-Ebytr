const toDoModel = require('../models/toDoModel');


const createTask = async (productParam) => {
 const result = await toDoModel.createTask(productParam);
 return { status: 201, data: result };
};

const getTasks = async () => {
    const result = await toDoModel.getTasks();
    return result;
   };

module.exports = { createTask, getTasks };
