export const initialState={
    user:null,
    admin:false,
    president:false,
}

export const actionTypes={
    SET_ADMIN:"SET_ADMIN",
    SET_PRES:"SET_PRES",
}

const reducer = (state, action) =>{
    
    switch(action.type){
        case actionTypes.SET_ADMIN:
            return{
                ...state,
                user: action.user,
                admin:true
            }
        
        case actionTypes.SET_PRES:
            return{
                ...state,
                user: action.user,
                president:true
            }
        default:
            return state
    }
}
export default reducer
