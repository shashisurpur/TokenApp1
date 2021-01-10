import {tokensConstants } from '../constants'

const initialState ={
    markerTokensData:[],
    tokenData:[]
}

const dataReducer= (state=initialState,action) =>{
    switch(action.type){
        case `${tokensConstants.GET_TOKEN}_REQUEST`:
          // state=initialState;
        break;
        case `${tokensConstants.GET_TOKEN}_SUCCESS`:
            state={
                ...state,
                markerTokensData: action.payload.data
            }
        break
        case `${tokensConstants.GET_TOKEN}_FAILURE`:
            state={
                ...state,
                markerTokensData : []
            }
        break
        case `${tokensConstants.GENERATE_TOKEN}_SUCCESS`:
            state={
                ...state,
            }
            alert("Your token has been generated successfull at ")
        break
        case `${tokensConstants.GENERATE_TOKEN}_FAILURE`:
            state={
                ...state,
            }
            //console.log(state.markerTokensData)
            
            alert("You already taken a token please check status for your position")
        break
        case `${tokensConstants.GET_STATUS}_REQUEST` :
            break
        case `${tokensConstants.GET_STATUS}_SUCCESS` :
            state={
                ...state,
                tokenData: action.payload.data  
            }

            //alert( `Your at ${tokenData.tokenNO} position in the que`)
        break
        case `${tokensConstants.GET_STATUS}_FAILURE` :
            alert("There is no token on your name, Please genarate the token First")
        break
        default :
        return state;
    }
    return state;
}

export default dataReducer