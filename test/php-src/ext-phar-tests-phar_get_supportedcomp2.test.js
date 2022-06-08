// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_get_supportedcomp2.phpt
  it("Phar::getSupportedCompression() (bz2 only)", function () {
    expect(parser.parseCode("<?php\nvar_dump(Phar::getSupportedCompression());\n?>")).toMatchSnapshot();
  });
});
