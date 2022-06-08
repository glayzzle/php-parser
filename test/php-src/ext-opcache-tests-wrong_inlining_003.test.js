// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/wrong_inlining_003.phpt
  it("foo($bar) with undefined $bar", function () {
    expect(parser.parseCode("<?php\nfunction get_const() {\n    return 42;\n}\nfunction test() {\n    var_dump(get_const($undef));\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
