// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug32021.phpt
  it("Bug #32021 (Crash caused by range('', 'z'))", function () {
    expect(parser.parseCode("<?php\n$foo = range('', 'z');\nvar_dump($foo);\n?>\nALIVE")).toMatchSnapshot();
  });
});
