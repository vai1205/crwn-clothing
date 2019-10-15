import React from 'react'
import './ShopPage.styles.scss'
import ShopData from './ShopData'
import CollectionPreview from '../components/collection-preview/collection-preview.component'
class ShopPage extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            ShopData : ShopData
        }
    }
    render(){
        return(
            <div className='shop-page'>
                {
                    this.state.ShopData.map(({id, ...otherShopData}) => (
                        <CollectionPreview key={id} {...otherShopData} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage