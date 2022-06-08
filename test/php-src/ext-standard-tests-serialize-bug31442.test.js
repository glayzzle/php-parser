// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug31442.phpt
  it("Bug #31442 (unserialize broken on 64-bit systems)", function () {
    expect(parser.parseCode("<?php\necho unserialize(serialize(2147483648));\n?>")).toMatchSnapshot();
  });
});
