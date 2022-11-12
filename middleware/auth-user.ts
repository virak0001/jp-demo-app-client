import { Context } from '@nuxt/types'

export default ({ redirect, $auth }: Context) => {
  if (!$auth.loggedIn) {
    return redirect('/auth/sign-in')
  }
}
