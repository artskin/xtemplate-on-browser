KISSY.add(function(S,require,exports,module){
module.exports = function a(scope,buffer,tpl,undefined){
var data = scope.data;
var affix = scope.affix;
var t;
var root = tpl.root;
var name = tpl.name;
var pos = tpl.pos;
var nativeCommands = root.nativeCommands;
var utils = root.utils;
var callFnUtil = utils["callFn"];
var callCommandUtil = utils["callCommand"];
var rangeCommand = nativeCommands["range"];
var foreachCommand = nativeCommands["foreach"];
var forinCommand = nativeCommands["forin"];
var eachCommand = nativeCommands["each"];
var withCommand = nativeCommands["with"];
var ifCommand = nativeCommands["if"];
var setCommand = nativeCommands["set"];
var includeCommand = nativeCommands["include"];
var parseCommand = nativeCommands["parse"];
var extendCommand = nativeCommands["extend"];
var blockCommand = nativeCommands["block"];
var macroCommand = nativeCommands["macro"];
var debuggerCommand = nativeCommands["debugger"];


buffer.data += '';
var id0 = ((t=(affix.x)) !== undefined ? t:((t = data.x) !== undefined ? t :scope.resolveUp(["x"])));
buffer = buffer.writeEscaped(id0);
buffer.data += '';
var callRet1
buffer = root.include(scope,{params:[require("./b").TPL_NAME]},buffer,tpl);
buffer = buffer.writeEscaped(callRet1);
return buffer;
};
module.exports.TPL_NAME = module.id || module.name;
});