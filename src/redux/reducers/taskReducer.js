export default function taskReducer(state = [], action){
    switch(action.type)
    {
        case "CREATE_TASK":
            return [...state, {...action.task}];
            // return state.push(action.task); FEO
        default:
            return state;
    }
}