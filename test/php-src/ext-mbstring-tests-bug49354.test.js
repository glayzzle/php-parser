// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug49354.phpt
  it("Bug #49354 (mb_strcut() cuts wrong length when offset is in the middle of a multibyte character)", function () {
    expect(parser.parseCode("<?php\n$crap = 'AåBäCöDü';\nvar_dump(mb_strcut($crap, 0, 100, 'UTF-8'));\nvar_dump(mb_strcut($crap, 1, 100, 'UTF-8'));\nvar_dump(mb_strcut($crap, 2, 100, 'UTF-8'));\nvar_dump(mb_strcut($crap, 3, 100, 'UTF-8'));\nvar_dump(mb_strcut($crap, 12, 100, 'UTF-8'));\nvar_dump(mb_strcut($crap, 13, 100, 'UTF-8'));\n?>")).toMatchSnapshot();
  });
});
