// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug74164.phpt
  it("Bug #74164 (PHP hangs when an invalid value is dynamically passed to typehinted by-ref arg)", function () {
    expect(parser.parseCode("<?php\nnamespace Foo;\nset_error_handler(function ($type, $msg) {\n    throw new \\Exception($msg);\n});\ncall_user_func(function (array &$ref) {var_dump(\"xxx\");}, 'not_an_array_variable');\n?>")).toMatchSnapshot();
  });
});
