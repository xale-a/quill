import InlineBlot from './inline';

// Fix browser default behavior for adding <font> elements

class Native extends InlineBlot {
  optimize(context) {
    super.optimize(context);
    const color = this.domNode.getAttribute('color');
    const span = this.replaceWith(InlineBlot.blotName);
    if (color) {
      span.format('color', color);
    }
    return span;
  }
}
Native.blotName = 'native';
Native.tagName = 'FONT';

export default Native;
