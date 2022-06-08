// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/bug68925.phpt
  it("Bug #68925 (CVE-2015-0235 – GHOST: glibc gethostbyname buffer overflow)", function () {
    expect(parser.parseCode("<?php\nvar_dump(gethostbyname(str_repeat(\"0\", 2501)));\nvar_dump(gethostbynamel(str_repeat(\"0\", 2501)));\n?>")).toMatchSnapshot();
  });
});
