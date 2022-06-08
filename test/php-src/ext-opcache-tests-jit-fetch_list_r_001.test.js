// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/fetch_list_r_001.phpt
  it("JIT FETCH_LIST_R: 001", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    $v = 'a';\n    list($$v) = \"\";\n    var_dump($a);\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
