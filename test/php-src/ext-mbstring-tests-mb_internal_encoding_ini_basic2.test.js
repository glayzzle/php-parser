// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_internal_encoding_ini_basic2.phpt
  it("Test INI mbstring.internal_encoding basic - encoding when valid specified", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing INI mbstring.internal_encoding : basic functionality ***\\n\";\necho mb_internal_encoding().\"\\n\";\necho ini_get('mbstring.internal_encoding').\"\\n\";\nmb_internal_encoding('UTF-8');\necho mb_internal_encoding().\"\\n\";\necho ini_get('mbstring.internal_encoding').\"\\n\";\n?>")).toMatchSnapshot();
  });
});
