import { R as React, bx as useDoenetRenderer, r as reactExports, by as Context, bD as getPositionFromAnchorByCoordinate, j as jsx, b as jsxs, B as Button } from "./PageViewer-d914b069.js";
import { BoardContext } from "./graph-8a8db909.js";
import "./css-5483d03f.js";
import "./visibility-sensor-57589aaf.js";
const button = React.memo(function ButtonComponent(props) {
  let { name, id, SVs, actions, callAction } = useDoenetRenderer(props, false);
  ButtonComponent.ignoreActionsWithoutCore = (actionName) => actionName === "moveButton";
  let buttonJXG = reactExports.useRef(null);
  let anchorPointJXG = reactExports.useRef(null);
  let anchorRel = reactExports.useRef(null);
  const board = reactExports.useContext(BoardContext);
  let pointerAtDown = reactExports.useRef(false);
  let pointAtDown = reactExports.useRef(false);
  let dragged = reactExports.useRef(false);
  let calculatedX = reactExports.useRef(null);
  let calculatedY = reactExports.useRef(null);
  let lastPositionFromCore = reactExports.useRef(null);
  let previousPositionFromAnchor = reactExports.useRef(null);
  let fixed = reactExports.useRef(false);
  let fixLocation = reactExports.useRef(false);
  fixed.current = SVs.fixed;
  fixLocation.current = !SVs.draggable || SVs.fixLocation || SVs.fixed;
  let label = SVs.label ? SVs.label : "Button";
  reactExports.useEffect(() => {
    return () => {
      if (buttonJXG.current !== null) {
        deleteButtonJXG();
      }
    };
  }, []);
  function createButtonJXG() {
    let jsxButtonAttributes = {
      visible: !SVs.hidden,
      fixed: fixed.current,
      disabled: SVs.disabled,
      useMathJax: SVs.labelHasLatex,
      parse: false
    };
    let newAnchorPointJXG;
    try {
      let anchor = Context.fromAst(SVs.anchor);
      let anchorCoords = [
        anchor.get_component(0).evaluate_to_constant(),
        anchor.get_component(1).evaluate_to_constant()
      ];
      if (!Number.isFinite(anchorCoords[0])) {
        anchorCoords[0] = 0;
        jsxButtonAttributes["visible"] = false;
      }
      if (!Number.isFinite(anchorCoords[1])) {
        anchorCoords[1] = 0;
        jsxButtonAttributes["visible"] = false;
      }
      newAnchorPointJXG = board.create("point", anchorCoords, {
        visible: false
      });
    } catch (e) {
      jsxButtonAttributes["visible"] = false;
      newAnchorPointJXG = board.create("point", [0, 0], { visible: false });
      return;
    }
    jsxButtonAttributes.anchor = newAnchorPointJXG;
    let { anchorx, anchory } = getPositionFromAnchorByCoordinate(
      SVs.positionFromAnchor
    );
    jsxButtonAttributes.anchorx = anchorx;
    jsxButtonAttributes.anchory = anchory;
    anchorRel.current = [anchorx, anchory];
    let newButtonJXG = board.create(
      "button",
      [0, 0, label, () => callAction({ action: actions[SVs.clickAction] })],
      jsxButtonAttributes
    );
    newButtonJXG.isDraggable = !fixLocation.current;
    newButtonJXG.on("down", function(e) {
      pointerAtDown.current = [e.x, e.y];
      pointAtDown.current = [...newAnchorPointJXG.coords.scrCoords];
      dragged.current = false;
    });
    newButtonJXG.on("hit", function(e) {
      dragged.current = false;
    });
    newButtonJXG.on("up", function(e) {
      if (dragged.current) {
        callAction({
          action: actions.moveButton,
          args: {
            x: calculatedX.current,
            y: calculatedY.current
          }
        });
        dragged.current = false;
      }
    });
    newButtonJXG.on("keyfocusout", function(e) {
      if (dragged.current) {
        callAction({
          action: actions.moveButton,
          args: {
            x: calculatedX.current,
            y: calculatedY.current
          }
        });
        dragged.current = false;
      }
    });
    newButtonJXG.on("drag", function(e) {
      let viaPointer = e.type === "pointermove";
      if (!viaPointer || Math.abs(e.x - pointerAtDown.current[0]) > 0.1 || Math.abs(e.y - pointerAtDown.current[1]) > 0.1) {
        dragged.current = true;
      }
      let [xmin, ymax, xmax, ymin] = board.getBoundingBox();
      let width = newButtonJXG.size[0] / board.unitX;
      let height = newButtonJXG.size[1] / board.unitY;
      let anchorx2 = anchorRel.current[0];
      let anchory2 = anchorRel.current[1];
      let offsetx = 0;
      if (anchorx2 === "middle") {
        offsetx = -width / 2;
      } else if (anchorx2 === "right") {
        offsetx = -width;
      }
      let offsety = 0;
      if (anchory2 === "middle") {
        offsety = -height / 2;
      } else if (anchory2 === "top") {
        offsety = -height;
      }
      let xminAdjusted = xmin + 0.04 * (xmax - xmin) - offsetx - width;
      let xmaxAdjusted = xmax - 0.04 * (xmax - xmin) - offsetx;
      let yminAdjusted = ymin + 0.04 * (ymax - ymin) - offsety - height;
      let ymaxAdjusted = ymax - 0.04 * (ymax - ymin) - offsety;
      if (viaPointer) {
        var o = board.origin.scrCoords;
        calculatedX.current = (pointAtDown.current[1] + e.x - pointerAtDown.current[0] - o[1]) / board.unitX;
        calculatedY.current = (o[2] - (pointAtDown.current[2] + e.y - pointerAtDown.current[1])) / board.unitY;
      } else {
        calculatedX.current = newAnchorPointJXG.X() + newButtonJXG.relativeCoords.usrCoords[1];
        calculatedY.current = newAnchorPointJXG.Y() + newButtonJXG.relativeCoords.usrCoords[2];
      }
      calculatedX.current = Math.min(
        xmaxAdjusted,
        Math.max(xminAdjusted, calculatedX.current)
      );
      calculatedY.current = Math.min(
        ymaxAdjusted,
        Math.max(yminAdjusted, calculatedY.current)
      );
      callAction({
        action: actions.moveButton,
        args: {
          x: calculatedX.current,
          y: calculatedY.current,
          transient: true,
          skippable: true
        }
      });
      newButtonJXG.relativeCoords.setCoordinates(JXG.COORDS_BY_USER, [0, 0]);
      newAnchorPointJXG.coords.setCoordinates(
        JXG.COORDS_BY_USER,
        lastPositionFromCore.current
      );
    });
    newButtonJXG.on("keydown", function(e) {
      if (e.key === "Enter") {
        if (dragged.current) {
          callAction({
            action: actions.moveButton,
            args: {
              x: calculatedX.current,
              y: calculatedY.current
            }
          });
          dragged.current = false;
        }
      }
    });
    buttonJXG.current = newButtonJXG;
    anchorPointJXG.current = newAnchorPointJXG;
    previousPositionFromAnchor.current = SVs.positionFromAnchor;
    if (SVs.labelHasLatex) {
      setTimeout(() => {
        if (buttonJXG.current) {
          buttonJXG.current.needsUpdate = true;
          buttonJXG.current.setText(label);
          buttonJXG.current.update();
          board == null ? void 0 : board.updateRenderer();
        }
      }, 1e3);
    }
  }
  function deleteButtonJXG() {
    buttonJXG.current.off("drag");
    buttonJXG.current.off("down");
    buttonJXG.current.off("hit");
    buttonJXG.current.off("up");
    buttonJXG.current.off("keyfocusout");
    buttonJXG.current.off("keydown");
    board.removeObject(buttonJXG.current);
    buttonJXG.current = null;
  }
  if (board) {
    let anchorCoords;
    try {
      let anchor = Context.fromAst(SVs.anchor);
      anchorCoords = [
        anchor.get_component(0).evaluate_to_constant(),
        anchor.get_component(1).evaluate_to_constant()
      ];
    } catch (e) {
      anchorCoords = [NaN, NaN];
    }
    lastPositionFromCore.current = anchorCoords;
    if (buttonJXG.current === null) {
      createButtonJXG();
    } else {
      buttonJXG.current.relativeCoords.setCoordinates(
        JXG.COORDS_BY_USER,
        [0, 0]
      );
      anchorPointJXG.current.coords.setCoordinates(
        JXG.COORDS_BY_USER,
        anchorCoords
      );
      buttonJXG.current.setText(label);
      let visible = !SVs.hidden;
      if (Number.isFinite(anchorCoords[0]) && Number.isFinite(anchorCoords[1])) {
        let actuallyChangedVisibility = buttonJXG.current.visProp["visible"] !== visible;
        buttonJXG.current.visProp["visible"] = visible;
        buttonJXG.current.visPropCalc["visible"] = visible;
        if (actuallyChangedVisibility) {
          buttonJXG.current.setAttribute({ visible });
        }
      } else {
        buttonJXG.current.visProp["visible"] = false;
        buttonJXG.current.visPropCalc["visible"] = false;
      }
      if (buttonJXG.current.visProp.disabled !== SVs.disabled) {
        buttonJXG.current.visProp.disabled = SVs.disabled;
        buttonJXG.current.setAttribute({ disabled: SVs.disabled });
      }
      buttonJXG.current.visProp.fixed = fixed.current;
      buttonJXG.current.isDraggable = !fixLocation.current;
      buttonJXG.current.needsUpdate = true;
      if (SVs.positionFromAnchor !== previousPositionFromAnchor.current) {
        let { anchorx, anchory } = getPositionFromAnchorByCoordinate(
          SVs.positionFromAnchor
        );
        buttonJXG.current.visProp.anchorx = anchorx;
        buttonJXG.current.visProp.anchory = anchory;
        anchorRel.current = [anchorx, anchory];
        previousPositionFromAnchor.current = SVs.positionFromAnchor;
        buttonJXG.current.fullUpdate();
      } else {
        buttonJXG.current.update();
      }
      anchorPointJXG.current.needsUpdate = true;
      anchorPointJXG.current.update();
      board.updateRenderer();
    }
    return /* @__PURE__ */ jsx("a", { name: id });
  }
  if (SVs.hidden) {
    return null;
  }
  return /* @__PURE__ */ jsxs("div", { id, margin: "12px 0", style: { display: "inline-block" }, children: [
    /* @__PURE__ */ jsx("a", { name: id }),
    /* @__PURE__ */ jsx(
      Button,
      {
        id: id + "_button",
        onClick: () => callAction({ action: actions[SVs.clickAction] }),
        disabled: SVs.disabled,
        value: label,
        valueHasLatex: SVs.labelHasLatex
      }
    )
  ] });
});
export {
  button as default
};
