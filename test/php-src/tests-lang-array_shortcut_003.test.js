// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/array_shortcut_003.phpt
  it("Testing array shortcut and bracket operator", function () {
    expect(parser.parseCode("<?php\n$a = [1, 2, 3, 4, 5];\nprint_r([$a[1], $a[3]]);\n?>")).toMatchSnapshot();
  });
});
