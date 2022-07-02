// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/quotemeta_basic_1.phpt
  it("Test function quotemeta() - using an empty string is given as str", function () {
    expect(parser.parseCode("<?php\n$str = \"\";\nvar_dump(quotemeta($str));\n?>")).toMatchSnapshot();
  });
});
