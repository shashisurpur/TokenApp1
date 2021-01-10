import { firestoreReducer } from 'redux-firestore';
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import dataReducer from "./dataReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    firestore : firestoreReducer,
    data: dataReducer,
})
export default rootReducer