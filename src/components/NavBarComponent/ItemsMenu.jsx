import React from 'react'
import Circle from "../../data/imgs/marco1.png"

//Image Border Circle Component
const Img = () => {
    return (
        <img
            src={Circle}
            alt='Item del Menu'
        />
    )
}

export const ItemsMenu = ({label, B_Color, action}) => {
    return (
        <button
            onClick={action} 
            className='ItemsMenu'
            style={{backgroundColor: `${B_Color}`}}       
            > 
                <span>{label}</span>
                <Img/>
        </button>
    )
}
