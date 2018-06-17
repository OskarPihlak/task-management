const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Task = require('../schema/task');

/*  */
router.get('/', (req, res) => {
    res.redirect('/tasks');
});


/* GET home page. */
router.get('/tasks', (req, res) => {
    Task.find({}, (err, tasks) => {
        console.log(tasks);
        if (err) {
            throw err
        } else {
        }
        res.render('tasks', {
            data: tasks
        });
    });
});

router.post('/tasks', (req, res) => {
    console.log('post');
    let task = new Task();

    task.data = req.body.post_data;
    task.id = req.body.id;

    task.save((err) => {
        if (err) {
            console.log(err);
            return;
        }
    });
    res.redirect('/tasks');
});

router.delete('/tasks', (req, res) => {
    console.log(req.body);
    console.log({data: req.body.delete_data});
    Task.findOneAndRemove({data: req.body.delete_data},(req,res)=>{
            console.log(`Deleted document ${res}`);
        }
    );
});


module.exports = router;
