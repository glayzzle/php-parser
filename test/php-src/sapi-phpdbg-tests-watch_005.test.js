// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/phpdbg/tests/watch_005.phpt
  it("Test proper watch comparisons when having multiple levels of indirection from a zval to its value", function () {
    expect(parser.parseCode("<?php\n$b = \"a\";\n$a = $b.$b;\n$c = &$a;\n$a[1] = \"b\";\nexit;\n")).toMatchSnapshot();
  });
});
