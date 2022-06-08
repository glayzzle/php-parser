// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/phpdbg/tests/include_once_002.phpt
  it("include_once must include only once #2", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__.'/include.inc';\ninclude_once __DIR__.'/include.inc';\n")).toMatchSnapshot();
  });
});
