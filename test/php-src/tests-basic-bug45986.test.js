// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/bug45986.phpt
  it("Bug #45986 (wrong error message for a non existent file on rename)", function () {
    expect(parser.parseCode("<?php\nrename('foo', 'bar');\n?>")).toMatchSnapshot();
  });
});
