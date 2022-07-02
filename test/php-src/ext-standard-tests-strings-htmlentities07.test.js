// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/htmlentities07.phpt
  it("htmlentities() test 7 (mbstring / ISO-8859-1)", function () {
    expect(parser.parseCode("<?php\n    mb_internal_encoding('ISO-8859-1');\n    print mb_internal_encoding().\"\\n\";\n    var_dump(htmlentities(\"\\xe4\\xf6\\xfc\", ENT_QUOTES, ''));\n?>")).toMatchSnapshot();
  });
});
