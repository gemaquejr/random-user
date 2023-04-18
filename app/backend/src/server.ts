import express from 'express';
import 'dotenv/config';
import routes from './routes';
import cors from 'cors';

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(cors());
app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
})

app.use('/users', routes.userRouter);


app.listen(PORT, ()=> {
    console.log(`Server is running on port: ${PORT}`)
})

export default app;