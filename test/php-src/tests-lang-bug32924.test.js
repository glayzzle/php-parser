// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug32924.phpt
  it("Bug #32924 (prepend does not add file to included files)", function () {
    expect(parser.parseCode("<?php\ninclude_once(__DIR__.'/inc.inc');\nrequire_once(__DIR__.'/inc.inc');\n?>\nEND")).toMatchSnapshot();
  });
});
