import express from 'express';
import { Test, FetchDataOfOption } from '../model';

const router = express.Router();

//Test api
router.get('/get', (req, res) => {
    Test.find((err, values) => {
        if (err) {
            return res.status(500).send({ error: 'Failed find' });
        }
        res.json(values);
    });
});

//Test api
router.get('/post', (req, res) => {
    const test = new Test();
    test.name = 'Jbee';//test data

    test.save((err) => {
        if (err) {
            console.error(`Error in ${test} to save: ${err}`);
            return;
        }
        res.send({ result: 1 });
    });
});

router.get('/api/board/:option', (req, res) => {
    const { category, country } = req.param.option;
    console.log(`category: ${category}`);
    console.log(`country: ${country}`);
    FetchDataOfOption.find({ category, country }, { xField: 0, yField: 0 }, (err, values) => {
        if (err) {
            console.error(`Cannot find to category: ${category} and country: ${country}`);
            return res.status(500).send({ error: 'Failed find' });
        }
        res.json(values);
    })

});

export default router;
