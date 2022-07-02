// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_060.phpt
  it("runtime cache must be invalidated for Closure::call()", function () {
    expect(parser.parseCode("<?php\nclass A {\n    private static $priv = 7;\n    static function get() {\n        return function() {\n            var_dump(isset(A::$priv));\n        };\n    }\n}\n$closure = A::get();\n$closure(); // init rt_cache\n$closure->call(new class(){}, null);\n$closure();\n?>")).toMatchSnapshot();
  });
});
