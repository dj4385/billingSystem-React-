import React from 'react'

export const TotalAmt = (props)=>{
    var selectedProduct = []
    var trjsx = ()=>{
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
        console.log("Output",selectedProduct)
        return selectedProduct
    }

    var totaljsx = ()=>{
        var totalAmt = 0
        if(selectedProduct.length>0){
            selectedProduct.forEach(ele=>{
                totalAmt += parseInt(ele.price)
            })
        }    
        return totalAmt
    }

    return(
        <div className="table-responsive">
            <h1 className="text-center">Total Amt</h1>
            <table className="table">
                <thead className="table-dark">
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
                <tfoot>
                   {totaljsx()}
                </tfoot>
            </table>
        </div>
    )
}