import React from 'react'

import Product from '@/models/Product'

type ItemsMenuProps = {
    products: Product[]
}

const ItemsMenu = (props: ItemsMenuProps) => {
    return (
        <ul>
            { props.products.map((product) => <li key={product.id}>{product.name}</li>)}
        </ul>
    )
}

export default ItemsMenu
