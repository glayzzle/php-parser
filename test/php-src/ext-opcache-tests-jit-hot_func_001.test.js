// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/hot_func_001.phpt
  it("JIT HOT_FUNC: 001", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n  var_dump(\"hello\");\n}\nfoo();\nfoo();\nfoo();\n?>")).toMatchSnapshot();
  });
});
