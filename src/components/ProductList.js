import React from 'react'
import Axios from 'axios'

export default class Product extends React.Component{
    
    constructor(props){
        super(props)
        this.product = ""
        this.state = {
            productList : this.product
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
    
    productJsx(){
        for(let i=0;i<this.state.productList.length;i++){
            return <div key={i}>
                <p>
                    <span className="h4"><b>Product Name:</b> {this.state.productList[i].name}</span><br/>
                    <span><b>Category:</b> {this.state.productList[i].category}</span><br/>
                    <span><b>Price:</b>{this.state.productList[i].price}</span><br/>
                </p>
             </div>
        } 
        // this.state.productList.map((ele,i)=>{
        // console.log("ele",this.state.productList)
        // return <div key={i}>
        //         <p><span className="h4">{ele.name}</span></p>
        //     </div>
        // })
    }

    render(){
        return(
            <>
                <h1>Product</h1>
                {this.productJsx()}
            </>
        )
    }
}