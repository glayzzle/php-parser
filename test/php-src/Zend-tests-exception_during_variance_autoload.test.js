// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_during_variance_autoload.phpt
  it("Exception during delayed variance autoload", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function($class) {\n    echo \"$class\\n\";\n    if ($class == 'X') {\n        new Y;\n    }\n    if ($class == 'Y') {\n        new Q;\n    }\n});\nclass A {\n    function method(): X {}\n}\nclass B extends A {\n    function method(): Y {}\n}\n?>")).toMatchSnapshot();
  });
});
