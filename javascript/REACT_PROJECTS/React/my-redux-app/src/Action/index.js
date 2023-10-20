export const settablenumber =(value)=>async dispatch=>{
    dispatch({
        type:"SETTABLENUMBER",
        playload:value
    })
}

export const resettablenumber =()=>async dispatch=>{
    dispatch({
        type:"RESETTABLENUMBER"
    })
}

export const setfilter =(value)=>async dispatch=>{
    dispatch({
        type:"SETFILTER",
        playload:value
    })
}

export const resetfilter =()=>async dispatch=>{
    dispatch({
        type:"RESETFILTER"
    })
}