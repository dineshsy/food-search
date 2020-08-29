import React, { useEffect, useState } from 'react'
import { ContentWrapper, RestaurantsWrapper } from './style'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { Loader } from '../Loader'
import { Restaurant } from './Restaurant'
import useInfiniteScroll from '../../hooks/useInfiniteScroll'

export const Restaurants = withRouter(({ history }) => {
    const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems)
    const { location } = history
    const [restaurants, setRestaurants] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const { search } = location
    const [step, setStep] = useState(0)
    function fetchMoreListItems() {
        setStep((s) => (s += 1))
    }
    useEffect(() => {
        setIsLoading(true)
        axios
            .get(
                `${process.env.REACT_APP_BACKEND_URL}/api/restaurants${
                    search || '?'
                }`
            )
            .then((res) => {
                setIsLoading(false)
                setIsFetching(false)

                setRestaurants(res.data)
            })
            .catch((err) => {
                setIsLoading(false)
                setIsFetching(false)

                console.log(err)
            })
    }, [search])
    useEffect(() => {
        setIsLoading(true)
        axios
            .get(
                `${process.env.REACT_APP_BACKEND_URL}/api/restaurants${
                    search || '?'
                }&step=${step}`
            )
            .then((res) => {
                setIsLoading(false)
                setIsFetching(false)

                setRestaurants((prevState) => [...prevState, ...res.data])
            })
            .catch((err) => {
                setIsLoading(false)
                setIsFetching(false)

                console.log(err)
            })
    }, [step])
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
