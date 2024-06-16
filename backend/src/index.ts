import express from 'express'; // Import Express framework
import cors from 'cors'; // Import CORS middleware for cross-origin requests
import bodyParser from 'body-parser'; // Import body-parser middleware (deprecated, consider alternatives)
import data from './routes/DataRoutes'; // Import data routes from DataRoutes.js
import { connect } from './config/database'; // Import database connection function
import dotenv from 'dotenv'; // Import dotenv for environment variables
import user from './routes/UserRoutes'; // Import user routes from UserRoutes.js

// Load environment variables from a specific path (src/config/.env)
dotenv.config({ path: 'src/config/.env' });

const app = express(); // Create an Express application instance

// Connect to the database (assumed implementation in connect.js)
connect();

// Enable CORS for requests from http://localhost:3000 with credentials
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

// Parse incoming JSON data in requests
app.use(bodyParser.json());

// Parse incoming form-encoded data (consider alternatives for security)
app.use(bodyParser.urlencoded({ extended: true }));

// Mount data routes under the '/api' prefix
app.use('/api', data);

// Mount user routes under the '/api/user' prefix
app.use('/api/user', user);

// Start the server listening on port 5000
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
