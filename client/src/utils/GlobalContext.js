import { useContext, useReducer, createContext } from 'react';

//setup  global context
export const GlobalContext = createContext();

// set  up  global provider and reducer
const initState = {
	books: []
};

const reducer = (state, action) => {
	
	switch (action.type) {
        case 'searchResult':
            return {
                ...state,
                books: action.payload
            };
		default:
			return state;
	}
};

const GlobalProvider = props => {
    const [ state, dispatch ] = useReducer(reducer, initState);
	return <GlobalContext.Provider value={[ state, dispatch ]} {...props} />;
};


//export GlobalProvider
export default GlobalProvider;

export const useGlobalContext = () => {

	return useContext(GlobalContext);
};
