import express from 'express'
//const { getItems } = require('../controllers/itemsController');
import {getItemDetail, getItems} from '../controllers/itemsControllers'

const router = express.Router();

router.get('/api/items', getItems);
router.get('/api/items/:id', getItemDetail)

export default router