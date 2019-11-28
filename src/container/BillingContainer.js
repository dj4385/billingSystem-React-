import React from 'react'
import Axios from 'axios'
import { Product }  from '../components/ProductList'
import { TotalAmt } from '../components/TotalAmt'

class Container extends React.Component{

    constructor(props){
        super(props)
        this.selectedItem = []
        this.product = ""
        this.state = {
            productList : this.product,
            cartItem: this.selectedItem
        }
    }

    componentWillMount(){
        this.getProductList()
    }

    getProductList(){
        var _url = 'http://localhost:8080/products'
        Axios({
            method: 'GET',
            url: _url
        }).then((apiRes)=>{
            this.product = apiRes.data
            this.setState({
                productList: this.product
            },()=>console.log("state val",this.state.productList))
        }).catch(err=>console.log(err))
    }

    itemSelected(item){
        //this.selectedItem = item
        this.selectedItem.push(item)
        this.setState({
            ...this.state,
            cartItem: this.selectedItem
        })
    }

    render(){
        return (
            <div className="row m-1 p-5 text-dark">
                <div className="col-lg-8">
                    <div className="jumbotron">
                        <Product pList={this.state.productList} selectItem={this.itemSelected.bind(this)}></Product>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="jumbotron">
                        <TotalAmt cart={this.state.cartItem}></TotalAmt>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Container