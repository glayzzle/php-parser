// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/register_shutdown_function_refcount.phpt
  it("register_shutdown_function() and long-term fci storage", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    function register() {\n        register_shutdown_function('Test::method');\n    }\n    function method() {\n        var_dump($this);\n    }\n}\n(new Test)->register();\n?>")).toMatchSnapshot();
  });
});
