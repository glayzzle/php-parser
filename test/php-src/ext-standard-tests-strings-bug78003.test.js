// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug78003.phpt
  it("Bug #78003 (strip_tags output change since PHP 7.3)", function () {
    expect(parser.parseCode("<?php\nvar_dump(\n    strip_tags('<foo<>bar>'),\n    strip_tags('<foo<!>bar>'),\n    strip_tags('<foo<?>bar>')\n);\n?>")).toMatchSnapshot();
  });
});
