import React from 'react'
import { BodyWrapper, InputStyles, ResponsiveBoilerPlate } from './App.style'
import { Hero } from './components/Hero/Hero'
function App() {
    return (
        <BodyWrapper>
            <InputStyles />
            <ResponsiveBoilerPlate />
            <Hero />
        </BodyWrapper>
    )
}

export default App
