export function useLoggedInRef() {
  const { $auth } = useContext()
  const loggedIn = ref($auth.loggedIn)
  watchEffect(() => (loggedIn.value = $auth.loggedIn))

  return { loggedIn }
}
