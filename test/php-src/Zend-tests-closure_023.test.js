// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_023.phpt
  it("Closure 023: Closure declared in statically called method", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    public static function bar() {\n        $func = function() { echo \"Done\"; };\n        $func();\n    }\n}\nfoo::bar();\n?>")).toMatchSnapshot();
  });
});
