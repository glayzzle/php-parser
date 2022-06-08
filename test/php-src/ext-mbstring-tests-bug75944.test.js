// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug75944.phpt
  it("Bug #75944 (wrong detection cp1251 encoding because of missing last cyrillic letter)", function () {
    expect(parser.parseCode("<?php\nvar_dump(mb_detect_encoding(chr(0xfe), array('CP-1251'))); // letter '?'\nvar_dump(mb_detect_encoding(chr(0xff), array('CP-1251'))); // letter '?'\n?>")).toMatchSnapshot();
  });
});
