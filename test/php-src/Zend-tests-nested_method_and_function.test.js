// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nested_method_and_function.phpt
  it("active_class_entry must be always correct (__METHOD__ should not depend on declaring function ce)", function () {
    expect(parser.parseCode("<?php\nnamespace Baz;\nclass Foo {\n    public static function bar() {\n        function foo() {\n            var_dump(__FUNCTION__);\n            var_dump(__METHOD__);\n            var_dump(__CLASS__);\n        }\n        foo();\n        var_dump(__FUNCTION__);\n        var_dump(__METHOD__);\n        var_dump(__CLASS__);\n        return function() {var_dump(__FUNCTION__); var_dump(__METHOD__); var_dump(__CLASS__); };\n    }\n}\n$c = Foo::bar();\n$c();\n?>")).toMatchSnapshot();
  });
});
