import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
}

const authSlices = createSlice(
    {
        name: 'authSlice',
        initialState: initialState,
        reducers: {
            log: (state, action) => {
                state.user = action.payload.user
                },
            }
    }

)

export const {log} = authSlices.actions
export default authSlices.reducer