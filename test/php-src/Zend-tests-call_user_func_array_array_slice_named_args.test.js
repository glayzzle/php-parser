// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/call_user_func_array_array_slice_named_args.phpt
  it("call_user_func_array() + array_slice() + named arguments", function () {
    expect(parser.parseCode("<?php\ncall_user_func_array('func', array_slice(array: $a, 1, 2));\n?>")).toMatchSnapshot();
  });
});
