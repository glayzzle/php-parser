// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/add_002.phpt
  it("JIT ADD: 002", function () {
    expect(parser.parseCode("<?php\nfunction foo($var) {\n  $res = $var + 0x1000;\n  var_dump($res);\n}\nfoo(1);\n?>")).toMatchSnapshot();
  });
});
