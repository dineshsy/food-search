import React, { useEffect, useState } from 'react'
import { ContentWrapper, RestaurantsWrapper } from './style'
import { useHistory, withRouter } from 'react-router-dom'
import axios from 'axios'
import { Loader } from '../Loader'
import { Restaurant } from './Restaurant'
export const Restaurants = withRouter(({ history }) => {
    const { location } = history
    const [restaurants, setRestaurants] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { search } = location
    useEffect(() => {
        setIsLoading(true)
        axios
            .get(
                `${process.env.REACT_APP_BACKEND_URL}/api/restaurants${search}`
            )
            .then((res) => {
                setIsLoading(false)

                setRestaurants(res.data)
            })
            .catch((err) => {
                setIsLoading(false)

                console.log(err)
            })
    }, [search])
    return (
        <ContentWrapper>
            <RestaurantsWrapper>
                {restaurants.map((restaurant) => (
                    <Restaurant {...restaurant} />
                ))}
                {isLoading ? <Loader /> : null}
            </RestaurantsWrapper>
        </ContentWrapper>
    )
})
