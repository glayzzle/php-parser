// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/wrong_inlining_004.phpt
  it("Inlining through call_user_func()", function () {
    expect(parser.parseCode("<?php\nfunction get_const() {\n    return 42;\n}\nfunction test() {\n    $x = new stdClass;\n    var_dump(call_user_func('get_const', $x));\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
