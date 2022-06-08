// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug70237.phpt
  it("Bug #70237 (Empty while and do-while segmentation fault with opcode on CLI enabled)", function () {
    expect(parser.parseCode("<?php\nfunction neverUsed() {\n    $bool = false;\n    while ($bool) { };\n    //do { } while ($bool);\n}\n?>\nokey")).toMatchSnapshot();
  });
});
