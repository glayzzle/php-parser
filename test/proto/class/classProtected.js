
// using http://ejohn.org/blog/simple-javascript-inheritance/
var Class = require('../glayzzle/src/compat/class');

// declare the bar class
var bar = (function() {
    // class declaration
    return Class.__extends({
        // public constructor
        __construct: function(def) {

            var protectedVar = (def && def.protectedVar) || "protectedVar";

            // privileged function
            this.getProtectedVar = function() {
                return protectedVar;
            };
        }
    });
}());

// declare the bar class
var barChild = (function() {
    // class declaration
    return bar.__extends({
        // public constructor
        __construct: function(def) {
            this._super({
                protectedVar: "inheritedProtectedVar"
            });
        }
    }).__class;
}());

var myBar = new bar();
var myBarChild = new barChild();

console.log("TEST PROTECTED");
console.log("Protected on super", (myBar.protectedVar == undefined) , myBar.protectedVar);
console.log("Protected through super getter", (myBar.getProtectedVar() == "protectedVar"), myBar.getProtectedVar());
console.log("Protected on inherited", (myBarChild.protectedVar == undefined) , myBarChild.protectedVar);
console.log("Protected through inherited getter", (myBarChild.getProtectedVar() == "inheritedProtectedVar"), myBarChild.getProtectedVar());