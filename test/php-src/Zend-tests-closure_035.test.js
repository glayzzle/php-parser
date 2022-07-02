// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_035.phpt
  it("Testing recursion detection with Closures", function () {
    expect(parser.parseCode("<?php\n$x = function () use (&$x) {\n    $h = function () use ($x) {\n        var_dump($x);\n        return 1;\n    };\n    return $h();\n};\nvar_dump($x());\n?>")).toMatchSnapshot();
  });
});
