// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/add_001.phpt
  it("JIT ADD: 001", function () {
    expect(parser.parseCode("<?php\nfunction foo($var) {\n  $res = $var + 1;\n  var_dump($res);\n}\nfoo(1);\n?>")).toMatchSnapshot();
  });
});
