import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import data from './routes/DataRoutes';


const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', data);
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});