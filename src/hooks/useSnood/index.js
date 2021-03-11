import { createContext, useContext } from 'react';

const context = createContext();
const { Provider } = context;
const useSnood = () => useContext(context);

export { Provider, useSnood };
