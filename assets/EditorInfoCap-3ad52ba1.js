import { t as Recoil_index_20, a1 as courseIdAtom, W as searchParamAtomFamily, q as useCourse, a8 as itemByDoenetId, b as jsxs, F as Fragment, j as jsx } from "./PageViewer-d914b069.js";
import { f as find_image_label, a as find_color_label } from "./util-b6992d9f.js";
import "./util-2e804dda.js";
function EditorInfoCap() {
  const courseId = Recoil_index_20(courseIdAtom);
  const doenetId = Recoil_index_20(searchParamAtomFamily("doenetId"));
  const pageId = Recoil_index_20(searchParamAtomFamily("pageId"));
  let { color, image, label: course_label } = useCourse(courseId);
  const pageInfo = Recoil_index_20(itemByDoenetId(pageId));
  const activityInfo = Recoil_index_20(itemByDoenetId(doenetId));
  let accessible_name = "course";
  if (!pageInfo || !image) {
    return null;
  }
  if (image != "none") {
    accessible_name = find_image_label(image);
    image = "url(/drive_pictures/" + image + ")";
  }
  if (color != "none") {
    accessible_name = find_color_label(color);
    color = "#" + color;
  }
  let activityPageJSX = /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { style: { marginBottom: "1px", marginTop: "5px" }, children: "Activity" }),
    /* @__PURE__ */ jsx("div", { style: { marginBottom: "5px", padding: "1px 5px" }, children: activityInfo.label }),
    /* @__PURE__ */ jsx("div", { style: { marginBottom: "1px", marginTop: "5px" }, children: "Page" }),
    /* @__PURE__ */ jsx("div", { style: { marginBottom: "5px", padding: "1px 5px" }, children: pageInfo.label })
  ] });
  if (activityInfo.isSinglePage) {
    activityPageJSX = /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { style: { marginBottom: "1px", marginTop: "5px" }, children: "Activity" }),
      /* @__PURE__ */ jsx("div", { style: { marginBottom: "5px", padding: "1px 5px" }, children: activityInfo.label })
    ] });
  }
  if (activityInfo.type == "bank") {
    activityPageJSX = /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { style: { marginBottom: "1px", marginTop: "5px" }, children: "Collection" }),
      /* @__PURE__ */ jsx("div", { style: { marginBottom: "5px", padding: "1px 5px" }, children: activityInfo.label }),
      /* @__PURE__ */ jsx("div", { style: { marginBottom: "1px", marginTop: "5px" }, children: "Page" }),
      /* @__PURE__ */ jsx("div", { style: { marginBottom: "5px", padding: "1px 5px" }, children: pageInfo.label })
    ] });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          position: "relative",
          width: "100%",
          height: "165px",
          overflow: "hidden"
        },
        children: /* @__PURE__ */ jsx(
          "img",
          {
            "aria-label": accessible_name,
            style: {
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: image,
              backgroundColor: color
            }
          }
        )
      }
    ),
    /* @__PURE__ */ jsx("b", { children: "Editor" }),
    /* @__PURE__ */ jsx("div", { style: { marginBottom: "1px", marginTop: "5px" }, children: "Course" }),
    /* @__PURE__ */ jsx("div", { style: { marginBottom: "5px", padding: "1px 5px" }, children: course_label }),
    activityPageJSX
  ] });
}
export {
  EditorInfoCap as default
};
