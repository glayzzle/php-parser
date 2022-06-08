// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_internal_encoding_ini_invalid_encoding.phpt
  it("Test INI mbstring.internal_encoding basic - invalid encoding specified in INI", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing INI mbstring.internal_encoding: invalid encoding specified in INI ***\\n\";\necho mb_internal_encoding().\"\\n\";\necho ini_get('mbstring.internal_encoding').\"\\n\";\nmb_internal_encoding('UTF-8');\necho mb_internal_encoding().\"\\n\";\necho ini_get('mbstring.internal_encoding').\"\\n\";\n?>")).toMatchSnapshot();
  });
});
