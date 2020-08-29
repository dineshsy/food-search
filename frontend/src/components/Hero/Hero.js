import React, { useState } from 'react'
import { HeroWrapper, ContentWrapper, Label } from './style'
import Textfield from '../text-field/text-field'
import { useHistory } from 'react-router-dom'
export const Hero = () => {
    const history = useHistory()
    const [searchField, setSearchField] = useState({
        id: 1,
        inputType: 'text',
        state: 'normal',
        name: 'food-search',
        label: '',
        placeholder: 'Search Restaurant Names',
        value: '',
        readOnly: false,
    })
    const handleInputValueChange = (event) => {
        let textfield = { ...searchField }

        textfield.value = event.target.value
        if (textfield.value.trim().length) {
            textfield.hint = 'Press Enter to Search'
        } else {
            textfield.hint = null
        }
        setSearchField(textfield)
    }
    return (
        <HeroWrapper>
            <ContentWrapper>
                <Label color="#FFF" size="6.5rem" bold>
                    FOOD VYBE
                </Label>
            </ContentWrapper>
            <ContentWrapper>
                <Textfield
                    textfield={searchField}
                    key={searchField.id}
                    handleInputValueChange={handleInputValueChange}
                    handleKeyPress={(e) => {
                        const keycode = e.which
                        if (keycode === 13) {
                            let search = null
                            if (searchField.value)
                                search = `title=${searchField.value}`
                            let query = history.location.search
                            query = query.slice(1)
                            query = query.split('&')
                            const tag = query
                                .find((e) => e.includes('tag'))
                                ?.split('=')[1]
                            console.log(query)
                            if (tag) {
                                search = `${
                                    search ? search + '&' : ''
                                }tag=${tag}`
                            }
                            history.replace({
                                path: '',
                                search,
                            })
                        }
                    }}
                />
            </ContentWrapper>
        </HeroWrapper>
    )
}
