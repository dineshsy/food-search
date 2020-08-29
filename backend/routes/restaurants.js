import express from 'express'
import RestaurantSchema from '../models/RestaurantSchema'

const router = express.Router()

router.get('/restaurants', (req, res) => {
    const currentStepOfUser = req.query.step
    const restaurantsPerReq = 25
    const query = {}
    if (req.query.title) {
        query['title'] = new RegExp(`${req.query.title}`, 'i')
    }
    if (req.query.category) {
        query['category'] = [req.query.category]
    }
    RestaurantSchema.find(query)
        .skip(restaurantsPerReq * currentStepOfUser)
        .limit(restaurantsPerReq)
        .then((docs) => {
            res.status(200).json(docs)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
})

export default router
