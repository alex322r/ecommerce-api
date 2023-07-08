import { Router } from 'express';
import { getItem, getItems, getItemsByCategory } from '../controllers/products';

const router = Router()

router.get('/products', getItems)

router.get('/products/:id', getItem)

router.get('/products/category/:category', getItemsByCategory)

export default router