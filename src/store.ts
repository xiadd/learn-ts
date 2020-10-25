import { init, RematchDispatch, RematchRootState } from '@rematch/core'
import { models, RootModel } from './models'

export const store = init({
  models,
  redux: {
    devtoolOptions: {
      disabled: process.env.NODE_ENV === 'production',
    },
  },
})

export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel>
