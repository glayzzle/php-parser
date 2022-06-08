// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_get_supported_signatures_002.phpt
  it("Phar::getSupportedSignatures()", function () {
    expect(parser.parseCode("<?php\nvar_dump(Phar::getSupportedSignatures());\n?>")).toMatchSnapshot();
  });
});
