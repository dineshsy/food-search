import React from 'react'
import { RestaurantWrapper } from './style'
import { Label } from './style'

export const Restaurant = ({ title, tag, address, area, cost }) => {
    return (
        <RestaurantWrapper>
            <Label size="1.25rem" color="#1E4684" bold>
                {title}
            </Label>
            <Label size="1rem" color="#828282">
                {tag}
            </Label>
            <Label size="1rem" color="#333333">
                {area + ', ' + address}
            </Label>
            <div>
                {cost.split('').map((el) => (
                    <svg
                        width="20"
                        height="15"
                        viewBox="0 0 20 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1.53015 13.3483C2.6211 13.8204 3.7129 14 4.80413 14C8.26823 14.0003 11.7321 12.191 15.1962 12.191C16.0649 12.191 16.9331 12.3048 17.8019 12.5892C17.8995 12.6211 17.9974 12.6362 18.093 12.6362C18.577 12.6362 19 12.2496 19 11.7131V2.5069C19 2.1404 18.7967 1.79306 18.4701 1.65203C17.3792 1.17962 16.2874 1 15.1962 1C11.7321 1 8.26795 2.80926 4.80385 2.80926C3.93508 2.80926 3.06688 2.69551 2.19811 2.41114C2.10052 2.37922 2.00264 2.36413 1.90702 2.36413C1.42299 2.36413 1 2.75065 1 3.28719V12.4931C1.00028 12.8599 1.20362 13.2069 1.53015 13.3483V13.3483ZM10.0001 4.71429C11.243 4.71429 12.2501 5.96176 12.2501 7.5C12.2501 9.03853 11.2427 10.2857 10.0001 10.2857C8.7576 10.2857 7.75018 9.03853 7.75018 7.5C7.75018 5.96118 8.75788 4.71429 10.0001 4.71429Z"
                            stroke="#828282"
                        />
                    </svg>
                ))}
            </div>
        </RestaurantWrapper>
    )
}