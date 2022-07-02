// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/bug80960.phpt
  it("Fix #80960 (opendir() warning wrong info when failed on Windows)", function () {
    expect(parser.parseCode("<?php\nopendir(\"notexist*\");\nopendir(\"notexist?\");\nopendir(str_pad(\"longname\", PHP_MAXPATHLEN - strlen(getcwd()), \"_\"));\n?>")).toMatchSnapshot();
  });
});
