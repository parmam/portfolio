import { FunctionComponent, createContext, useReducer, ReactNode } from 'react'; 

// Define action types
const TOGGLE_MENU = 'TOGGLE_MENU';
const OPEN_MENU = 'OPEN_MENU';
const CLOSE_MENU = 'CLOSE_MENU';

// Define the state interface
interface MenuState {
    isOpen: boolean;
    isClosing: boolean;
    isOpening: boolean;
}

// Define the context value interface
interface MenuContextType extends MenuState {
    toggleMenu: () => void;
    openMenu: () => void;
    closeMenu: () => void;
}

// Define the initial state
const initialState: MenuState = {
    isOpen: false,
    isClosing: false,
    isOpening: false,
};

// Reducer function
const menuReducer = (state: MenuState, action: { type: string }): MenuState => {
    switch (action.type) {
        case OPEN_MENU:
            return {
                ...state,
                isOpen: true,
                isClosing: false,
                isOpening: true,
            };
        case CLOSE_MENU:
            return {
                ...state,
                isOpen: false,
                isClosing: true,
                isOpening: false,
            };
        case TOGGLE_MENU:
            return state.isOpen ? { ...state, isClosing: true, isOpen: false } : { ...state, isOpening: true, isOpen: true };
        default:
            return state;
    }
};

export const MenuContext = createContext<MenuContextType>(initialState as MenuContextType);

const MenuProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(menuReducer, initialState);

    const toggleMenu = () => {
        dispatch({ type: TOGGLE_MENU });
    };

    const openMenu = () => {
        dispatch({ type: OPEN_MENU });
    };

    const closeMenu = () => {
        dispatch({ type: CLOSE_MENU });
    };

    return (
        <MenuContext.Provider value={{ ...state, toggleMenu, openMenu, closeMenu }}>
            {children}
        </MenuContext.Provider>
    );
};

export const b = 0

export default MenuProvider
