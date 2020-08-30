import React from 'react'
import { CategorysWrapper, CategoryWrapper, Label } from './style'
import { useHistory } from 'react-router-dom'
const Category = ({ name, imgSrc }) => {
    const history = useHistory()
    return (
        <CategoryWrapper
            onClick={() => {
                let search = null
                search = `category=${name}`
                let query = history.location.search
                query = query.slice(1)
                query = query.split('&')
                const title = query
                    .find((e) => e.includes('title'))
                    ?.split('=')[1]
                if (title) {
                    search = `${search ? search + '&' : ''}title=${title}`
                }
                history.replace({
                    path: '',
                    search,
                })
            }}
            imgSrc={imgSrc}
        >
            <Label color="#FFF" size="1.25rem" bold>
                {name}
            </Label>
        </CategoryWrapper>
    )
}

export const Categories = () => {
    const categories = [
        {
            name: 'Indian',
            imgSrc:
                'https://images.pexels.com/photos/941869/pexels-photo-941869.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        {
            name: 'Chinese',
            imgSrc:
                'https://images.unsplash.com/photo-1527997921830-de1cf1f9b430?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=823&q=80',
        },
        {
            name: 'Japanese',
            imgSrc:
                'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        {
            name: 'Ramen',
            imgSrc:
                'https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
            name: 'European',
            imgSrc:
                'https://images.unsplash.com/photo-1548089461-87cf08382dd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
        },
    ]
    return (
        <CategorysWrapper>
            {categories.map((category) => (
                <Category {...category} />
            ))}
        </CategorysWrapper>
    )
}
