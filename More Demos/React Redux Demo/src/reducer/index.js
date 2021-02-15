const reducer = (state = 0, action) => {
    switch (action.type) {
       case 'INCREMENT': 
       return state + 1
       case 'DECREMENT':
           var counter=0;
           if(state)
           {
            counter= state-1
           }
    return counter
       case 'RESET' : return 0 
       default: return state
    }
 }
 export default reducer;    