const express = require('express');
const { Client } = require('pg')

const connectionString = process.env.DB_URI || 'postgresql://postgres:Shadow22!@localhost/acme_icecreamshop_db'

const client = new Client({
    connectionString: connectionString
})

client.connect().then(()=>console.log('DB Connected'))
const app = express()

app.get('/api/flavors', async (req, res)=>{
    try {
        const result = await client.query('SELECT * FROM flavors')
        res.json(result.rows)
    } catch (error) {
        res.status(500).json({error:'internal error occurred'})
    }
})

app.get('/api/flavors/:id', async (req, res)=>{
    try {
        const result = await client.query('SELECT * FROM flavors WHERE id = $1', [req.params.id])
        res.json(result.rows[0])
    } catch (error) {
        res.status(500).json({error:'internal error occurred'})
    }
})

app.listen(3000,()=>{
    console.log('Server is Running on Port 3000')
})