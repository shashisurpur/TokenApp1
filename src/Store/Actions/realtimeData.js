import { getFirebase } from "react-redux-firebase";
import {  tokensConstants } from "../constants"




export const markersTokens=(id)=>{
    return (dispatch) =>{
        //console.log(id)
        const db= getFirebase().firestore();
        dispatch({ 
            type: `${tokensConstants.GET_TOKEN}_REQUEST` 
        });
        
        //const date=new Date()

        db.collection('clients').doc(id).collection('Tokens')
        .onSnapshot((querySnapshot) =>{
            const tokens=[];
            querySnapshot.forEach((doc) => {
                tokens.push(doc.data())
            } )
            
           // console.log(tokens)
            
            dispatch({
                type:`${tokensConstants.GET_TOKEN}_SUCCESS`,
                payload:{data: tokens} 
            });
          
        } ); 
        
       
    }
}

export const getTokens=(id,user,lastTokenNo)=>{
    
    return (dispatchEvent)=>{
        
        const db= getFirebase().firestore();
        //const tokensCollRef = db.collection('clients').doc(id).collection('Tokens')
        
        dispatchEvent({
            type:`${tokensConstants.GENERATE_TOKEN}_REQUEST`
        })
        
        // console.log('id and email',id,user.email)
        //const date=new Date()
        var docRef =db.collection('clients').doc(id).collection('Tokens').doc()
        if(lastTokenNo===0){
            //var docRef =db.collection('clients').doc(id).collection('Tokens').doc()
            docRef.set({
                tokenId:user.email,
                tokenName:user.firstName,
                tokenNo: lastTokenNo+1
            }).then(
                dispatchEvent({
                    type:`${tokensConstants.GENERATE_TOKEN}_SUCCESS`
                })
            ).catch()
        }else{
            //var docRef =db.collection('clients').doc(id).collection('Tokens').doc()
            docRef.set({
                tokenId:user.email,
                tokenName:user.firstName,
                tokenNo: lastTokenNo+1
            }).then(
                dispatchEvent({
                    type:`${tokensConstants.GENERATE_TOKEN}_SUCCESS`
                })
            ).catch(
                dispatchEvent({
                    type:`${tokensConstants.GENERATE_TOKEN}_FAILURE`
                })
            )
        }
        

      
    }
}
/* 
export const getStatus=(id,user)=>{
    return (dispatchEvent)=>{
        const db= getFirebase().firestore();
        const tokensCollRef = db.collection('clients').doc(id).collection('Tokens')
        
        dispatchEvent({
            type:`${tokensConstants.GET_STATUS}_REQUEST`
        })
        
        //console.log('id and email',id,user.email)

        const data={}
        let docRef = db.collection('clients').doc(id).collection('Tokens').doc(user.email)
        db.get(docRef).then(dd=>{
            if(dd.exists){
                const docData= dd.data()
                console.log(docData)
            }
            else{
                throw ""
            }
        }).catch(
            dispatchEvent({
                type:`${tokensConstants.GET_STATUS}_FAILURE`
            })
        )
       /*  db.runTransaction((transaction) =>{
            let docRef =db.collection('clients').doc(id).collection('Tokens').doc(user.email)
            //db.get(docRef).then()
            
            return transaction.get(docRef).then((doc)=>{
                //console.log(doc)
                if(!doc.exists){
                    throw "There is no token on your name, Please genarate the token First"
                 }
                
                    const docData =doc.data()
                    
                    console.log("doc data",docData)
                    //console.log("data",data)
                    alert(`Your at ${docData.tokenNo} position in the que`)                     
            })
        }).then((sucess)=>{
            //console.log("data insert success",alert())
          //data && console.log(`Yuor at ${data.tokenNo}`)
        }).catch((err)=>{
           
            dispatchEvent({
                type:`${tokensConstants.GET_STATUS}_FAILURE`
            })
            
        }) 

    }
} */