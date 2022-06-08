// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_get_supportedcomp4.phpt
  it("Phar::getSupportedCompression() (none)", function () {
    expect(parser.parseCode("<?php\nvar_dump(Phar::getSupportedCompression());\n?>")).toMatchSnapshot();
  });
});
