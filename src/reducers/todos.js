const TodoApi = [
    {
        id: 1,
        text: 'goto shopping.',
        completed: false
    },
    {
        id: 2,
        text: 'goto gym',
        completed: false
    },
    {
        id: 3,
        text: 'goto library',
        completed: false
    }

];

const todos = (state = TodoApi, action) => {
    console.log(' > reducers/todos.js');
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            );
        default:
            return state
    }
};

export default todos