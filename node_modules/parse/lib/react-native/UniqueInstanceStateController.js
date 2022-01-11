var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getState = getState;
exports.initializeState = initializeState;
exports.removeState = removeState;
exports.getServerData = getServerData;
exports.setServerData = setServerData;
exports.getPendingOps = getPendingOps;
exports.setPendingOp = setPendingOp;
exports.pushPendingState = pushPendingState;
exports.popPendingState = popPendingState;
exports.mergeFirstPendingState = mergeFirstPendingState;
exports.getObjectCache = getObjectCache;
exports.estimateAttribute = estimateAttribute;
exports.estimateAttributes = estimateAttributes;
exports.commitServerChanges = commitServerChanges;
exports.enqueueTask = enqueueTask;
exports.duplicateState = duplicateState;
exports.clearAllState = clearAllState;

var ObjectStateMutations = _interopRequireWildcard(require("./ObjectStateMutations"));

var _TaskQueue = _interopRequireDefault(require("./TaskQueue"));

var objectState = new WeakMap();

function getState(obj) {
  var classData = objectState.get(obj);
  return classData || null;
}

function initializeState(obj, initial) {
  var state = getState(obj);

  if (state) {
    return state;
  }

  if (!initial) {
    initial = {
      serverData: {},
      pendingOps: [{}],
      objectCache: {},
      tasks: new _TaskQueue.default(),
      existed: false
    };
  }

  state = initial;
  objectState.set(obj, state);
  return state;
}

function removeState(obj) {
  var state = getState(obj);

  if (state === null) {
    return null;
  }

  objectState.delete(obj);
  return state;
}

function getServerData(obj) {
  var state = getState(obj);

  if (state) {
    return state.serverData;
  }

  return {};
}

function setServerData(obj, attributes) {
  var serverData = initializeState(obj).serverData;
  ObjectStateMutations.setServerData(serverData, attributes);
}

function getPendingOps(obj) {
  var state = getState(obj);

  if (state) {
    return state.pendingOps;
  }

  return [{}];
}

function setPendingOp(obj, attr, op) {
  var pendingOps = initializeState(obj).pendingOps;
  ObjectStateMutations.setPendingOp(pendingOps, attr, op);
}

function pushPendingState(obj) {
  var pendingOps = initializeState(obj).pendingOps;
  ObjectStateMutations.pushPendingState(pendingOps);
}

function popPendingState(obj) {
  var pendingOps = initializeState(obj).pendingOps;
  return ObjectStateMutations.popPendingState(pendingOps);
}

function mergeFirstPendingState(obj) {
  var pendingOps = getPendingOps(obj);
  ObjectStateMutations.mergeFirstPendingState(pendingOps);
}

function getObjectCache(obj) {
  var state = getState(obj);

  if (state) {
    return state.objectCache;
  }

  return {};
}

function estimateAttribute(obj, attr) {
  var serverData = getServerData(obj);
  var pendingOps = getPendingOps(obj);
  return ObjectStateMutations.estimateAttribute(serverData, pendingOps, obj.className, obj.id, attr);
}

function estimateAttributes(obj) {
  var serverData = getServerData(obj);
  var pendingOps = getPendingOps(obj);
  return ObjectStateMutations.estimateAttributes(serverData, pendingOps, obj.className, obj.id);
}

function commitServerChanges(obj, changes) {
  var state = initializeState(obj);
  ObjectStateMutations.commitServerChanges(state.serverData, state.objectCache, changes);
}

function enqueueTask(obj, task) {
  var state = initializeState(obj);
  return state.tasks.enqueue(task);
}

function duplicateState(source, dest) {
  var oldState = initializeState(source);
  var newState = initializeState(dest);

  for (var key in oldState.serverData) {
    newState.serverData[key] = oldState.serverData[key];
  }

  for (var index = 0; index < oldState.pendingOps.length; index++) {
    for (var _key in oldState.pendingOps[index]) {
      newState.pendingOps[index][_key] = oldState.pendingOps[index][_key];
    }
  }

  for (var _key2 in oldState.objectCache) {
    newState.objectCache[_key2] = oldState.objectCache[_key2];
  }

  newState.existed = oldState.existed;
}

function clearAllState() {
  objectState = new WeakMap();
}