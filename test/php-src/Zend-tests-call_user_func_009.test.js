// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/call_user_func_009.phpt
  it("call_user_func() behavior when passing literal to reference parameter", function () {
    expect(parser.parseCode("<?php\nnamespace Foo;\nvar_dump(call_user_func('sort', []));\nvar_dump(\\call_user_func('sort', []));\n?>")).toMatchSnapshot();
  });
});
