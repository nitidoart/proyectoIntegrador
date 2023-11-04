import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/type";

//ESTADO INICIAL
const initialState = {
    myFavorites: [], // state.myFavprites esta es la forma de traer a mi estado
    allCharacters: []
};

//REDUCER
const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: payload,
                allCharacters: payload
            };

        case REMOVE_FAVORITE:
            return {
                ...state,
                myFavorites: payload
            };




        case "FILTER":
            // eslint-disable-next-line no-case-declarations
            if (payload === "ALL") {
                return {
                    ...state,
                    myFavorites: state.allCharacters,
                };
            } else {
                let copy3 = state.allCharacters.filter((char) => {
                    return char.gender === payload;
                });
                return {
                    ...state,
                    myFavorites: copy3,
                };
            }

        case "ORDER":
            // eslint-disable-next-line no-case-declarations
            let orderedCharacters;
            if (payload === "A") {
                orderedCharacters = state.allCharacters.sort((a, b) => a.id - b.id);
            } else {
                orderedCharacters = state.allCharacters.sort((a, b) => b.id - a.id);
            }
            return {
                ...state,
                myFavorites: orderedCharacters,
            };

        default:
            return {
                ...state
            };
    }
}

export default rootReducer;




/* (character) => character.id !== payload
Esta es la función de callback que se pasa como argumento al método filter(). 
Esta función se ejecutará para cada elemento del array myFavorites 
(cada elemento se representa como character en esta función).
character.id !== payload: Dentro de la función de callback, 
se compara el id del elemento character con el valor de payload. 
La condición character.id !== payload verifica si el id del elemento actual 
no es igual al valor de payload. Si esta condición es verdadera para un elemento, 
significa que el elemento no coincide con el valor de payload. */