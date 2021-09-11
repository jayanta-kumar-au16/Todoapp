const initialstate = {
    list:[]
}

const todoReducers = (state = initialstate , action)=>{

    switch (action.type) {
        case 'ADDTODO':
            const {id,data} = action.payload;
            return{
                ...state,
                list:[
                    ...state.list,
                    {
                        id:id,
                        data:data
                    }
                ]
            }
        case 'DELETETODO':
            const newlist = state.list.filter((item)=> item.id !== action.id)
            return{
                ...state,
                list: newlist
            }
    
        default: return state;
          
    }
}

export default todoReducers;