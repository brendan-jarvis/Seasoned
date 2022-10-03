import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch, useSelector } from 'react-redux'

import { updateLoggedInUser } from './actions/loggedInUser'

export function useCacheUser() {
  const dispatch = useDispatch()
  const tokenInRedux = useSelector((state) =>
    Boolean(state.loggedInUser?.token)
  )

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()

  if (isAuthenticated && !tokenInRedux) {
    try {
      getAccessTokenSilently()
        .then((tokenValue) => {
          const userToSave = {
            auth0Id: user?.sub,
            email: user?.email,
            token: tokenValue,
          }
          dispatch(updateLoggedInUser(userToSave))
        })
        .catch((e) => e.message)
    } catch (err) {
      console.error(err)
    }
  }
}
