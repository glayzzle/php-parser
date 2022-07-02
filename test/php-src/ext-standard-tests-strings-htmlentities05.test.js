// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/htmlentities05.phpt
  it("htmlentities() test 5 (mbstring / cp1252)", function () {
    expect(parser.parseCode("<?php\n    print mb_internal_encoding().\"\\n\";\n    var_dump(htmlentities(\"\\x82\\x86\\x99\\x9f\", ENT_QUOTES, ''));\n    var_dump(htmlentities(\"\\x80\\xa2\\xa3\\xa4\\xa5\", ENT_QUOTES, ''));\n?>")).toMatchSnapshot();
  });
});
