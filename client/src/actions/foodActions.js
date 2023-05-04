import axios from 'axios';
import { baseUrl } from '../baseUrl';
export const getAllFoodReducer = ()=> async  dispatch=>{
    dispatch({type:'GET_FOOD_REQUEST'})
    try{
        const response = await axios.get(`${baseUrl}/api/menu/getfood`)
        console.log(response);
        dispatch({type:'GET_FOOD_SUCCESS', payload:response.data})
    } catch(error){
        
        console.log(error);
        dispatch({type:'GET_FOOD_FAILED ', payload: error})


    }
}
