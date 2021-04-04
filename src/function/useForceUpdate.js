import { useState } from "react"

/**
 * Force component to re-render!
 * Theory behind this:
 *      just change the state and the component will re-render!
 *
 * Example:
 *      const [forceUpdate] = useForceUpdate()
 *      ...
 *      <button onClick={forceUpdate}>Update</button>
 *
 *
 * Force children to re-mount!
 * Theory behind this:
 *      just change the key and the component will re-mount!
 *      this mean useEffect with [] will run again
 *
 * Example:
 *      const [forceUpdate, key] = useForceUpdate()
 *      ...
 *      <div key={key}>{children}</div>
 *      <button onClick={forceUpdate}>Update</button>
 */
function useForceUpdate() {
  const [key, setKey] = useState(false)
  const forceUpdate = () => setKey((value) => !value)
  return { forceUpdate, key: String(key) }
}

export default useForceUpdate