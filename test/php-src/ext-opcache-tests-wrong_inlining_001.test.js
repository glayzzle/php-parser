// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/wrong_inlining_001.phpt
  it("Pass result of inlined function by reference", function () {
    expect(parser.parseCode("<?php\nfunction get_const() {\n    return 42;\n}\nfunction test() {\n    foo(get_const());\n}\nif (true) {\n    function foo(&$ref) {}\n}\ntest();\n?>\nOK")).toMatchSnapshot();
  });
});
