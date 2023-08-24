// import React,{useState} from 'react'
// export function Counter(){
//           let [counter,updateCounter] = useState(0);
//           return(
//             <>
//             <h2>Counter value is:{counter}</h2>
//             <button class="btn btn-primary" type="button" onClick={()=>
//             updateCounter(++counter)}>Change</button>
//             </>
//           )
// }


// USING CLASSES COUNTER INCREMENT
// import React from 'react'
// export class Counter extends React.Component{
//     state = {
//         counter:0
//     }
//     render(){ // we should use render method in classes
//         return(
//             <>
//             <h3>Counter value using class is:{this.state.counter}</h3>
//             <button onClick ={()=>{
//                   this.setState({
//                     counter:++this.state.counter //or we can use "this.state.counter + 1" also for increment
//                   })
//             }}>Click me!</button>
//             </>
//         )
//     }
// }


//USING  setState method
import React from 'react'
export class Counter extends React.Component{
    state = {
        model:"Galaxy m31s",
        price:20000
    }
    render(){
        return(
            <>
            <h1>Model name:{this.state.model}</h1>
            <p>Price :{this.state.price}</p>
            <input type="number" id="price"/>
            <button  onClick={()=>{
                let p=document.getElementById("price").value;
                console.log(p);
                this.setState({
                    price:p
                })
            }}>Update</button>
            </>
        )
    }
}