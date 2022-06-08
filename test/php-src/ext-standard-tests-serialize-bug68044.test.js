// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug68044.phpt
  it("Bug #68044 Integer overflow in unserialize() (32-bits only)", function () {
    expect(parser.parseCode("<?php\n    echo unserialize('C:3:\"XYZ\":18446744075857035259:{}');\n?>\n===DONE==")).toMatchSnapshot();
  });
});
