import { s as styled, r as reactExports, R as React, j as jsx, a_ as Fe } from "./PageViewer-d914b069.js";
const Container = styled.div`
  display: ${(props) => props.vertical ? "static" : "flex"};
  width: ${(props) => props.width == "menu" ? "var(--menuWidth)" : ""};
  // height: 'fit-content';
  // margin: 2px 0px 2px 0px ;
  /* flex-wrap: wrap; */
  overflow: clip;
`;
const toggleGroup = {
  margin: "0px -2px 0px -2px",
  borderRadius: "0",
  padding: "0px 12px 0px 10px"
};
const verticalToggleGroup = {
  margin: "-2px 4px -2px 4px",
  borderRadius: "0",
  padding: "0px 10px 0px 10px"
};
const ToggleButtonGroup = (props) => {
  const [selectedIndex, setSelectedIndex] = reactExports.useState(0);
  const handleClick = (index) => {
    setSelectedIndex(index);
    if (props.onClick) {
      props.onClick(index);
    }
  };
  let first_prop = props.vertical ? "first_vert" : "first";
  let last_prop = props.vertical ? "last_vert" : "last";
  let elem = React.Children.toArray(props.children);
  let modElem = elem.map((element, index) => {
    let props2 = {
      index,
      isSelected: index === selectedIndex,
      onClick: handleClick
    };
    if (index === 0) {
      props2["num"] = first_prop;
    } else if (index === elem.length - 1) {
      props2["num"] = last_prop;
    }
    return React.cloneElement(element, props2);
  });
  return /* @__PURE__ */ jsx(
    Container,
    {
      style: { height: "fit-content" },
      vertical: props.vertical,
      width: props.width,
      role: "group",
      children: /* @__PURE__ */ jsx(Fe, { theme: props.vertical ? verticalToggleGroup : toggleGroup, children: modElem })
    }
  );
};
const ToggleButtonGroup$1 = ToggleButtonGroup;
export {
  ToggleButtonGroup$1 as T
};
