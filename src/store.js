import { configureStore} from '@reduxjs/toolkit'
import authReducer from './context/slices'

export default configureStore({
    reducer: authReducer
})