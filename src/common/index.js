export function findInTree(nodes, predicate) {
  return nodes.find(node => {
    if (predicate(node)) return true;
    if (node.children) {
      const found = findInTree(node.children, predicate);
      if (found) {
        node._found = found; // 暂存中间结果
        return true;
      }
    }
    return false;
  })?._found || nodes.find(predicate) || null;
}
