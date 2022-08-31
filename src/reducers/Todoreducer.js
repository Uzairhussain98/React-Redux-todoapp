const initailState = {
    list:[]
 }

const todoReducers = (state = initailState, action ) => {
    switch(action.type){
    
    case "PLUS" : 
    let { id , data } = action.payload;
    return {
        ...state,
            list:[
                ...state.list,
                {
                id: id,
                data: data
                }
            ]

    }  ;


 
    case "MINUS" : 
    // const  Id  = action.payload;
    const newlist = state.list.filter((elem)=> elem.id !== action.payload);
    console.log(action.payload)
    return {
        ...state,
        list : newlist
        

    }  ;




    case "CLEARALL" : return {
        ...state,
        list:[]
    
    } ;

    default : return state ;

    
}}


export default todoReducers