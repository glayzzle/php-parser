// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_ereg_replace.phpt
  it("mb_ereg_replace()", function () {
    expect(parser.parseCode("<?php\n    mb_regex_set_options( '' );\n    print mb_ereg_replace( ' ', '-', 'a b c d e' ).\"\\n\";\n    print mb_ereg_replace( '([a-z]+)','[\\\\1]', 'abc def ghi' );\n?>")).toMatchSnapshot();
  });
});
