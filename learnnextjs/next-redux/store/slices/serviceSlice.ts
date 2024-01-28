import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    services:[{
        title:"Web and Mobile",
        description: "web mobile service"
    },
    {
        title:"A.I",
        description: "A.I service"
    }
]

}

export const serviceSlice = createSlice({
    name:'service',
   initialState: initialState,
   reducers:{
    createService:(state,action)=>{
        state.services = [...state.services, action.payload];
    },
    updateService:(state,action)=>{
        state.services = state.services.map(service => {   
           if (service.id === action.payload.id) {
            return action.payload
           }
            return service
        })

    }
   }

})

export const {createService, updateService} = serviceSlice.actions
export default serviceSlice.reducer