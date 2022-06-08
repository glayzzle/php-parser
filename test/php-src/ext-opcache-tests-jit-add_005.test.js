// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/add_005.phpt
  it("JIT ADD: 005", function () {
    expect(parser.parseCode("<?php\nfunction foo($var) {\n  $res = $var + 2;\n  var_dump($res);\n}\nfoo(\"hello\");\n?>")).toMatchSnapshot();
  });
});
