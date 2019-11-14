"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* ----------节点类----------- */
// 节点类-新增
exports.NODE_INSERT_DATA = "NODE_INSERT_DATA";
exports.NODE_INSERT_SUCCESS = "NODE_INSERT_SUCCESS";
// 节点类-删除()
exports.NODE_DELETE_DATA = "NODE_DELETE_DATA";
exports.NODE_DELETE_SUCCESS = "NODE_DELETE_SUCCESS";
// 节点类-修改(该TYPE仅负责节点类后端附带数据修改，若节点上存在线，修改位置等信息，请走群体类NODE_LINE_UPDATE_DATA-TYPE控制，避免undo记录失效)
exports.NODE_UPDATE_DATA = "NODE_UPDATE_DATA";
exports.NODE_UPDATE_SUCCESS = "NODE_UPDATE_SUCCESS";
//# sourceMappingURL=index.js.map