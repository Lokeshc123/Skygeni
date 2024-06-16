import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import data from './routes/DataRoutes';
import { connect } from './config/database';
import dotenv from 'dotenv';
import user from './routes/UserRoutes';
dotenv.config({path : 'src/config/.env'});
const app = express();
connect();
app.use(cors(
    {
        origin: "http://localhost:3000",
        credentials: true
    
    }
));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', data);
app.use('/api/user', user);
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});