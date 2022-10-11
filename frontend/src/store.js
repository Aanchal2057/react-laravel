import { configureStore } from '@reduxjs/toolkit'

import reducers from './redux/reducers/index'

const store = configureStore(
  reducers,
  {},

);

export default store;