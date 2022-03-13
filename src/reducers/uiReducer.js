import { types } from './../types/types';

export const uiReducer = (state = {}, action) => {
    switch (action.type) {
        case types.TOGGLE_DARK:
            return {
                ...state,
                darkMode: !state.darkMode
            } 
    }
}

export default uiReducer;