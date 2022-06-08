// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/isset_001.phpt
  it("ISSET_ISEMPTY_DIM with undefined variable", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    var_dump(isset($a[$undef]));\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
