export function useAuthId() {
  const { $auth } = useContext()

  return $auth.user?.id
}
