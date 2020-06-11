import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultStore = fromJS({
    focused: false
})

export default (state=defaultStore, action)=>{
    if(action.type === actionTypes.SEARCH_FOCUS){
        return state.set('focused', true)
    }
    if(action.type === actionTypes.SEARCH_BLUR){
        return state.set('focused', false)

    }
    return state;
}