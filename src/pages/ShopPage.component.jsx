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
            <div>
                {
                    this.state.ShopData.map(({id,title, ...otherShopData}) => (
                        <div>
                            <h1 key={id}>{title}</h1>
                            <CollectionPreview {...otherShopData} />
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default ShopPage