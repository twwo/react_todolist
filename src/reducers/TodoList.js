const todoList = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO': {
             return [...state , 
                {value: action.value, done: false}
            ]
        }
           
        case 'DELETE_TODO':{
             console.log("shanchu")
           // state.splice(action.index,1);
            return state;
        }
           
        default: 
            return state;
    }
}

export default todoList;