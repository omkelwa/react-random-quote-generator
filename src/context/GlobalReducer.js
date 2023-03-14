const GlobalReducer = (state, action) =>{
    switch(action.type){
    
        case "get-data" :
            return{
                ...state,
                quote : action.payload
            }


        default :
        return state
    }
}

export default GlobalReducer