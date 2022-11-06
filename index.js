import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import user from './user'
import { initializeApp } from "firebase/app";

const app=express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5500/'
}))
dotenv.config()
mongoose.connect(process.env.MONGO, (err)=>{if (err) throw err; console.log('DB Connected')})
mongoose.connection

const port = process.env.PORT || 8080

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/* eslint-disable no-unused-vars */
const firebaseConfig = {
  apiKey: "AIzaSyAs73UdpQCw7lUggZEgFGl9OJuQNLLl7t8",
  authDomain: "jsfb-server.firebaseapp.com",
  projectId: "jsfb-server",
  storageBucket: "jsfb-server.appspot.com",
  messagingSenderId: "998720366228",
  appId: "1:998720366228:web:b19a5437d2d1068bcdb681"
};
/* eslint-enable no-unused-vars */
// Initialize Firebase
const app2 = initializeApp(firebaseConfig);

app.post('/signup', (req, res)=>{
    user.create({user: req.body.user, name: req.body.name, phone: req.body.phone, email: req.body.email, approved: false})
})

app.get('/isApproved', (req, res)=>{
    const user=req.query.user
})


app.listen(port)