import { RowDataPacket } from "mysql2"

export type Category = 'electronics' | "men's clothing" | 'jewelery' | "women's clothing"

export interface ProductEntry extends RowDataPacket {
    id: number,
    name: string,
    description: string,
    price: number,
    category: Category,
    image: string
}