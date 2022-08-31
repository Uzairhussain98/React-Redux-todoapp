
export const plus = (text) =>{
    return{
        type:"PLUS",
        payload : {
            id : Date.now().toString(),
            data: text
        
    }
}
}
export const minus = (id) =>{
    return{
    type:"MINUS",
    payload :id
     }
}

export const clearall = () =>{
    return{
    type:"CLEARALL"
     }
}