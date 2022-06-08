// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug65544.phpt
  it("Bug #65544: mb title case conversion-first word in quotation isn't capitalized", function () {
    expect(parser.parseCode("<?php\nvar_dump(mb_convert_case(\"\\\"or else it doesn't, you know. the name of the song is called 'haddocks' eyes.'\\\"\", MB_CASE_TITLE));\n?>")).toMatchSnapshot();
  });
});
