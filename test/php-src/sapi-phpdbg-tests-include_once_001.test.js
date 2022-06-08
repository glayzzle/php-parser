// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/phpdbg/tests/include_once_001.phpt
  it("include_once must include only once", function () {
    expect(parser.parseCode("<?php\ninclude_once __DIR__.'/include.inc';\ninclude_once __DIR__.'/include.inc';\n")).toMatchSnapshot();
  });
});
