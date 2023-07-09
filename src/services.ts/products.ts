
import pool from "../db"

export const getProducts = async (limit: string | undefined) => {

    const [productQuery] = limit ?
        await pool.query('SELECT * FROM products LIMIT ?', [+limit]) :
        await pool.query('SELECT * FROM products')
    return productQuery
}

export const getProduct = async (id: number) => {
    const [productQuery]: Array<any> = await pool.query('SELECT * FROM products WHERE id = ?', [id])
    if (productQuery.length <= 0) return false
    return productQuery[0]
}

export const getProductsByCategory = async (category: string) => {
    const [productQuery]: Array<any> = await pool.query('SELECT * FROM products WHERE category = ?', [category])
    if (productQuery.length <= 0) return false
    return productQuery
}



