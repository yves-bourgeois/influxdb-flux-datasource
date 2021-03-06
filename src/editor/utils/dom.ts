// Node.closest() polyfill
if ('Element' in window && !Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    const matches = (this.document || this.ownerDocument).querySelectorAll(s);
    let el = this;
    let i;
    // eslint-disable-next-line
    do {
      i = matches.length;
      // eslint-disable-next-line
      while (--i >= 0 && matches.item(i) !== el) { }
    } while (i < 0 && (el = el.parentElement));
    return el;
  };
}

export function getPreviousCousin(node, selector) {
  let sibling = node.parentElement.previousSibling;
  let el;
  while (sibling) {
    el = sibling.querySelector(selector);
    if (el) {
      return el;
    }
    sibling = sibling.previousSibling;
  }
  return undefined;
}

export function getNextCharacter(global = window): string | null {
  const selection = global.getSelection();
  if (!selection.anchorNode) {
    return null;
  }

  const range = selection.getRangeAt(0);
  const text = selection.anchorNode.textContent;
  if (text === null) {
    return null;
  }
  const offset = range.startOffset;
  return text.substr(offset, 1);
}
