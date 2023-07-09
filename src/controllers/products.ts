
import { Request, Response } from "express"
import { getProduct, getProducts, getProductsByCategory } from "../services.ts/products"


export const getItems = async (req: Request, res: Response) => {
    try {
        const { limit } = req.query
        const items = await getProducts(limit as string | undefined)
        res.send(items)
    } catch (e) {
        res.status(500).send({ error: "something goes wrong" })
    }
}

export const getItem = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const item = await getProduct(+id)
        if (!item) {
            res.status(404).send({ message: "product not found" })
        }
        else res.send(item)

    } catch (error) {
        res.status(500).send({ error: "something goes wrong" })
    }
}

export const getItemsByCategory = async (req: Request, res: Response) => {
    try {
        const { category } = req.params
        const items = await getProductsByCategory(category)
        res.send(items)
    } catch (error) {
        res.status(500).send({ error: "something goes wrong" })
    }

}