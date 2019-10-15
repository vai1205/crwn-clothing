import React from 'react'
import '../../pages/ShopPage.component'

const CollectionPreview = (props) => {
    return(
        <div>
            {
                props.items.filter((item, index)=> index<4 ).map(({id, name}, index)=>(
                    <p key={id}>{name}</p>
                ))
            }
        </div>
    )
}
export default CollectionPreview