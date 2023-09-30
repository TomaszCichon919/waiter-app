

//selectors
const REMOVE_TABLE = 'app/tables/REMOVE_TABLE';
const EDIT_TABLE = 'app/tables/EDIT_TABLE';
const ADD_TABLE = 'app/posts/ADD_TABLE';

// actions


export const removeTable = payload => ({ type: REMOVE_TABLE, payload });
export const editTable = payload => ({ type: EDIT_TABLE, payload });
export const addTable = payload => ({ type: ADD_TABLE, payload });
export const getTablesById = ({ tables }, TableId) => tables.find(table => table.id === TableId);

//const createActionName = actionName => `app/tables/${actionName}`;
// action creators
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_TABLE:
      return [...statePart, { id: (statePart.length +1).toString(), ...action.payload }];
      case REMOVE_TABLE:
        const updatedTables = statePart.filter(table => table.id !== action.payload);
        statePart = updatedTables
        return statePart;
      case EDIT_TABLE:
        return statePart.map(table => (table.id === action.payload.id ? { ...table, ...action.payload } : table));
      default:
      return statePart;
  };
};
export default tablesReducer;