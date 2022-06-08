// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/htmlentities10.phpt
  it("htmlentities() test 10 (default_charset / cp1252)", function () {
    expect(parser.parseCode("<?php\nprint ini_get('default_charset').\"\\n\";\nvar_dump(htmlentities(\"\\x82\\x86\\x99\\x9f\", ENT_QUOTES, ''));\nvar_dump(htmlentities(\"\\x80\\xa2\\xa3\\xa4\\xa5\", ENT_QUOTES, ''));\n?>")).toMatchSnapshot();
  });
});
