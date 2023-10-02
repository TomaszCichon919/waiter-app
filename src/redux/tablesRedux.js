import {API_URL} from '../config'

//action names
const createActionName = actionName => `app/tables/${actionName}`;
const REMOVE_TABLE = 'app/tables/REMOVE_TABLE';
const EDIT_TABLE = 'app/tables/EDIT_TABLE';
const ADD_TABLE = 'app/posts/ADD_TABLE';
const UPDATE_TABLES = createActionName('UPDATE_TABLES')

// actions

export const removeTable = payload => ({ type: REMOVE_TABLE, payload });
export const editTable = payload => ({ type: EDIT_TABLE, payload });
export const addTable = payload => ({ type: ADD_TABLE, payload });
export const getTablesById = ({ tables }, TableId) => tables.find(table => table.id === TableId);
export const updateTables = payload => ({ type: UPDATE_TABLES, payload });
export const fetchTables = () => {
    return (dispatch) => {
    fetch(API_URL + '/tables')
    .then(res => res.json())
    .then(tables => dispatch(updateTables(tables)))
  }
};
export const addTableRequest = (newTable) => {
    return (dispatch) => {

        fetch(API_URL + '/tables')
        .then(res => res.json())
        .then(tables => {
            const nextTableId = tables.length +1
       
        const options = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: nextTableId.toString(), ...newTable}),
    };
    fetch(API_URL + '/tables', options)
    .then(() => dispatch(addTable(newTable)))
})
        }
    }

    export const removeTableRequest = (tableToRemove) => {
        return (dispatch) => {
            const options = {
                method: 'DELETE',
            }
        fetch(API_URL + '/tables/'+ tableToRemove, options)
        .then(() => dispatch(removeTable(tableToRemove)))
            }
        }

        export const editTableRequest = (editedTable) => {
            return (dispatch) => {
                const options = {
                    method: 'PUT',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(editedTable),
                  };
            fetch(API_URL + '/tables', options)
            .then(() => dispatch(editTable(editedTable)))
                }
            }


// action creators
const tablesReducer = (statePart = [], action) => {
    switch (action.type) {
        case ADD_TABLE:
            return [...statePart, { id: (statePart.length + 1).toString(), ...action.payload }];
        case REMOVE_TABLE:
            const updatedTables = statePart.filter(table => table.id !== action.payload);
            statePart = updatedTables
            return statePart;
        case EDIT_TABLE:
            return statePart.map(table => (table.id === action.payload.id ? { ...table, ...action.payload } : table));
        case UPDATE_TABLES:
            return [...action.payload]
        default:
            return statePart;
    };
};
export default tablesReducer;