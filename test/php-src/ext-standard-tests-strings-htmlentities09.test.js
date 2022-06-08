// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/htmlentities09.phpt
  it("htmlentities() test 9 (mbstring / Shift_JIS)", function () {
    expect(parser.parseCode("<?php\n    mb_internal_encoding('Shift_JIS');\n    print mb_internal_encoding().\"\\n\";\n    var_dump(bin2hex(htmlentities(\"\\x81\\x41\\x81\\x42\\x81\\x43\", ENT_QUOTES, '')));\n?>")).toMatchSnapshot();
  });
});
