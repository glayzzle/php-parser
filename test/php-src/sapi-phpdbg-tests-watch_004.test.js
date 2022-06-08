// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/phpdbg/tests/watch_004.phpt
  it("Test detection of inline string manipulations on zval watch", function () {
    expect(parser.parseCode("<?php\n$b = \"a\";\n$a = $b.$b;\n$a[1] = \"b\";\n")).toMatchSnapshot();
  });
});
