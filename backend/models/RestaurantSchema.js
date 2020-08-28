import mongoose from 'mongoose'
const Schema = mongoose.Schema

const RestaurantsSchema = new Schema({
    title: {
        type: Schema.Types.String,
    },
    tag: {
        type: Schema.Types.String,
    },
    area: {
        type: Schema.Types.String,
    },
    address: {
        type: Schema.Types.String,
    },
    category: {
        type: Schema.Types.Array,
    },
    cost: {
        type: Schema.Types.String,
    },
    timing: {
        type: Schema.Types.Boolean,
    },
})

const RestaurantDetails = mongoose.model('restaurant_detail', RestaurantsSchema)

export default RestaurantDetails
