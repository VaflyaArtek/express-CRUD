import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import fileUpload from 'express-fileupload'
import postRouter from './routes/postRouter.js';
dotenv.config()

const app = express();
const DB_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.kyvna.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const PORT = process.env.PORT;

app.use(express.json())
app.use(fileUpload({}))
app.use(express.static('static'))
app.use('/api', postRouter)

async function startApp() {
    try {
        await mongoose.connect(DB_URI)
        app.listen(PORT, () => console.log('server start on port ' + PORT));
    } catch (e) {
        console.log(e);
    }
}

startApp()
