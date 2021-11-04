const toDoService = require('../services/toDoService');

const createTask = async (req, res) => {
    const productParam = req.body;
    const { status, data, message } = await toDoService.createTask(productParam);
    if (message) {
    return res.status(status).json({ err: { code: 'invalid_data', message } });
    }

    return res.status(status).json(data);
};

const getTasks = async (req, res) => {
    const result = await toDoService.getTasks();
    return res.status(200).json({ result });
    };

module.exports = { createTask, getTasks };
