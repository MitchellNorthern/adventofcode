"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a, e_2, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var file = fs_1.readFileSync('./inputday1problem2.txt', 'utf-8');
var numMap = new Map();
file.split('\n').forEach(function (num) {
    numMap.set(num, parseInt(num));
});
try {
    for (var _c = __values(numMap.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
        var value = _d.value;
        var desiredNum = 2020 - value;
        var newMap = new Map(numMap);
        newMap.delete(value.toString());
        try {
            for (var _e = (e_2 = void 0, __values(newMap.values())), _f = _e.next(); !_f.done; _f = _e.next()) {
                var otherValue = _f.value;
                var newDesiredNum = desiredNum - otherValue;
                if (newDesiredNum > 0 && newMap.get(newDesiredNum.toString())) {
                    console.log(value * otherValue * newDesiredNum);
                    process.exit(0);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
    }
    finally { if (e_1) throw e_1.error; }
}
