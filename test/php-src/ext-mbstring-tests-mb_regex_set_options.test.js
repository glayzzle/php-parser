// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_regex_set_options.phpt
  it("mb_regex_set_options()", function () {
    expect(parser.parseCode("<?php\n    mb_regex_set_options( 'x' );\n    print mb_ereg_replace(' -', '+', '- - - - -' );\n    mb_regex_set_options( '' );\n    print mb_ereg_replace(' -', '+', '- - - - -' );\n?>")).toMatchSnapshot();
  });
});
