import React from 'react'

export const Product = (props)=>{
    
    // var productJsx = props.productRes.map((ele,i)=>{
    //     return <div key={i}>
    //             <p><span className="h4">{ele.name}</span></p>
    //         </div>
    //     })

    console.log('ProductJSx',props.productRes)

    return(
        <>
            <h1>Product</h1>
            {/* {productJsx()} */}
        </>
    )
}