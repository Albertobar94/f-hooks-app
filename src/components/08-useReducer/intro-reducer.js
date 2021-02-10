const initialState = [{
    id: 1,
    todo: 'comprar pan',
    done: false
}];

const todoReducer = ( state = initialState, action ) => {

    if( action?.type === 'agregar' ){
        return [ ...state, action.payload ];
    }

    return state;
};
//inicializando el state
let todos = todoReducer();
//Objeto a enviar al reducer
const newTodo = {
    id: 2,
    todo: 'comprar leche',
    done: false
};
//Action para el reducer
const action = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer( todos, action );


console.log(todos);