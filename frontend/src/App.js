import React from 'react'
import { BodyWrapper, InputStyles, ResponsiveBoilerPlate } from './App.style'
import { Hero } from './components/Hero/Hero'
import { Restaurants } from './components/Restaurants/Restaurants'
function App() {
    return (
        <BodyWrapper>
            <InputStyles />
            <ResponsiveBoilerPlate />
            <Hero />
            <Restaurants />
        </BodyWrapper>
    )
}

export default App
