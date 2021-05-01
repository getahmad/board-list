export const addListAct =(text)=>{
    // console.log({text});
    return {
        type:"ADD_LIST",
        payload:{text}
    }
}