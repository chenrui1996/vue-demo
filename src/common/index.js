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


export function drag(el, binding) {
  el.style.position = 'absolute'
  el.style.cursor = 'move'

  const limitToParent = binding.arg === 'parent'
  el.onmousedown = function (e) {
    const disX = e.clientX - el.offsetLeft
    const disY = e.clientY - el.offsetTop
    const parent = el.parentElement

    console.log("parent", parent)
    console.log("limitToParent", limitToParent)

    document.onmousemove = function (e) {
      let left = e.clientX - disX
      let top = e.clientY - disY

      if (limitToParent && parent) {
        const maxLeft = parent.clientWidth - el.offsetWidth
        const maxTop = parent.clientHeight - el.offsetHeight

        left = Math.max(0, Math.min(left, maxLeft))
        top = Math.max(0, Math.min(top, maxTop))
      }

      const maxLeft = window.innerWidth - el.offsetWidth
      const maxTop = window.innerHeight - el.offsetHeight

      left = Math.max(0, Math.min(left, maxLeft))
      top = Math.max(0, Math.min(top, maxTop))

      el.style.left = left + 'px'
      el.style.top = top + 'px'
    }
    document.onmouseup = function () {
      document.onmousemove = null
      document.onmouseup = null
    }
  }
}
