var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { u as unref, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createCommentVNode, r as ref, d as createVNode, w as withDirectives, v as vModelText, i as isRef, F as Fragment, p as pushScopeId, e as popScopeId, n as normalizeStyle, t as toDisplayString, f as normalizeClass, g as watch, h as createBlock, j as createApp } from "./vendor.30f85827.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
var style = "";
const _TriggerOption = class {
  constructor(option) {
    this.option = option;
  }
};
let TriggerOption = _TriggerOption;
__publicField(TriggerOption, "Shake", new _TriggerOption("shake"));
__publicField(TriggerOption, "Touch", new _TriggerOption("touch"));
__publicField(TriggerOption, "Voice", new _TriggerOption("voice"));
const _Role = class {
  constructor(role) {
    this.role = role;
  }
};
let Role = _Role;
__publicField(Role, "Jump", new _Role("jump"));
__publicField(Role, "ShotCharge", new _Role("shotCharge"));
__publicField(Role, "ShotRelease", new _Role("shotRelease"));
__publicField(Role, "Enemy", new _Role("enemy"));
const _ScreenType = class {
  constructor(type) {
    this.type = type;
  }
};
let ScreenType = _ScreenType;
__publicField(ScreenType, "EnterName", new _ScreenType("enterName"));
__publicField(ScreenType, "RoleSelection", new _ScreenType("roleSelection"));
__publicField(ScreenType, "TriggerSelection", new _ScreenType("triggerSelection"));
__publicField(ScreenType, "Instruction", new _ScreenType("instruction"));
__publicField(ScreenType, "WaitingRoom", new _ScreenType("waitingRoom"));
__publicField(ScreenType, "Gameplay", new _ScreenType("gamePlay"));
__publicField(ScreenType, "Options", new _ScreenType("options"));
__publicField(ScreenType, "Impressum", new _ScreenType("impressum"));
__publicField(ScreenType, "LeaveConfirmation", new _ScreenType("leaveConfirmation"));
__publicField(ScreenType, "Disconnected", new _ScreenType("disconnected"));
var _imports_4 = "./assets/play.585357f9.svg";
var _imports_0$7 = "./assets/background_start.003b6737.png";
var _imports_1$4 = "./assets/background_default.f7e5fa83.png";
var PageBackground_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$d = {
  key: 0,
  id: "backgroundImage",
  src: _imports_0$7,
  alt: ""
};
const _hoisted_2$a = {
  key: 1,
  id: "backgroundImage",
  src: _imports_1$4,
  alt: ""
};
const _sfc_main$f = {
  props: {
    currentScreen: Object
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return unref(props).currentScreen == unref(ScreenType).EnterName ? (openBlock(), createElementBlock("img", _hoisted_1$d)) : (openBlock(), createElementBlock("img", _hoisted_2$a));
    };
  }
};
var _imports_0$6 = "./assets/arrow_left.306e92bb.svg";
var _imports_0$5 = "./assets/quit.da3a859b.svg";
var _imports_2$2 = "./assets/options.994df32a.svg";
var HeaderBar_vue_vue_type_style_index_0_lang = "";
const _hoisted_1$c = { id: "header" };
const _hoisted_2$9 = { class: "iconContainerLeft" };
const _hoisted_3$8 = { class: "iconContainerRight" };
const _sfc_main$e = {
  props: {
    screenType: Object
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("header", _hoisted_1$c, [
        createBaseVNode("div", _hoisted_2$9, [
          unref(props).screenType == unref(ScreenType).RoleSelection || unref(props).screenType == unref(ScreenType).TriggerSelection || unref(props).screenType == unref(ScreenType).Instruction || unref(props).screenType == unref(ScreenType).Impressum ? (openBlock(), createElementBlock("img", {
            key: 0,
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("handle_btn_back")),
            src: _imports_0$6,
            alt: ""
          })) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_3$8, [
          unref(props).screenType != unref(ScreenType).Gameplay ? (openBlock(), createElementBlock("img", {
            key: 0,
            src: _imports_0$5,
            alt: "",
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("handle_btn_leave"))
          })) : (openBlock(), createElementBlock("img", {
            key: 1,
            onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("handle_btn_options")),
            src: _imports_2$2,
            alt: ""
          }))
        ])
      ]);
    };
  }
};
var EnterName_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _withScopeId$7 = (n) => (pushScopeId("data-v-49732d75"), n = n(), popScopeId(), n);
const _hoisted_1$b = { class: "flexContainer" };
const _hoisted_2$8 = /* @__PURE__ */ _withScopeId$7(() => /* @__PURE__ */ createBaseVNode("h1", { id: "title" }, "Babushka Run", -1));
const _hoisted_3$7 = { id: "nameBar" };
const _sfc_main$d = {
  setup(__props) {
    let name = ref("");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$f, {
          currentScreen: unref(ScreenType).EnterName
        }, null, 8, ["currentScreen"]),
        createVNode(_sfc_main$e, {
          screenType: unref(ScreenType).EnterName,
          onHandle_btn_leave: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("handle_btn_leave"))
        }, null, 8, ["screenType"]),
        createBaseVNode("div", _hoisted_1$b, [
          _hoisted_2$8,
          createBaseVNode("div", _hoisted_3$7, [
            withDirectives(createBaseVNode("input", {
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(name) ? name.value = $event : name = $event),
              id: "inputName",
              type: "text",
              placeholder: "Enter Name"
            }, null, 512), [
              [vModelText, unref(name)]
            ]),
            createBaseVNode("img", {
              id: "btnStart",
              src: _imports_4,
              onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("handle_set_name", unref(name)))
            })
          ])
        ])
      ], 64);
    };
  }
};
var EnterName = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-49732d75"]]);
var _imports_0$4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAtCAYAAADsvzj/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAE82lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuYjBmOGJlOTAsIDIwMjEvMTIvMTUtMjE6MjU6MTUgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMy4yIChNYWNpbnRvc2gpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wNC0wM1QyMjoxNzozMSswMjowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDQtMDRUMTE6NDY6NTkrMDI6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDQtMDRUMTE6NDY6NTkrMDI6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmM4NGM3NmQwLWUwMjAtNDgzZC04YWZjLWUzOGI3YzllZmJjOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpjODRjNzZkMC1lMDIwLTQ4M2QtOGFmYy1lMzhiN2M5ZWZiYzgiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjODRjNzZkMC1lMDIwLTQ4M2QtOGFmYy1lMzhiN2M5ZWZiYzgiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmM4NGM3NmQwLWUwMjAtNDgzZC04YWZjLWUzOGI3YzllZmJjOCIgc3RFdnQ6d2hlbj0iMjAyMi0wNC0wM1QyMjoxNzozMSswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIzLjIgKE1hY2ludG9zaCkiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YeWEzAAAAzhJREFUaIHtmTFIG1EYx/+vSovV0VwGl+CQgCdUEsHNoWDA9DKVdigktKVboUNBO7ZCpwgdipmVuLXdEhTiUrsJ1ckIcXIp1DNjpCgp18F7j3eXl/Pu3bsaJH8IvHv33uX7ve97330vIZZl4Tbozk0boEoDkH7TAKTfdGtAhlU8ZFXT/Axz5PmJ3DxtEr7/2cY3KRuUgFwj4Yvq19YPAMBEbp7eJ6JxfhV1aHm+bXPlEh48MihUqDfzje2RXLnkaFMPyUoZyJJpursCrXCuXJLeH4AiEAqxZJoioC7Nriw7rqefvghtg/LQ4jLYX9H92ZVlaOPjwrmNrxvS3xvFHhnCVVgNNcfGfE04/LIOALj//bf0ho8CpAMAPATf/vm+BLPV6jVXOgUTleeRVU2zAKfhAJBqt7vGikJMf/JcGkS5R0ThRPu8PLP1etlvhSCUMo+sapplG0pS7TaWTBOvJicBLg2LPMPbAgjTuC8pAbFDioi8cTmiAzbM3T8NAD2BQoFI11quMGAQtuGoNKoAgKKeZyt1OaIjGY/hwr42Pr1hD9jJZi3YMIQQBF1gaRCvlSvqeQcA1eZRDQUYAIBkPMb6d7JZLNTr2MlmkclkAkMAirMWVVHPA64SZfOoxtqFKYOB3Du86l+o15lNMzMzgb8zqqKxJwTV8ekZAOBi2uAhpKUcxB1SbojClNE1p/b2M9+WCpH/cbBiohDJeAzHp2fMK8l4zAEjI6Ueuc4bVDwAvaZ9APDx4cvAXonsYOUnpHjjw0oZCO+Ndx8eO+6JIKj4NBwGLBKPmK0WK829IAB1XlEC4t4b62u7MFstFKYMNM87vp9Dk4CMlHnEbfD62i4AIDXqPzGG8U7o9Eu9kRod7oKhEM3zTuRAoUAohCh8eDAewidU4AOWdGh5Qbj7m+edLih6HWQPeUkKZC6xaPHG7Z1sk72T7Z6ryBtPP7TP7Z1Koyp13A1c/c4lFh2/1e6dbHuN8SUbhlQaVRT1PDvLBJFUGT+XWAw0nq56pVEFIcQCgHQ6DQBkf38fACv9mYLChM5aoo3rjnuRUQcHB0in01Ymk2EwYRTJweomdGv+sRqA9JsGIP2mfx21VRocc4y8AAAAAElFTkSuQmCC";
var _imports_1$3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAtCAYAAADydghMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE82lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuYjBmOGJlOTAsIDIwMjEvMTIvMTUtMjE6MjU6MTUgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMy4yIChNYWNpbnRvc2gpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wNC0wM1QyMjoxNzozMSswMjowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDQtMDRUMTE6NDc6MTQrMDI6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDQtMDRUMTE6NDc6MTQrMDI6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYwMTQ0YjdlLTcyNzgtNDcxMy04ZWE0LWIzMWMyMmNlMWRkZSIgeG1wTU06RG9jdW1lbnRJ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";
var _imports_2$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAtCAYAAADydghMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE82lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4xLWMwMDAgNzkuYjBmOGJlOTAsIDIwMjEvMTIvMTUtMjE6MjU6MTUgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMy4yIChNYWNpbnRvc2gpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wNC0wM1QyMjoxNzozMSswMjowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDQtMDRUMTE6NDc6MjErMDI6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDQtMDRUMTE6NDc6MjErMDI6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjExMWI2ZWEwLWJkYWMtNDE0Zi1iMzJhLTA0NTg4ZjFiNzRjZCIgeG1wTU06RG9jdW1lbnRJ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";
var _imports_3$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABGCAYAAABbnhMrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFG0lEQVR4nO2cT4sTSRjGn8pkZCTRBUVnwMGDCeJJUPCDeNhl/bMHZz/B3jMMId73sicR5uIQT/sFvMh8gARykiW5CO5lQVnWoGhM9jBdbXXlrU5311t/ovOc0p1Od/Wvn/et6reKiMVigVNVVy10A9ZdpwAtVec4ybP+85XH3P3xJ33XolE3Pj9h2SRvYgGYI5lghbYNAJjO5gAAAqR6XNQwXQJcGD4vSYLsdHsAgN97B6bzRAfTZQ5Mb5YI3yVJeADw237XdFh0QwbXnYgoAg8AHh/sZ7ZzIEYlwTEOlCFokPUFDJ1NFOHs2oEsITedzamHFEU4r9U4MEaILgE6ubnYILoC6PSmVuRcr3IBMIQjgrkwSA58s7mBN5sbVueIxYXcbyKFnHDl8xfmy6bX9j60WateWFcMHQqnA60aPxmP08/Hx8d4tLdn0w5vTmQBOBmP0Wq30Uzy2vuCIapCkyoLbzqbm6o5XiByOTDjvubmRi5EEzgAefCmABrE/n+ns/kPObVFp2J5Fx69+is9SavdJo/JgwbkgiuiSaNeaxH7nbuQCyBQMgdWzHOfcBI1pN0IF64VQKAYxEx12uRYSmrNUC9/AXjdqNeuGq7lTNwAVRkryaPhADdv3U6PKQKx0+3plWpyMK250DlAlyX9pcaPhgN182+m63wEsGX4znlv7KXrGg0HGXgP7/0MKD0q1cEo+kC5D0jdZoLnRewO1FxG6sXL4zvbOzvnC57yLLAcrjJUG/UaprP5fwDOyeN8DmlCDJ4W2zs7f+o7TS7sdHtUh6FXqc/p36nXq9rQImJxYBHXIXsju9QB8o2mjKTjQlVnfDhwAc0FCfB31MGT8fh12Qsk8N5WaJu1Qk4qmSxzFcAMMIevQRcqtsNKIedELhr2/wOgXhLeknyFdLA5kSSMqbC7ZAuvapuqKGhBdTQcLIXd4VE/hae+uuXJdJwPF0ZZkZZAirgwces3NalU5mZyX7MkSMphnW5P7WSM53E9JnS9PtAk8oYPj/oATpwn4ej5UMLce3gf11pUCdCvXAAUMD/pQi/2VCciwf36y4PZpcuX681m06aNbGIpZxFLfFcCTMpZS8dKF0pJFz56cA8APrXa7TNV2uiqzBVlJ6JKyX+ft7a2nMzh2MgVQOoJU/vK3MjbK7u70T1wH0t8BUqETBKq+r4vALZtGuNqTOgqB5JS8p6U8eKHR/0MzLJVGpOUXMiSB72FRBl4AO1EDnE70QtAAl4MYulIokvKPsTpQpZhQaQOyxXX3EkoB5YOH33ORL4Lh1aod2ErOaoXVlIIgJWT92Q8ztQLLbVew5hvVb4BWg0dGN3Hpu/VgWtZjXHqvlA9crQOzFvtQMEKFdrRAjQNzvOq1QXFutyNpRpTVOpa6sz+rwsuc6XOmQD540FqLuXxwT4a9ZrI+a+G0vINEEhyYVFoumQutBhMC4AHHhAmhAWwHKJFVngdHvUFAGGa7lwVyp1uj321qlcHAicuHA0H6UUpF+a4UyRhvABAhqhpW/4e4HMfEMCBN29cBxQXqs6Tn1V4yvcCSP8SRQDZiXd9OYgMc7lPuo979WrIXlhIp+ng5PaKPJmBKD/7Hs4EAZgsMgcSiLokVN2hiXvVBedkTqNcCPC7DwiQA1Ulk1GZfJgBpm0DEAp8+d8ypdbiUKv9bRQUIAA86z8v2wAdYunfc0IM+iZSAV5GFeCxKxjAkPD+ePLU5tIZBQ/hdVe0xYR10SlAS/0PqmBDCD2yIvMAAAAASUVORK5CYII=";
var RoleSelectionCard_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$a = { class: "imgWrapper" };
const _hoisted_2$7 = {
  key: 0,
  src: _imports_0$4,
  alt: ""
};
const _hoisted_3$6 = {
  key: 1,
  src: _imports_1$3,
  alt: ""
};
const _hoisted_4$5 = {
  key: 2,
  src: _imports_2$1,
  alt: ""
};
const _hoisted_5$3 = {
  key: 3,
  src: _imports_3$1,
  alt: ""
};
const _hoisted_6$1 = { class: "roleDescription" };
const _sfc_main$c = {
  props: {
    role: Object
  },
  setup(__props) {
    const props = __props;
    let description = "";
    let color = "";
    switch (props.role) {
      case Role.Jump:
        description = "Jump";
        color = "#00FFF0";
        break;
      case Role.ShotCharge:
        description = "Charge Shot";
        color = "#6BC203";
        break;
      case Role.ShotRelease:
        description = "Release Shot";
        color = "#FF9900";
        break;
      case Role.Enemy:
        description = "Enemy";
        color = "#DB00FF";
        break;
      default:
        console.log("Role is misconfigured...");
        break;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "selectionCard",
        style: normalizeStyle({ borderColor: unref(color) })
      }, [
        createBaseVNode("div", _hoisted_1$a, [
          unref(props).role == unref(Role).Jump ? (openBlock(), createElementBlock("img", _hoisted_2$7)) : unref(props).role == unref(Role).ShotCharge ? (openBlock(), createElementBlock("img", _hoisted_3$6)) : unref(props).role == unref(Role).ShotRelease ? (openBlock(), createElementBlock("img", _hoisted_4$5)) : unref(props).role == unref(Role).Enemy ? (openBlock(), createElementBlock("img", _hoisted_5$3)) : createCommentVNode("", true)
        ]),
        createBaseVNode("hr", {
          style: normalizeStyle({ borderColor: unref(color) })
        }, null, 4),
        createBaseVNode("div", _hoisted_6$1, toDisplayString(unref(description)), 1)
      ], 4);
    };
  }
};
var RoleSelectionCard = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-c15359ac"]]);
var RoleSelection_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$6 = (n) => (pushScopeId("data-v-736a7854"), n = n(), popScopeId(), n);
const _hoisted_1$9 = { id: "playerName" };
const _hoisted_2$6 = /* @__PURE__ */ _withScopeId$6(() => /* @__PURE__ */ createBaseVNode("h2", null, "Choose your role:", -1));
const _hoisted_3$5 = { class: "flexContainer" };
const _hoisted_4$4 = { id: "selectionGrid" };
const _sfc_main$b = {
  props: {
    playerInfo: Object,
    roleState: Object
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$f),
        createVNode(_sfc_main$e, {
          screenType: unref(ScreenType).RoleSelection,
          onHandle_btn_back: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("navigate_to", unref(ScreenType).EnterName)),
          onHandle_btn_leave: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("handle_btn_leave"))
        }, null, 8, ["screenType"]),
        createBaseVNode("h1", _hoisted_1$9, toDisplayString(__props.playerInfo.name), 1),
        _hoisted_2$6,
        createBaseVNode("div", _hoisted_3$5, [
          createBaseVNode("div", _hoisted_4$4, [
            createVNode(RoleSelectionCard, {
              role: unref(Role).Jump,
              class: normalizeClass({ selected: unref(props).roleState.jump.selected }),
              onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("handle_select_role", unref(Role).Jump))
            }, null, 8, ["role", "class"]),
            createVNode(RoleSelectionCard, {
              role: unref(Role).ShotCharge,
              class: normalizeClass({ selected: unref(props).roleState.shotCharge.selected }),
              onClick: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("handle_select_role", unref(Role).ShotCharge))
            }, null, 8, ["role", "class"]),
            createVNode(RoleSelectionCard, {
              role: unref(Role).ShotRelease,
              class: normalizeClass({ selected: unref(props).roleState.shotRelease.selected }),
              onClick: _cache[4] || (_cache[4] = ($event) => _ctx.$emit("handle_select_role", unref(Role).ShotRelease))
            }, null, 8, ["role", "class"]),
            createVNode(RoleSelectionCard, {
              role: unref(Role).Enemy,
              class: normalizeClass({ selected: true })
            }, null, 8, ["role"])
          ])
        ])
      ], 64);
    };
  }
};
var RoleSelection = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-736a7854"]]);
var ColorBorder_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$a = {
  props: {
    role: Object
  },
  setup(__props) {
    const props = __props;
    let color = "";
    switch (props.role) {
      case Role.Jump:
        color = "#00FFF0";
        break;
      case Role.ShotCharge:
        color = "#6BC203";
        break;
      case Role.ShotRelease:
        color = "#FF9900";
        break;
      case Role.Enemy:
        color = "#DB00FF";
        break;
      default:
        console.log("Role is misconfigured...");
        break;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: "colorBorder",
        style: normalizeStyle({ borderColor: unref(color) })
      }, null, 4);
    };
  }
};
var ColorBorder = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-07135d60"]]);
var TriggerSelectionCard_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$8 = { id: "triggerSelectionCard" };
const _hoisted_2$5 = {
  key: 0,
  class: "icon shake"
};
const _hoisted_3$4 = {
  key: 1,
  class: "icon touch"
};
const _hoisted_4$3 = {
  key: 2,
  class: "icon voice"
};
const _sfc_main$9 = {
  props: {
    triggerOption: Object
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$8, [
        unref(props).triggerOption == unref(TriggerOption).Shake ? (openBlock(), createElementBlock("div", _hoisted_2$5)) : unref(props).triggerOption == unref(TriggerOption).Touch ? (openBlock(), createElementBlock("div", _hoisted_3$4)) : unref(props).triggerOption == unref(TriggerOption).Voice ? (openBlock(), createElementBlock("div", _hoisted_4$3)) : createCommentVNode("", true)
      ]);
    };
  }
};
var TriggerSelectionCard = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-0c62a624"]]);
var TriggerSelection_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$5 = (n) => (pushScopeId("data-v-9e3dd6fe"), n = n(), popScopeId(), n);
const _hoisted_1$7 = /* @__PURE__ */ _withScopeId$5(() => /* @__PURE__ */ createBaseVNode("h2", null, "Choose your playstyle", -1));
const _hoisted_2$4 = { id: "triggerSelectionGrid" };
const _sfc_main$8 = {
  props: {
    playerInfo: Object
  },
  emits: [
    "navigate_to",
    "release_role",
    "handle_trigger_selection"
  ],
  setup(__props, { emit }) {
    let handle_btn_back = () => {
      emit("release_role");
      emit("navigate_to", ScreenType.RoleSelection);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$f),
        createVNode(ColorBorder, {
          role: __props.playerInfo.role
        }, null, 8, ["role"]),
        createVNode(_sfc_main$e, {
          screenType: unref(ScreenType).TriggerSelection,
          onHandle_btn_back: unref(handle_btn_back),
          onHandle_btn_leave: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("handle_btn_leave"))
        }, null, 8, ["screenType", "onHandle_btn_back"]),
        createBaseVNode("h1", null, toDisplayString(__props.playerInfo.name), 1),
        _hoisted_1$7,
        createBaseVNode("div", _hoisted_2$4, [
          createVNode(TriggerSelectionCard, {
            triggerOption: unref(TriggerOption).Shake,
            class: "disabled"
          }, null, 8, ["triggerOption"]),
          createVNode(TriggerSelectionCard, {
            triggerOption: unref(TriggerOption).Touch,
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("handle_trigger_selection", unref(TriggerOption).Touch))
          }, null, 8, ["triggerOption"]),
          createVNode(TriggerSelectionCard, {
            triggerOption: unref(TriggerOption).Voice,
            class: "disabled"
          }, null, 8, ["triggerOption"])
        ])
      ], 64);
    };
  }
};
var TriggerSelection = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-9e3dd6fe"]]);
var _imports_0$3 = "./assets/ready.b6485a90.svg";
var _imports_1$2 = "./assets/unready.8176aec6.svg";
var ControlElement_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$6 = {
  key: 0,
  class: "icon shake"
};
const _hoisted_2$3 = {
  key: 1,
  class: "icon touch"
};
const _hoisted_3$3 = {
  key: 2,
  class: "icon voice"
};
const _sfc_main$7 = {
  props: {
    triggerOption: Object,
    permissionGranted: Object
  },
  emits: ["trigger"],
  setup(__props, { emit }) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: "controlElement",
        class: normalizeClass({ background: unref(props).triggerOption == unref(TriggerOption).Touch })
      }, [
        unref(props).triggerOption == unref(TriggerOption).Shake ? (openBlock(), createElementBlock("div", _hoisted_1$6)) : unref(props).triggerOption == unref(TriggerOption).Touch ? (openBlock(), createElementBlock("div", _hoisted_2$3)) : unref(props).triggerOption == unref(TriggerOption).Voice ? (openBlock(), createElementBlock("div", _hoisted_3$3)) : createCommentVNode("", true)
      ], 2);
    };
  }
};
var ControlElement = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-465e4648"]]);
var Instruction_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$4 = (n) => (pushScopeId("data-v-96822f6a"), n = n(), popScopeId(), n);
const _hoisted_1$5 = { class: "flexContainer" };
const _hoisted_2$2 = { class: "top" };
const _hoisted_3$2 = /* @__PURE__ */ _withScopeId$4(() => /* @__PURE__ */ createBaseVNode("h1", null, "Instruction", -1));
const _hoisted_4$2 = {
  key: 2,
  id: "startingOverlay"
};
const _hoisted_5$2 = { id: "countdown" };
const _sfc_main$6 = {
  props: {
    playerInfo: Object,
    starting: Object,
    permissionGranted: Object
  },
  emits: [
    "handle_ready_change",
    "navigate_to",
    "release_trigger",
    "handle_trigger"
  ],
  setup(__props, { emit }) {
    const props = __props;
    let ready = ref(false);
    let counter = ref(3);
    let description_1 = "";
    let description_2 = "";
    let readyText = ref("Tap to ready up");
    switch (props.playerInfo.triggerOption) {
      case TriggerOption.Shake:
        switch (props.playerInfo.role) {
          case Role.Jump:
            description_1 = "Shake your phone to jump.";
            description_2 = "Shake again to doublejump.";
            break;
          case Role.ShotCharge:
            description_1 = "Shake your phone to charge a shot.";
            description_2 = "Consumes a snowflake.";
            break;
          case Role.ShotRelease:
            description_1 = "Shake your phone to release the shot.";
            description_2 = "Only if a shot is charging.";
            break;
          case Role.Enemy:
            description_1 = "This functionality is not supported yet.";
            description_2 = ":(";
            break;
        }
        break;
      case TriggerOption.Touch:
        switch (props.playerInfo.role) {
          case Role.Jump:
            description_1 = "Tap to jump.";
            description_2 = "Tap again to doublejump.";
            break;
          case Role.ShotCharge:
            description_1 = "Tap to charge a shot.";
            description_2 = "Consumes a snowflake.";
            break;
          case Role.ShotRelease:
            description_1 = "Tap to release the shot.";
            description_2 = "Only if a shot is charging.";
            break;
          case Role.Enemy:
            description_1 = "This functionality is not supported yet.";
            description_2 = ":(";
            break;
        }
        break;
      case TriggerOption.Voice:
        description_1 = "This functionality is not supported yet.";
        description_2 = ":(";
        break;
      default:
        console.log("Trigger option misconfigured");
        break;
    }
    switch (props.playerInfo.role) {
      case Role.Jump:
        break;
      case Role.ChargeShot:
        break;
      case Role.ReleaseShot:
        break;
      case Role.Enemy:
        break;
      default:
        console.log("Role is misconfigured...");
        break;
    }
    let toggleReady = () => {
      ready.value = !ready.value;
      if (ready.value) {
        readyText.value = "Tap to unready";
      } else {
        readyText.value = "Tap to ready up";
      }
      emit("handle_ready_change", ready.value);
    };
    let handle_btn_back = () => {
      emit("navigate_to", ScreenType.TriggerSelection);
      emit("release_trigger");
    };
    watch(() => props.starting, async (newValue, oldValue) => {
      console.log("Watched props.srating. New value is: " + newValue);
      if (newValue == true) {
        countDown();
      }
      if (newValue == false) {
        ready.value = false;
        counter.value = 3;
      }
    });
    let countDown = () => {
      if (counter.value > 0) {
        setTimeout(() => {
          counter.value--;
          countDown();
        }, 1e3);
      }
    };
    let handle_control_element = () => {
      if (props.playerInfo.triggerOption == TriggerOption.Touch) {
        emit("handle_trigger");
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$f),
        createVNode(ColorBorder, {
          role: unref(props).playerInfo.role
        }, null, 8, ["role"]),
        createVNode(_sfc_main$e, {
          screenType: unref(ScreenType).Instruction,
          onHandle_btn_back: unref(handle_btn_back),
          onHandle_btn_leave: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("handle_btn_leave"))
        }, null, 8, ["screenType", "onHandle_btn_back"]),
        createBaseVNode("div", _hoisted_1$5, [
          createBaseVNode("div", _hoisted_2$2, [
            _hoisted_3$2,
            createBaseVNode("h3", null, toDisplayString(unref(description_1)), 1),
            createBaseVNode("h3", null, toDisplayString(unref(description_2)), 1)
          ]),
          createVNode(ControlElement, {
            permissionGranted: unref(props).permissionGranted,
            onClick: unref(handle_control_element),
            onTrigger: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("handle_trigger")),
            triggerOption: unref(props).playerInfo.triggerOption
          }, null, 8, ["permissionGranted", "onClick", "triggerOption"]),
          createBaseVNode("div", null, [
            !unref(ready) ? (openBlock(), createElementBlock("img", {
              key: 0,
              id: "btnReady",
              src: _imports_0$3,
              onClick: _cache[2] || (_cache[2] = (...args) => unref(toggleReady) && unref(toggleReady)(...args)),
              alt: ""
            })) : (openBlock(), createElementBlock("img", {
              key: 1,
              id: "btnReady",
              src: _imports_1$2,
              onClick: _cache[3] || (_cache[3] = (...args) => unref(toggleReady) && unref(toggleReady)(...args)),
              alt: ""
            })),
            createBaseVNode("h3", null, toDisplayString(unref(readyText)), 1),
            createBaseVNode("h3", {
              class: normalizeClass(["heartbeat", { hide: !unref(ready) }])
            }, " Waiting for other players... ", 2),
            __props.starting ? (openBlock(), createElementBlock("div", _hoisted_4$2, [
              createBaseVNode("h1", _hoisted_5$2, toDisplayString(unref(counter)), 1)
            ])) : createCommentVNode("", true)
          ])
        ])
      ], 64);
    };
  }
};
var Instruction = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-96822f6a"]]);
var _imports_3 = "./assets/refresh.c01e1f53.svg";
var Gameplay_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$3 = (n) => (pushScopeId("data-v-58441ee2"), n = n(), popScopeId(), n);
const _hoisted_1$4 = {
  key: 0,
  id: "pausedOverlay"
};
const _hoisted_2$1 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createBaseVNode("h1", null, "Game paused...", -1));
const _hoisted_3$1 = [
  _hoisted_2$1
];
const _hoisted_4$1 = {
  key: 1,
  id: "pausedOverlay"
};
const _hoisted_5$1 = { class: "flexContainer" };
const _sfc_main$5 = {
  props: {
    playerInfo: Object,
    paused: Object,
    restarting: Object,
    permissionGranted: Object
  },
  emits: ["handle_trigger"],
  setup(__props, { emit }) {
    const props = __props;
    let description_1 = "";
    let description_2 = "";
    switch (props.playerInfo.triggerOption) {
      case TriggerOption.Shake:
        description_1 = "Shake your phone to jump.";
        description_2 = "Shake again to doublejump.";
        break;
      case TriggerOption.Touch:
        description_1 = "Tap to jump.";
        description_2 = "Tap again to doublejump.";
        break;
      case TriggerOption.Voice:
        description_1 = "Say 'jump' to jump.";
        description_2 = "Say 'jump' again to doublejump.";
        break;
      default:
        console.log("Trigger option misconfigured");
        break;
    }
    switch (props.playerInfo.role) {
      case Role.Jump:
        break;
      case Role.ChargeShot:
        break;
      case Role.ReleaseShot:
        break;
      case Role.Enemy:
        break;
      default:
        console.log("Role is misconfigured...");
        break;
    }
    let handle_control_element = () => {
      if (props.playerInfo.triggerOption == TriggerOption.Touch) {
        emit("handle_trigger");
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$f),
        createVNode(ColorBorder, {
          role: unref(props).playerInfo.role
        }, null, 8, ["role"]),
        unref(props).paused ? (openBlock(), createElementBlock("div", _hoisted_1$4, _hoisted_3$1)) : createCommentVNode("", true),
        unref(props).restarting ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
          createBaseVNode("img", {
            class: "icon",
            src: _imports_0$5,
            alt: "",
            onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("quit_to_lobby"))
          }),
          createBaseVNode("img", {
            class: "icon",
            src: _imports_3,
            alt: "",
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("restart_level"))
          })
        ])) : createCommentVNode("", true),
        createVNode(_sfc_main$e, {
          screenType: unref(ScreenType).Gameplay,
          onHandle_btn_options: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("show_options"))
        }, null, 8, ["screenType"]),
        createBaseVNode("div", _hoisted_5$1, [
          createBaseVNode("div", null, [
            createBaseVNode("h1", null, toDisplayString(unref(props).playerInfo.name), 1),
            createBaseVNode("h3", null, toDisplayString(unref(description_1)), 1),
            createBaseVNode("h3", null, toDisplayString(unref(description_2)), 1)
          ]),
          createVNode(ControlElement, {
            onClick: unref(handle_control_element),
            onTrigger: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("handle_trigger")),
            triggerOption: unref(props).playerInfo.triggerOption,
            permissionGranted: unref(props).permissionGranted
          }, null, 8, ["onClick", "triggerOption", "permissionGranted"])
        ])
      ], 64);
    };
  }
};
var Gameplay = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-58441ee2"]]);
var _imports_0$2 = "./assets/impressum.790ad1b6.svg";
var _imports_1$1 = "./assets/sound_unmuted.552d3431.svg";
var _imports_2 = "./assets/sound_muted.a2b2a187.svg";
var Options_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$3 = { id: "optionsContainer" };
const _sfc_main$4 = {
  props: {
    muted: Object
  },
  emits: ["navigate_to", "hide_options", "restart_level"],
  setup(__props, { emit }) {
    const props = __props;
    let handleBtnResume = () => {
      emit("navigate_to", ScreenType.Gameplay);
      emit("hide_options");
    };
    let handleBtnRestart = () => {
      emit("navigate_to", ScreenType.Gameplay);
      emit("restart_level");
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$f),
        createVNode(_sfc_main$e, {
          screenType: unref(ScreenType).Options,
          onHandle_btn_leave: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("handle_btn_leave"))
        }, null, 8, ["screenType"]),
        createBaseVNode("div", _hoisted_1$3, [
          createBaseVNode("img", {
            src: _imports_0$2,
            alt: "",
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("navigate_to", unref(ScreenType).Impressum))
          }),
          !unref(props).muted ? (openBlock(), createElementBlock("img", {
            key: 0,
            src: _imports_1$1,
            alt: "",
            onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("mute_sound"))
          })) : (openBlock(), createElementBlock("img", {
            key: 1,
            src: _imports_2,
            alt: "",
            onClick: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("unmute_sound"))
          })),
          createBaseVNode("img", {
            src: _imports_3,
            alt: "",
            onClick: _cache[4] || (_cache[4] = (...args) => unref(handleBtnRestart) && unref(handleBtnRestart)(...args))
          }),
          createBaseVNode("img", {
            src: _imports_4,
            alt: "",
            onClick: _cache[5] || (_cache[5] = (...args) => unref(handleBtnResume) && unref(handleBtnResume)(...args))
          })
        ])
      ], 64);
    };
  }
};
var Options = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-2d30f3be"]]);
var _imports_0$1 = "./assets/rick_astley.380c29cc.png";
var Impressum_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$2 = (n) => (pushScopeId("data-v-b4b66bd0"), n = n(), popScopeId(), n);
const _hoisted_1$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("div", { id: "impressumContainer" }, [
  /* @__PURE__ */ createBaseVNode("h1", null, "Created by:"),
  /* @__PURE__ */ createBaseVNode("div", null, [
    /* @__PURE__ */ createBaseVNode("h3", null, "Vanessa Buchmann"),
    /* @__PURE__ */ createBaseVNode("h3", null, "Nicole B\xE4nninger"),
    /* @__PURE__ */ createBaseVNode("h3", null, "Michael Brechb\xFChl"),
    /* @__PURE__ */ createBaseVNode("h3", null, "Nathalie Schwartz"),
    /* @__PURE__ */ createBaseVNode("h3", null, "Nicolas Vondru")
  ]),
  /* @__PURE__ */ createBaseVNode("div", { class: "imgWrapper" }, [
    /* @__PURE__ */ createBaseVNode("img", {
      src: _imports_0$1,
      alt: ""
    })
  ])
], -1));
const _sfc_main$3 = {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$f),
        createVNode(_sfc_main$e, {
          screenType: unref(ScreenType).Impressum,
          onHandle_btn_back: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("navigate_to", unref(ScreenType).Options)),
          onHandle_btn_leave: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("handle_btn_leave"))
        }, null, 8, ["screenType"]),
        _hoisted_1$2
      ], 64);
    };
  }
};
var Impressum = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-b4b66bd0"]]);
var _imports_0 = "./assets/tick.f821d064.svg";
var _imports_1 = "./assets/quit_x.55f14bfb.svg";
var LeaveConfirmation_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$1 = (n) => (pushScopeId("data-v-1472cd1a"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { id: "leaveConfirmationContainer" };
const _hoisted_2 = { id: "innerContainer" };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("h1", null, "Exit to lobby?", -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("h3", null, "The game will terminate for all players", -1));
const _hoisted_6 = [
  _hoisted_4,
  _hoisted_5
];
const _hoisted_7 = { key: 1 };
const _hoisted_8 = { class: "icons" };
const _hoisted_9 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0,
  alt: ""
}, null, -1));
const _hoisted_10 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("h3", null, "Yes", -1));
const _hoisted_11 = [
  _hoisted_9,
  _hoisted_10
];
const _hoisted_12 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_1,
  alt: ""
}, null, -1));
const _hoisted_13 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("h3", null, "No", -1));
const _hoisted_14 = [
  _hoisted_12,
  _hoisted_13
];
const _sfc_main$2 = {
  props: {
    lastScreen: Object
  },
  emits: ["confirm_quit_to_lobby", "confirm_leave_game"],
  setup(__props, { emit }) {
    const props = __props;
    let handleConfirm = () => {
      if (props.lastScreen.type == ScreenType.Options.type) {
        emit("confirm_quit_to_lobby");
      } else {
        emit("confirm_leave_game");
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$f),
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("div", _hoisted_2, [
            unref(props).lastScreen.type == unref(ScreenType).Options.type ? (openBlock(), createElementBlock("div", _hoisted_3, _hoisted_6)) : (openBlock(), createElementBlock("h1", _hoisted_7, "Do you really want to LEAVE?")),
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("div", {
                onClick: _cache[0] || (_cache[0] = (...args) => unref(handleConfirm) && unref(handleConfirm)(...args))
              }, _hoisted_11),
              createBaseVNode("div", {
                onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("abort_leave_game"))
              }, _hoisted_14)
            ])
          ])
        ])
      ], 64);
    };
  }
};
var LeaveConfirmation = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-1472cd1a"]]);
var Disconnected_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-bcb08dd4"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { id: "container" }, [
  /* @__PURE__ */ createBaseVNode("div", { id: "innerContainer" }, [
    /* @__PURE__ */ createBaseVNode("h1", null, "You left the game."),
    /* @__PURE__ */ createBaseVNode("h2", null, "To play again, scan a game QR-code.")
  ])
], -1));
const _sfc_main$1 = {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_sfc_main$f),
        _hoisted_1
      ], 64);
    };
  }
};
var Disconnected = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bcb08dd4"]]);
var App_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  setup(__props) {
    let currentScreen = ref(ScreenType.EnterName);
    let lastScreen = ref(currentScreen.value);
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let url = urlParams.get("url");
    let roomId = urlParams.get("id");
    console.log("Retrieved socket.io URL: " + url);
    console.log("Retrieved Room ID: " + roomId);
    let playerInfo = {
      name: "",
      role: new Role(),
      triggerOption: new TriggerOption(),
      readyState: false
    };
    let roleState = ref([]);
    let starting = ref(false);
    let paused = ref(false);
    let muted = ref(false);
    let restarting = ref(false);
    let permissionGranted = ref(true);
    let setPlayerName = (name) => {
      playerInfo.name = name;
      socket.emit("set name", name);
      setCurrentScreen(ScreenType.RoleSelection);
    };
    let setPlayerRole = (role) => {
      playerInfo.role = role;
      socket.emit("role selected", playerInfo);
      setCurrentScreen(ScreenType.TriggerSelection);
    };
    let setPlayerTriggerOption = (triggerOption) => {
      playerInfo.triggerOption = triggerOption;
      if (triggerOption == TriggerOption.Shake) {
        permissionGranted.value = true;
      }
      socket.emit("trigger option selected", playerInfo);
      setCurrentScreen(ScreenType.Instruction);
    };
    let setPlayerReadyState = (readyState) => {
      playerInfo.readyState = readyState;
      socket.emit("update ready state", playerInfo);
    };
    let setCurrentScreen = (screen) => {
      lastScreen.value = currentScreen.value;
      console.log("Last screen was: " + lastScreen.value.type);
      console.log("Setting screen: " + screen.type);
      currentScreen.value = screen;
    };
    let showOptions = () => {
      socket.emit("options opened");
      setCurrentScreen(ScreenType.Options);
    };
    let hideOptions = () => {
      socket.emit("options closed");
    };
    let leaveGame = () => {
      setCurrentScreen(ScreenType.Disconnected);
      socket.disconnect();
    };
    let muteSound = () => {
      socket.emit("mute sound");
    };
    let unmuteSound = () => {
      socket.emit("unmute sound");
    };
    let restartLevel = () => {
      socket.emit("restart level");
    };
    let requestQuitToLobby = () => {
      socket.emit("request quit to lobby");
    };
    let requestRoleState = () => {
      socket.emit("request role state");
    };
    let releaseRole = () => {
      socket.emit("release role");
    };
    let releaseTrigger = () => {
      socket.emit("release trigger");
      if (playerInfo.readyState == true) {
        setPlayerReadyState(false);
      }
    };
    let trigger = () => {
      console.log("Emitting trigger: " + playerInfo.role.role);
      socket.emit(playerInfo.role.role);
    };
    let socket = io(url || "10.155.98.108:5501");
    socket.on("connection success", (response) => {
      console.log(response);
      socket.emit("join room", roomId || "C8BVDtezmlrnUYFMAAAJ");
      requestRoleState();
    });
    socket.on("disconnect", () => {
      setCurrentScreen(ScreenType.Disconnected);
      console.log("Disconnected from the server");
    });
    socket.on("update role state", (states) => {
      states.forEach((state) => {
        roleState.value[state.role] = {
          selected: state.selected,
          playerName: state.playerName
        };
      });
      console.log("updated role states");
    });
    socket.on("start game", () => {
      starting.value = true;
      setTimeout(() => {
        setCurrentScreen(ScreenType.Gameplay);
      }, 3e3);
    });
    socket.on("reset ready state", () => {
      starting.value = false;
      playerInfo.readyState = false;
      playerInfo.triggerOption = new TriggerOption();
      playerInfo.role = new Role();
      requestRoleState();
    });
    socket.on("show paused overlay", () => {
      paused.value = true;
    });
    socket.on("hide paused overlay", () => {
      paused.value = false;
    });
    socket.on("set muted", () => {
      muted.value = true;
    });
    socket.on("set unmuted", () => {
      muted.value = false;
    });
    socket.on("show restart overlay", () => {
      restarting.value = true;
    });
    socket.on("hide restart overlay", () => {
      restarting.value = false;
    });
    socket.on("quit to lobby", () => {
      restarting.value = false;
      starting.value = false;
      setCurrentScreen(ScreenType.RoleSelection);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        unref(currentScreen).type == unref(ScreenType).EnterName.type ? (openBlock(), createBlock(EnterName, {
          key: 0,
          onHandle_set_name: unref(setPlayerName),
          onHandle_btn_leave: _cache[0] || (_cache[0] = ($event) => unref(setCurrentScreen)(unref(ScreenType).LeaveConfirmation))
        }, null, 8, ["onHandle_set_name"])) : createCommentVNode("", true),
        unref(currentScreen).type == unref(ScreenType).RoleSelection.type ? (openBlock(), createBlock(RoleSelection, {
          key: 1,
          playerInfo: unref(playerInfo),
          roleState: unref(roleState),
          onNavigate_to: unref(setCurrentScreen),
          onHandle_select_role: unref(setPlayerRole),
          onHandle_btn_leave: _cache[1] || (_cache[1] = ($event) => unref(setCurrentScreen)(unref(ScreenType).LeaveConfirmation))
        }, null, 8, ["playerInfo", "roleState", "onNavigate_to", "onHandle_select_role"])) : createCommentVNode("", true),
        unref(currentScreen).type == unref(ScreenType).TriggerSelection.type ? (openBlock(), createBlock(TriggerSelection, {
          key: 2,
          playerInfo: unref(playerInfo),
          onNavigate_to: unref(setCurrentScreen),
          onRelease_role: unref(releaseRole),
          onHandle_trigger_selection: unref(setPlayerTriggerOption),
          onHandle_btn_leave: _cache[2] || (_cache[2] = ($event) => unref(setCurrentScreen)(unref(ScreenType).LeaveConfirmation))
        }, null, 8, ["playerInfo", "onNavigate_to", "onRelease_role", "onHandle_trigger_selection"])) : createCommentVNode("", true),
        unref(currentScreen).type == unref(ScreenType).Instruction.type ? (openBlock(), createBlock(Instruction, {
          key: 3,
          playerInfo: unref(playerInfo),
          starting: unref(starting),
          permissionGranted: unref(permissionGranted),
          onNavigate_to: unref(setCurrentScreen),
          onRelease_trigger: unref(releaseTrigger),
          onHandle_ready_change: unref(setPlayerReadyState),
          onHandle_btn_leave: _cache[3] || (_cache[3] = ($event) => unref(setCurrentScreen)(unref(ScreenType).LeaveConfirmation)),
          onHandle_trigger: unref(trigger)
        }, null, 8, ["playerInfo", "starting", "permissionGranted", "onNavigate_to", "onRelease_trigger", "onHandle_ready_change", "onHandle_trigger"])) : createCommentVNode("", true),
        unref(currentScreen).type == unref(ScreenType).Gameplay.type ? (openBlock(), createBlock(Gameplay, {
          key: 4,
          playerInfo: unref(playerInfo),
          paused: unref(paused),
          restarting: unref(restarting),
          permissionGranted: unref(permissionGranted),
          onShow_options: unref(showOptions),
          onHandle_trigger: unref(trigger),
          onRestart_level: unref(restartLevel),
          onQuit_to_lobby: unref(requestQuitToLobby)
        }, null, 8, ["playerInfo", "paused", "restarting", "permissionGranted", "onShow_options", "onHandle_trigger", "onRestart_level", "onQuit_to_lobby"])) : createCommentVNode("", true),
        unref(currentScreen).type == unref(ScreenType).Options.type ? (openBlock(), createBlock(Options, {
          key: 5,
          muted: unref(muted),
          onNavigate_to: unref(setCurrentScreen),
          onHide_options: unref(hideOptions),
          onHandle_btn_leave: _cache[4] || (_cache[4] = ($event) => unref(setCurrentScreen)(unref(ScreenType).LeaveConfirmation)),
          onMute_sound: unref(muteSound),
          onUnmute_sound: unref(unmuteSound),
          onRestart_level: unref(restartLevel)
        }, null, 8, ["muted", "onNavigate_to", "onHide_options", "onMute_sound", "onUnmute_sound", "onRestart_level"])) : createCommentVNode("", true),
        unref(currentScreen).type == unref(ScreenType).Impressum.type ? (openBlock(), createBlock(Impressum, {
          key: 6,
          onNavigate_to: unref(setCurrentScreen),
          onHandle_btn_leave: _cache[5] || (_cache[5] = ($event) => unref(setCurrentScreen)(unref(ScreenType).LeaveConfirmation))
        }, null, 8, ["onNavigate_to"])) : createCommentVNode("", true),
        unref(currentScreen).type == unref(ScreenType).LeaveConfirmation.type ? (openBlock(), createBlock(LeaveConfirmation, {
          key: 7,
          lastScreen: unref(lastScreen),
          onConfirm_leave_game: unref(leaveGame),
          onAbort_leave_game: _cache[6] || (_cache[6] = ($event) => unref(setCurrentScreen)(unref(lastScreen))),
          onConfirm_quit_to_lobby: unref(requestQuitToLobby)
        }, null, 8, ["lastScreen", "onConfirm_leave_game", "onConfirm_quit_to_lobby"])) : createCommentVNode("", true),
        unref(currentScreen).type == unref(ScreenType).Disconnected.type ? (openBlock(), createBlock(Disconnected, { key: 8 })) : createCommentVNode("", true)
      ], 64);
    };
  }
};
createApp(_sfc_main).mount("#app");
