import express from 'express'
import routerIndex from './routes'

const app = express()

app.use(express.json())

const PORT = 3000

app.get('/ping', (_, res) => {

    console.log('someone pinged here!!!')
    res.send('pong')
})

app.use(routerIndex)

app.listen(PORT, () => {
    console.log(`Server is running in port${PORT}`)
}
)

