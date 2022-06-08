// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug63447_002.phpt
  it("Bug #63447 (max_input_vars doesn't filter variables when mbstring.encoding_translation = On)", function () {
    expect(parser.parseCode("<?php\nvar_dump($_POST);\n?>")).toMatchSnapshot();
  });
});
