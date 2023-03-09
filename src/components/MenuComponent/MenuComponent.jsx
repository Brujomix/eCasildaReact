/* Menu Component */
import React from 'react'

export const ButtonMenu = ({label, action}) => {
    return (
        <button>
            {label}
            {action}
        </button>
    )
}


export const MenuComponent = ({children}) => {
    return (
        <menu>
            {children}
        </menu>
    )
}
