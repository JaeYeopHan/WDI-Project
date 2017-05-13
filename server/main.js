import express from 'express';
import WebpackDevServer from 'webpack-dev-server';
import Webpack from 'webpack';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import { dbConfig } from './config';
import posts from './routes/posts';

const app = express();
const port = 3000;
const devPort = 3001;

if (process.env.NODE_ENV == 'development') {
    const config = require('../webpack.dev.config');
    const compiler = Webpack(config);
    const devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(devPort, () => {
        console.log(`Listening on port: ${devPort}`);
    });
}

mongoose.connect(dbConfig.db, () => {
    console.log('connected mongodb');
});
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/', express.static(__dirname + '/../dist'));
app.use('/posts', posts);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
