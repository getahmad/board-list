export const addCardAct=(listId,text)=>{
    return{
        type: 'ADD_CARD',
        payload:{listId,text}
    }
}

export const delCardAct =(cardId,listId)=>{
    return {
        type: 'DELETE_CARD',
        payload:{cardId,listId}
    }
}

export const editCardAct=(data)=>{
    return {
        type: 'EDIT_CARD',
        payload : data
    }
}