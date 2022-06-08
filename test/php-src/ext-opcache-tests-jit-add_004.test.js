// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/add_004.phpt
  it("JIT ADD: 004", function () {
    expect(parser.parseCode("<?php\nfunction foo($var) {\n  $ret = $var + 200;\n  var_dump($ret);\n}\nfoo(PHP_INT_MAX);\n?>")).toMatchSnapshot();
  });
});
