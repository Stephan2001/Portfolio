export function findPath(root, targetId, path = []) {
  if (root.id === targetId) return [...path, root]
  if (!root.children) return null

  for (let child of root.children) {
    const childPath = findPath(child, targetId, [...path, root])
    if (childPath) return childPath
  }
  return null
}
