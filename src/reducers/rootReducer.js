const initial_state = {
    President:['Trump', 'Biden']
};

const first_reducer = (state = initial_state, action)=>{
    if(action.type === 'TEST'){
        state = {
            President: 'Biden'
        }
        return state
    }
    return state
}

export default first_reducer