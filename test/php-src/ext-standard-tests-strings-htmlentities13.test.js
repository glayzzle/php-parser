// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/htmlentities13.phpt
  it("htmlentities() test 13 (default_charset / EUC-JP)", function () {
    expect(parser.parseCode("<?php\nprint ini_get('default_charset').\"\\n\";\nvar_dump(htmlentities(\"\\xa1\\xa2\\xa1\\xa3\\xa1\\xa4\", ENT_QUOTES, ''));\n?>")).toMatchSnapshot();
  });
});
