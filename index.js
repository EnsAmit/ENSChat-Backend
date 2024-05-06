// Import the Express.js module
import express from 'express'
import { v1 } from './src/helpers/common/route_versions/v1.js';
import {dbConnect} from './src/helpers/common/init_mongodb.js'
// Create an Express application
const ensModuleBackendApp = express();
dbConnect()

ensModuleBackendApp.use(express.json())
// Define a route handler for the root URL
ensModuleBackendApp.use('/v1', v1);

// Start the server on port 3000
ensModuleBackendApp.listen(4500, () => {
    console.log(`Server is running on http://localhost:4500`);
});
