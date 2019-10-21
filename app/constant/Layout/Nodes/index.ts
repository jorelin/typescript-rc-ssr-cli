/* ----------节点类----------- */
// 节点类-新增
export const NODE_INSERT_DATA = "NODE_INSERT_DATA";
export const NODE_INSERT_SUCCESS = "NODE_INSERT_SUCCESS";

// 节点类-删除()
export const NODE_DELETE_DATA = "NODE_DELETE_DATA";
export const NODE_DELETE_SUCCESS = "NODE_DELETE_SUCCESS";

// 节点类-修改(该TYPE仅负责节点类后端附带数据修改，若节点上存在线，修改位置等信息，请走群体类NODE_LINE_UPDATE_DATA-TYPE控制，避免undo记录失效)
export const NODE_UPDATE_DATA = "NODE_UPDATE_DATA";
export const NODE_UPDATE_SUCCESS = "NODE_UPDATE_SUCCESS";