// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/skeleton/tests/001.phpt
  it("Check if %EXTNAME% is loaded", function () {
    expect(parser.parseCode("<?php\necho 'The extension \"%EXTNAME%\" is available';\n?>")).toMatchSnapshot();
  });
});
