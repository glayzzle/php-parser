// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug36392.phpt
  it("Bug #36392 (wrong number of decimal digits with %e specifier in sprintf)", function () {
    expect(parser.parseCode("<?php\n    echo sprintf(\"%e\\n\", 1.123456789);\n    echo sprintf(\"%.10e\\n\", 1.123456789);\n    echo sprintf(\"%.0e\\n\", 1.123456789);\n    echo sprintf(\"%.1e\\n\", 1.123456789);\n    echo sprintf(\"%5.1e\\n\", 1.123456789);\n?>")).toMatchSnapshot();
  });
});
