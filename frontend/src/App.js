import React from 'react'
import { BodyWrapper, InputStyles, ResponsiveBoilerPlate } from './App.style'
import { Hero } from './components/Hero/Hero'
import { Restaurants } from './components/Restaurants/Restaurants'
import { Categories } from './components/Categories/Categories'
function App() {
    return (
        <BodyWrapper>
            <InputStyles />
            <ResponsiveBoilerPlate />
            <Hero />
            <Categories />
            <Restaurants />
        </BodyWrapper>
    )
}

export default App
