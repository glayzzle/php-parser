// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/jump02.phpt
  it("jump 02: goto forward", function () {
    expect(parser.parseCode("<?php\n$n = 1;\nL1:\nif ($n > 3) goto L2;\necho \"$n: ok\\n\";\n$n++;\ngoto L1;\nL2:\n?>")).toMatchSnapshot();
  });
});
