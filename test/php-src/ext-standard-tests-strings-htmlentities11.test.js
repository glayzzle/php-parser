// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/htmlentities11.phpt
  it("htmlentities() test 11 (default_charset / ISO-8859-15)", function () {
    expect(parser.parseCode("<?php\nprint ini_get('default_charset').\"\\n\";\nvar_dump(htmlentities(\"\\xbc\\xbd\\xbe\", ENT_QUOTES, ''));\n?>")).toMatchSnapshot();
  });
});
