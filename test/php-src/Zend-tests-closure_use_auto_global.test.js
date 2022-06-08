// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_use_auto_global.phpt
  it("Cannot use() auto-global", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    $fn = function() use($GLOBALS) {\n        var_dump($GLOBALS);\n    };\n    $fn();\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
