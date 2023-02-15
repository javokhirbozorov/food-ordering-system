import axios from 'axios';
export const getAllFoodReducer = ()=> async  dispatch=>{
    dispatch({type:'GET_FOOD_REQUEST'})
    try{
        const response = await axios.get('/api/menu/getfood')
        console.log(response);
        dispatch({type:'GET_FOOD_SUCCESS', payload:response.data})
    } catch(error){
        
        console.log(error);
        dispatch({type:'GET_FOOD_FAILED ', payload: error})


    }
}
