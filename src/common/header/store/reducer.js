import * as actionTypes from './actionTypes'

const defaultStore = {}

export default (state=defaultStore, action)=>{
    if(action.type === actionTypes.SEARCH_FOCUS){
        return {
            focused: true
        }
    }
    if(action.type === actionTypes.SEARCH_BLUR){
        return {
            focused: false
        }
    }
    return state;
}