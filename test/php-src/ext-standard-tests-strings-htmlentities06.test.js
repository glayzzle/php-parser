// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/htmlentities06.phpt
  it("htmlentities() test 6 (mbstring / ISO-8859-15)", function () {
    expect(parser.parseCode("<?php\n    mb_internal_encoding('ISO-8859-15');\n    print mb_internal_encoding().\"\\n\";\n    var_dump(htmlentities(\"\\xbc\\xbd\\xbe\", ENT_QUOTES, ''));\n?>")).toMatchSnapshot();
  });
});
