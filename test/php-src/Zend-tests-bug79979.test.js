// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug79979.phpt
  it("Bug #79979 (passing value to by-ref param via CUF(A) crashes)", function () {
    expect(parser.parseCode("<?php\nnamespace Foo;\ncall_user_func_array(\"str_replace\", [\"a\", \"b\", \"c\", new \\stdClass]);\ncall_user_func_array(\"str_replace\", [\"a\", \"b\", \"c\", \"count\" => new \\stdClass]);\n\\call_user_func_array(\"str_replace\", [\"a\", \"b\", \"c\", new \\stdClass]);\n\\call_user_func_array(\"str_replace\", [\"a\", \"b\", \"c\", \"count\" => new \\stdClass]);\n?>")).toMatchSnapshot();
  });
});
