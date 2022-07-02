// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug22207.phpt
  it("Bug #22207 (missing 0 when using the e notation in *printf functions)", function () {
    expect(parser.parseCode("<?php\n    printf(\"%10.5e\\n\", 1.1);\n    var_dump(sprintf(\"%10.5e\\n\", 1.1));\n?>")).toMatchSnapshot();
  });
});
