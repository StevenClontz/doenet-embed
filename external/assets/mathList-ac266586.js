import { R as React, bx as useDoenetRenderer, b as jsxs, j as jsx, v as betterReactMathjax } from "./PageViewer-d914b069.js";
const mathList = React.memo(function MathList(props) {
  let { name, id, SVs, children } = useDoenetRenderer(props);
  if (SVs.hidden) {
    return null;
  }
  if (children.length === 0 && SVs.latex) {
    return /* @__PURE__ */ jsxs(React.Fragment, { children: [
      /* @__PURE__ */ jsx("a", { name: id }),
      /* @__PURE__ */ jsx("span", { id, children: /* @__PURE__ */ jsx(betterReactMathjax.MathJax, { hideUntilTypeset: "first", inline: true, dynamic: true, children: "\\(" + SVs.latex + "\\)" }) })
    ] }, id);
  }
  if (children.length === 0) {
    return /* @__PURE__ */ jsx(React.Fragment, {}, id);
  }
  let withCommas = children.slice(1).reduce((a, b) => [...a, ", ", b], [children[0]]);
  return /* @__PURE__ */ jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsx("a", { name: id }),
    /* @__PURE__ */ jsx("span", { id, children: withCommas })
  ] }, id);
});
export {
  mathList as default
};
