// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug77381.phpt
  it("Bug #77381 (heap buffer overflow in multibyte match_at)", function () {
    expect(parser.parseCode("<?php\nvar_dump(mb_ereg(\"000||0\\xfa\",\"0\"));\nvar_dump(mb_ereg(\"(?i)000000000000000000000\\xf0\",\"\"));\nvar_dump(mb_ereg(\"0000\\\\\".\"\\xf5\",\"0\"));\nvar_dump(mb_ereg(\"(?i)FFF00000000000000000\\xfd\",\"\"));\n?>")).toMatchSnapshot();
  });
});
