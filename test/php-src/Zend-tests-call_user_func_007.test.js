// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/call_user_func_007.phpt
  it("call_user_func() should not use FUNC_ARG fetches", function () {
    expect(parser.parseCode("<?php\nfunction foo(&$ref) { $ref = 24; }\n$a = [];\ncall_user_func('foo', $a[0][0]);\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
