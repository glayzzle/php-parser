// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug29150.phpt
  it("Bug #29150 (Roman number format for months)", function () {
    expect(parser.parseCode("<?php\n    echo gmdate(\"Y-m-d H:i:s\", strtotime(\"20 VI. 2005\"));\n?>")).toMatchSnapshot();
  });
});
