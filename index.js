require('dotenv').config()

const express=require('express')

const app=express()

const port=3000

app.get('/',(req,res)=>{
   res.send('chai aur code')
})

app.get('/youtube',(req,res)=>{
   res.send('<h1>welcome to backend</h1>')
})

app.get('/twitter',(req,res)=>{
  res.send('coffe with code')
})

app.listen(process.env.PORT,()=>{
   console.log(`listening on port no ${process.env.PORT}`);
})