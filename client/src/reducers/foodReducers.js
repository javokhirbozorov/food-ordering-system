/* eslint-disable default-case */
export const getAllFoodReducer=(state={menu:[]}, action)=>{
    switch(action.type) 
    {
        case 'GET_FOOD_REQUEST': return{
            loading:true,
            ...state
        }

        case 'GET_FOOD_SUCCESS': return{
            loading:false,
            menu:action.payload
        }
        case 'GET_FOOD_FAILED': return{
            loading:false,
            error:action.payload
        }
        default:return state
}
}
