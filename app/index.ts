import express, { Request,Response } from 'express'
const app = express()
const port = 3000

app.get('/1', (req:Request, res:Response) => {
  res.status(200).send("1")
})
app.get('/2', (req:Request, res:Response) => {
    res.status(200).send("2")
})
app.get('/3', (req:Request, res:Response) => {
  res.status(200).send("3")
})

app.get('/health', (req:Request, res:Response) => {
    res.status(200).send("OK")
})

app.get('/error', (req:Request, res:Response) => {
res.status(500).send("ERROR")  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})