// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug48697.phpt
  it("Bug #48697 (mb_internal_encoding() value gets reset by parse_str() or mb_parse_str()", function () {
    expect(parser.parseCode("<?php\nini_set('mbstring.internal_encoding', 'ISO-8859-15');\nini_set('mbstring.encoding_translation', true);\nvar_dump(mb_internal_encoding());\nmb_internal_encoding('UTF-8');\nvar_dump(mb_internal_encoding());\nparse_str('a=b', $ary);\nvar_dump(mb_internal_encoding());\nmb_internal_encoding('UTF-8');\nvar_dump(mb_internal_encoding());\nparse_str('a=b', $ary);\nvar_dump(mb_internal_encoding());\n?>")).toMatchSnapshot();
  });
});
