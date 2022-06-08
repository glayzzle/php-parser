// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_031.phpt
  it("JIT ASSIGN: 031", function () {
    expect(parser.parseCode("<?php\n$c =& $a;\n$b = $a;\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
