import React from 'react'

export const Product = (props)=>{
    
    var productJsx = ()=>{
        var val = []
        for(let i=0;i<props.pList.length;i++){
            val.push(<div key={i}>
                <p onClick={
                    ()=>{
                        props.selectItem(props.pList[i])
                    }
                }>
                    <span className="h4"><b>Product Name:</b> {props.pList[i].name}</span><br/>
                    <span><b>Category:</b> {props.pList[i].category}</span><br/>
                    <span><b>Price:</b>{props.pList[i].price}</span><br/>
                </p>
             </div>)
        } 
        return val
    }
    return(
        <>
            <h1>Product</h1>
            {productJsx()}
        </>
    )
    
}