// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/htmlentities08.phpt
  it("htmlentities() test 8 (mbstring / EUC-JP)", function () {
    expect(parser.parseCode("<?php\n    mb_internal_encoding('EUC-JP');\n    print mb_internal_encoding().\"\\n\";\n    var_dump(htmlentities(\"\\xa1\\xa2\\xa1\\xa3\\xa1\\xa4\", ENT_QUOTES, ''));\n?>")).toMatchSnapshot();
  });
});
