

 const TodoReducer = ( initialState = [], action ) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            return [ ...initialState, action.payload ]

            case '[TODO] Add Todo':
                return initialState.filter(todo => todo.id !== action.payload)
    
        default:
            return initialState;
    }
}




export default TodoReducer
