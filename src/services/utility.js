import {useDispatch} from "react-redux"
import * as action from '../store/action-creators'

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};
export const ShowSnackBar=(message,type)=>{
useDispatch(() => {action.openSnackBar(message,type)})
}