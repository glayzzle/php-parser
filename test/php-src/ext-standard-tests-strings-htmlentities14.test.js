// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/htmlentities14.phpt
  it("htmlentities() test 14 (default_charset / Shift_JIS)", function () {
    expect(parser.parseCode("<?php\nprint ini_get('default_charset').\"\\n\";\nvar_dump(htmlentities(\"\\x81\\x41\\x81\\x42\\x81\\x43\", ENT_QUOTES, ''));\n?>")).toMatchSnapshot();
  });
});
