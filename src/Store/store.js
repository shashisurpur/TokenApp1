import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import rootReducer from "./Reducers/rootReducer";
import { getFirebase } from 'react-redux-firebase';




const middleWare= [thunk.withExtraArgument({ getFirebase }) ]

const store=createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWare)) )

export default store