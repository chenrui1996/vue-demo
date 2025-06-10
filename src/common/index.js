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

// getType(null);        // "Null"
// getType([]);          // "Array"
// getType({});          // "Object"
// getType(() => {});    // "Function"
// getType(new Date());  // "Date"
export function getType(val) {
  return Object.prototype.toString.call(val).slice(8, -1)
}
