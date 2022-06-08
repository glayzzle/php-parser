// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/htmlentities12.phpt
  it("htmlentities() test 12 (default_charset / ISO-8859-1)", function () {
    expect(parser.parseCode("<?php\nprint ini_get('default_charset').\"\\n\";\nvar_dump(htmlentities(\"\\xe4\\xf6\\xfc\", ENT_QUOTES, ''));\n?>")).toMatchSnapshot();
  });
});
