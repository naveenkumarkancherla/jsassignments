import React,{useState} from "react"
export function Product(){
    
    let price = 20000;
    let [productname, updateName] = useState("Galaxy M31s"); //useState returns two valued array (variable, method or function)
    return(                                                  // using method only we can update variable on screen otherwise we con't just we can return value in console that's it
        <>
        <center>
        <h1>Product Name is: {productname}</h1>
        <p>Price of the product is: {price}</p>
        <input id="pname" type="text" />
        <button onClick={()=>
        {
            let pname = document.getElementById("pname").value;
            console.log(pname); //this will visible in console window
            updateName(pname);
        }}>Update</button>
        </center>
        </>
    )
}