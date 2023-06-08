import express, { json } from 'express';
import { config } from 'dotenv';
config()
import cors from 'cors';

// Configuring the database
import './database/database.js'

// create express app
const app = express();
app.use('/uploads', express.static('uploads'));
app.use(cors())

// parse requests of content-type - application/json
app.use(json());

// define a simple route
app.get('/', (req, res) => {
    res.json({ "message": "Welcome to Social Directories" });
});

// Require Notes routes
import routes from './app/user/user.route.js' 
routes(app);

// listen for requests
app.listen(process.env.Port, () => {
    console.log(`Server is listening on port ${process.env.Port}`);
});

export default app;