import express from 'express';
import {Test} from '../model';

const router = express.Router();

router.get('/get', (req, res) => {
    Test.find((err, values) => {
        if (err) {
            return res.status(500).send({error: 'Failed find'});
        }
        res.json(values);
    });
});

router.get('/post', (req, res) => {
    const test = new Test();
    test.name = 'Jbee';//test data

    test.save((err) => {
        if (err) {
            console.error(`Error in ${test} to save: ${err}`);
            return;
        }
        res.send({result: 1});
    });
});

export default router;
