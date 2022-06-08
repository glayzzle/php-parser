// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/run-test/extensions-shared.phpt
  it("phpt EXTENSIONS directive - shared module", function () {
    expect(parser.parseCode("<?php\nvar_dump(extension_loaded('openssl'));\n?>")).toMatchSnapshot();
  });
});
