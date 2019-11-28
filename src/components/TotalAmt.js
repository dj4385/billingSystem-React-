import React from 'react'

export const TotalAmt = (props)=>{
    console.log("Output",props.cart)

    var trjsx = ()=>{
        var selectedProduct = []
        for(let i=0;i<props.cart.length;i++){
            selectedProduct.push(
                <tr key={i}>
                    <td>{props.cart[i].name}</td>
                    <td>{props.cart[i].category}</td>
                    <td>{props.cart[i].qty}</td>
                    <td>{props.cart[i].price}</td>
                    <td>{props.cart[i].qty * props.cart[i].price}</td>
                </tr>
            )
        }
        return selectedProduct
    }

    return(
        <>
            <h1 className="text-center">Total Amt</h1>
            <table>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Category</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Total Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {trjsx()}
                </tbody>
            </table>
        </>
    )
}