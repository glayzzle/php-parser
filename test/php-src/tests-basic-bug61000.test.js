// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/bug61000.phpt
  it("Bug #61000 (Exceeding max nesting level doesn't delete numerical vars)", function () {
    expect(parser.parseCode("<?php\nprint_r($_GET);\nprint_r($_POST);\n?>")).toMatchSnapshot();
  });
});
