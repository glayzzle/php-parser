// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/php_version_win_const.phpt
  it("Check that windows version constants are initialized", function () {
    expect(parser.parseCode("<?php\nvar_dump(PHP_WINDOWS_VERSION_MAJOR > 0, PHP_WINDOWS_VERSION_MAJOR, PHP_WINDOWS_VERSION_MINOR);\n?>")).toMatchSnapshot();
  });
});
