// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/array_shortcut_001.phpt
  it("Square bracket array shortcut test", function () {
    expect(parser.parseCode("<?php\nprint_r([1, 2, 3]);\n?>")).toMatchSnapshot();
  });
});
