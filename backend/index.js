const express = require ('express')
const app = express()
const jwt = require("jsonwebtoken")
require('dotenv').config()
const cors = require('cors')


const { getCategorias, getProductos} = require('./consultas')

app.listen(process.env.PORT, console.log(`SERVIDOR ENCENDIDO EN PUERTO ${process.env.PORT}`))
app.use(express.json())
app.use(cors())

//PRODUCTOS
app.get("/fonda365/categorias", async (req, res) => {
    try {
        const categoria = await getCategorias()
        res.json(categoria)
    } catch (error) {
        res.status(error.code || 500).send(error)
    }
})

app.get("/producto/obtener_producto", async (req, res) => {
    try {
        const producto = await getProductos()
        res.json(producto)
    } catch (error) {
        res.status(error.code || 500).send(error)
    }
})
