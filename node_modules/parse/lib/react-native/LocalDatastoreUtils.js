Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isLocalDatastoreKey = isLocalDatastoreKey;
exports.OBJECT_PREFIX = exports.PIN_PREFIX = exports.DEFAULT_PIN = void 0;
var DEFAULT_PIN = '_default';
exports.DEFAULT_PIN = DEFAULT_PIN;
var PIN_PREFIX = 'parsePin_';
exports.PIN_PREFIX = PIN_PREFIX;
var OBJECT_PREFIX = 'Parse_LDS_';
exports.OBJECT_PREFIX = OBJECT_PREFIX;

function isLocalDatastoreKey(key) {
  return !!(key && (key === DEFAULT_PIN || key.startsWith(PIN_PREFIX) || key.startsWith(OBJECT_PREFIX)));
}