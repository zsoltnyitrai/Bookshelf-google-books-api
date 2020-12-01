const isloggedReducer=(state=false,action)=>{
    switch(action.type){
        case 'Books':
            return !state 
        default:
            return state
    }
}
export default isloggedReducer