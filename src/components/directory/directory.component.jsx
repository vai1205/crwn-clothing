import React, {Component} from 'react'

import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component'

class Directory extends Component {
    constructor(){
        super()
        this.state = {
            sources:[
                {
                    title:'hats',
                    id:'1',
                    imgUrl:'https://i.ibb.co/cvpntL1/hats.png',
                    link:'hats'
                },
                {
                    title:'jackets',
                    id:'2',
                    imgUrl:'https://i.ibb.co/px2tCc3/jackets.png',
                    link:''
                },
                {
                    title:'sneakers',
                    id:'3',
                    imgUrl:'https://i.ibb.co/0jqHpnp/sneakers.png',
                    link:''
                },
                {
                    title:'women',
                    id:'4',
                    imgUrl:'https://i.ibb.co/GCCdy8t/womens.png',
                    size:'large',
                    link:''
                },
                {
                    title:'men',
                    id:'5',
                    imgUrl:'https://i.ibb.co/R70vBrQ/men.png',
                    size:'large',
                    link:''
                }
            ]
        }
    }
    render () {
        return(
            <div className='directory-menu'>   
               {
                   this.state.sources.map(({id,...otherSourceUrl}) => {
                       return(
                           <MenuItem
                           key={id} 
                           {...otherSourceUrl}
                           />
                       )
                   })
               }
            </div>
        )
    }
}
export default Directory