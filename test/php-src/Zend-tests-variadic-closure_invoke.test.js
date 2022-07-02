// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/variadic/closure_invoke.phpt
  it("Closure::__invoke() with variadic parameter", function () {
    expect(parser.parseCode("<?php\n$closure = function(&...$refs) {};\n$closure->__invoke(\n    $v1,  $v2,  $v3,  $v4,\n    $v5,  $v6,  $v7,  $v8,\n    $v9, $v10, $v11, $v12,\n    $v13\n);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
