// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug78386.phpt
  it("Bug #78386 (fstat mode has unexpected value on PHP 7.4)", function () {
    expect(parser.parseCode("<?php\n$handle = popen('dir', 'r');\n$stat = fstat($handle);\nvar_dump(decoct($stat['mode']));\n?>")).toMatchSnapshot();
  });
});
