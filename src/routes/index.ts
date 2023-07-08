import { Router } from "express"
import router from "./products"
const routerIndex = Router()

routerIndex.get('/', (_, res) => {
    res.send('MY API')
})

routerIndex.use('/api', router)

export default routerIndex