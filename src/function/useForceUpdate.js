import { useState } from "react"

function useForceUpdate() {
  const [key, setKey] = useState(false)
  const forceUpdate = () => setKey((value) => !value)
  return { forceUpdate, key: String(key) }
}

export default useForceUpdate