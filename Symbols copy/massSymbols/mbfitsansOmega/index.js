import React from "react";
const dom = (eq) => ({
  type: "math",
  subtype: "symbol",
  children: [{ text: "\ud7a8 " }],
});

const Element = (attributes, children) => {
  return (
    <span contentEditable="false" className="int-symbol" {...attributes}>
      {children}
    </span>
  );
};

const icon = (attributes, children) => {
  return (
    <span className="int-symbol" {...attributes}>
      {children} &#8747;
    </span>
  );
};

export default { slateDOM: dom, MathElement: Element, Icon: icon };
