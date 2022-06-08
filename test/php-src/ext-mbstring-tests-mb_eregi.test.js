// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_eregi.phpt
  it("mb_eregi() and invalid arguments", function () {
    expect(parser.parseCode("<?php\nmb_regex_encoding('utf-8');\nvar_dump(mb_eregi('z', 'XYZ'));\nvar_dump(mb_eregi('xyzp', 'XYZ'));\nvar_dump(mb_eregi('ö', 'Öäü'));\n?>")).toMatchSnapshot();
  });
});
