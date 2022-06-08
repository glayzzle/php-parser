// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/casefold.phpt
  it("mb_strtoupper() / mb_strtolower()", function () {
    expect(parser.parseCode("<?php\n    mb_internal_encoding( 'ISO-8859-1' );\n    print mb_strtolower( \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\\n\" );\n    print mb_strtoupper( mb_strtolower( \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\\n\" ) );\n    print mb_strtoupper( \"���\\n\" );\n    print mb_convert_case( \"���\\n\", MB_CASE_TITLE );\n?>")).toMatchSnapshot();
  });
});
