import React from 'react'
import '../../pages/ShopPage.component'
import './collection-preview.styles.scss'
import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({items,title}) => {
    return(
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items.filter((item, index)=> index<4 ).map(({id, ...otherItemProps}, index)=>(
                        <CollectionItem key={id} {...otherItemProps} />
                    ))
                }
            </div>
        </div>
    )
}
export default CollectionPreview