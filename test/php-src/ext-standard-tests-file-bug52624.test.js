// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug52624.phpt
  it("Bug #52624 (tempnam() by-pass open_basedir with inexistent directory)", function () {
    expect(parser.parseCode("<?php\necho tempnam(\"directory_that_not_exists\", \"prefix_\");\n?>")).toMatchSnapshot();
  });
});
