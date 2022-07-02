// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug79951.phpt
  it("Bug #79951: Memory leak in str_replace of empty string", function () {
    expect(parser.parseCode("<?php\nvar_dump(str_replace([\"\"], [1000], \"foo\"));\n?>")).toMatchSnapshot();
  });
});
