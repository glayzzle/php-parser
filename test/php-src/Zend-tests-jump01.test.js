// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/jump01.phpt
  it("jump 01: goto backward", function () {
    expect(parser.parseCode("<?php\n$n = 1;\nL1:\necho \"$n: ok\\n\";\n$n++;\nif ($n <= 3) goto L1;\n?>")).toMatchSnapshot();
  });
});
